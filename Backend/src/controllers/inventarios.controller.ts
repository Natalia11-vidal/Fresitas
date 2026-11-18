
import { Request, Response, NextFunction } from 'express';
import { InventarioModel } from '../models/inventarios.models';

export const obtenerInventarios = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const inventarios = await InventarioModel.obtenerTodos();
    res.json(inventarios);
  } catch (error) {
    next(error);
  }
};

export const obtenerInventarioPorId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const inventario = await InventarioModel.obtenerPorId(Number(req.params.id));

    if (!inventario) {
      return res.status(404).json({ mensaje: 'Inventario no encontrado' });
    }

    res.json(inventario);
  } catch (error) {
    next(error);
  }
};

export const crearInventario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const nuevoInventario = await InventarioModel.crear(req.body);
    res.status(201).json(nuevoInventario);
  } catch (error) {
    next(error);
  }
};

export const actualizarInventario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const inventario = await InventarioModel.actualizar(
      Number(req.params.id),
      req.body
    );

    if (!inventario) {
      return res.status(404).json({ mensaje: 'Inventario no encontrado' });
    }

    res.json(inventario);
  } catch (error) {
    next(error);
  }
};

export const eliminarInventario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const eliminado = await InventarioModel.eliminar(Number(req.params.id));

    if (!eliminado) {
      return res.status(404).json({ mensaje: 'Inventario no encontrado' });
    }

    res.json({ mensaje: 'Inventario eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};
