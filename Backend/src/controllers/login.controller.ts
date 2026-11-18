
import { Request, Response } from 'express';
import { LoginModel } from '../models/login.models';

export const login = async (req: Request, res: Response) => {
  try {
    const { usuario, contraseña } = req.body;

    if (!usuario || !contraseña) {
      return res.status(400).json({
        autenticado: false,
        mensaje: 'Usuario y contraseña son requeridos',
      });
    }

    const resultado = await LoginModel.autenticar({
      usuario,
      contraseña
    });

    if (resultado.autenticado) {
      return res.json(resultado);
    }

    return res.status(401).json(resultado);

  } catch (error) {
    console.error('Error en el login:', error);

    return res.status(500).json({
      autenticado: false,
      mensaje: 'Error al consultar los usuarios',
    });
  }
};
