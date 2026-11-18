
import { pool } from '../config/database';

export interface Inventario {
  id?: number;
  producto: string;
  cantidad: number;
  precio: number;
  proveedor_id: number;
}

export class InventarioModel {

  static async obtenerTodos(): Promise<Inventario[]> {
    const resultado = await pool.query(
      'SELECT * FROM inventario ORDER BY id'
    );

    return resultado.rows;
  }

  static async obtenerPorId(id: number): Promise<Inventario | null> {
    const resultado = await pool.query(
      'SELECT * FROM inventario WHERE id = $1',
      [id]
    );

    return resultado.rows[0] || null;
  }

  static async crear(inventario: Inventario): Promise<Inventario> {
    const resultado = await pool.query(
      `INSERT INTO inventario (producto, cantidad, precio, proveedor_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [
        inventario.producto,
        inventario.cantidad,
        inventario.precio,
        inventario.proveedor_id
      ]
    );

    return resultado.rows[0];
  }

  static async actualizar(
    id: number,
    inventario: Inventario
  ): Promise<Inventario | null> {
    const resultado = await pool.query(
      `UPDATE inventario
       SET producto = $1,
           cantidad = $2,
           precio = $3,
           proveedor_id = $4
       WHERE id = $5
       RETURNING *`,
      [
        inventario.producto,
        inventario.cantidad,
        inventario.precio,
        inventario.proveedor_id,
        id
      ]
    );

    return resultado.rows[0] || null;
  }

  static async eliminar(id: number): Promise<boolean> {
    const resultado = await pool.query(
      'DELETE FROM inventario WHERE id = $1',
      [id]
    );

    return resultado.rowCount !== null && resultado.rowCount > 0;
  }
}
