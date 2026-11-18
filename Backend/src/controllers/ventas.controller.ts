
import { Request, Response, NextFunction } from 'express';
import { VentaModel } from '../models/ventas.models';

export const obtenerVentas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ventas = await VentaModel.obtenerTodos();
    res.json(ventas);
  } catch (error) {
    next(error);
  }
};

export const obtenerVentaPorId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const venta = await VentaModel.obtenerPorId(Number(req.params.id));

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    res.json(venta);
  } catch (error) {
    next(error);
  }
};

export const crearVenta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const nuevaVenta = await VentaModel.crear(req.body);
    res.status(201).json(nuevaVenta);
  } catch (error) {
    next(error);
  }
};

export const actualizarVenta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const venta = await VentaModel.actualizar(
      Number(req.params.id),
      req.body
    );

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    res.json(venta);
  } catch (error) {
    next(error);
  }
};

export const eliminarVenta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const eliminado = await VentaModel.eliminar(Number(req.params.id));

    if (!eliminado) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    res.json({ mensaje: 'Venta eliminada correctamente' });
  } catch (error) {
    next(error);
  }
};
