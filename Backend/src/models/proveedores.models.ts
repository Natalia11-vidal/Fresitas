
import { pool } from '../config/database';

export interface Proveedor {
  id?: number;
  nombre: string;
  telefono: string;
  correo: string;
}

export class ProveedorModel {

  static async obtenerTodos(): Promise<Proveedor[]> {
    const resultado = await pool.query(
      'SELECT * FROM proveedores ORDER BY id'
    );

    return resultado.rows;
  }

  static async obtenerPorId(id: number): Promise<Proveedor | null> {
    const resultado = await pool.query(
      'SELECT * FROM proveedores WHERE id = $1',
      [id]
    );

    return resultado.rows[0] || null;
  }

  static async crear(proveedor: Proveedor): Promise<Proveedor> {
    const resultado = await pool.query(
      `INSERT INTO proveedores (nombre, telefono, correo)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [proveedor.nombre, proveedor.telefono, proveedor.correo]
    );

    return resultado.rows[0];
  }

  static async actualizar(
    id: number,
    proveedor: Proveedor
  ): Promise<Proveedor | null> {
    const resultado = await pool.query(
      `UPDATE proveedores
       SET nombre = $1,
           telefono = $2,
           correo = $3
       WHERE id = $4
       RETURNING *`,
      [proveedor.nombre, proveedor.telefono, proveedor.correo, id]
    );

    return resultado.rows[0] || null;
  }

  static async eliminar(id: number): Promise<boolean> {
    const resultado = await pool.query(
      'DELETE FROM proveedores WHERE id = $1',
      [id]
    );

    return resultado.rowCount !== null && resultado.rowCount > 0;
  }
}
