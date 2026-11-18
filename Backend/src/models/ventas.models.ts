
import { pool } from '../config/database';

export interface Venta {
  id?: number;
  cliente_id: number;
  inventario_id: number;
  cantidad: number;
  total: number;
}

export class VentaModel {

  static async obtenerTodos(): Promise<Venta[]> {
    const resultado = await pool.query(
      'SELECT * FROM ventas ORDER BY id'
    );

    return resultado.rows;
  }

  static async obtenerPorId(id: number): Promise<Venta | null> {
    const resultado = await pool.query(
      'SELECT * FROM ventas WHERE id = $1',
      [id]
    );

    return resultado.rows[0] || null;
  }

  static async crear(venta: Venta): Promise<Venta> {
    const resultado = await pool.query(
      `INSERT INTO ventas (cliente_id, inventario_id, cantidad, total)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [
        venta.cliente_id,
        venta.inventario_id,
        venta.cantidad,
        venta.total
      ]
    );

    return resultado.rows[0];
  }

  static async actualizar(id: number, venta: Venta): Promise<Venta | null> {
    const resultado = await pool.query(
      `UPDATE ventas
       SET cliente_id = $1,
           inventario_id = $2,
           cantidad = $3,
           total = $4
       WHERE id = $5
       RETURNING *`,
      [
        venta.cliente_id,
        venta.inventario_id,
        venta.cantidad,
        venta.total,
        id
      ]
    );

    return resultado.rows[0] || null;
  }

  static async eliminar(id: number): Promise<boolean> {
    const resultado = await pool.query(
      'DELETE FROM ventas WHERE id = $1',
      [id]
    );

    return resultado.rowCount !== null && resultado.rowCount > 0;
  }
}
