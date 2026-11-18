
import { Request, Response, NextFunction } from 'express';
import { ProveedorModel } from '../models/proveedores.models';

export const obtenerProveedores = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const proveedores = await ProveedorModel.obtenerTodos();
    res.json(proveedores);
  } catch (error) {
    next(error);
  }
};

export const obtenerProveedorPorId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const proveedor = await ProveedorModel.obtenerPorId(Number(req.params.id));

    if (!proveedor) {
      return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    }

    res.json(proveedor);
  } catch (error) {
    next(error);
  }
};

export const crearProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const nuevoProveedor = await ProveedorModel.crear(req.body);
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    next(error);
  }
};

export const actualizarProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const proveedor = await ProveedorModel.actualizar(
      Number(req.params.id),
      req.body
    );

    if (!proveedor) {
      return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    }

    res.json(proveedor);
  } catch (error) {
    next(error);
  }
};

export const eliminarProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const eliminado = await ProveedorModel.eliminar(Number(req.params.id));

    if (!eliminado) {
      return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    }

    res.json({ mensaje: 'Proveedor eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};
