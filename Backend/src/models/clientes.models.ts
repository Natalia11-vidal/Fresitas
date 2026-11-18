
import { pool } from '../config/database';

export interface Cliente {
  id?: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
}

export class ClienteModel {

  // Consultar todos los clientes desde PostgreSQL
  static async obtenerTodos(): Promise<Cliente[]> {
    const resultado = await pool.query(
      'SELECT * FROM clientes ORDER BY id'
    );

    return resultado.rows;
  }

  // Consultar un cliente por su ID
  static async obtenerPorId(id: number): Promise<Cliente | null> {
    const resultado = await pool.query(
      'SELECT * FROM clientes WHERE id = $1',
      [id]
    );

    return resultado.rows[0] || null;
  }

  // Registrar un cliente en PostgreSQL
  static async crear(cliente: Cliente): Promise<Cliente> {
    const resultado = await pool.query(
      `INSERT INTO clientes (nombre, apellido, telefono, correo)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [
        cliente.nombre,
        cliente.apellido,
        cliente.telefono,
        cliente.correo
      ]
    );

    return resultado.rows[0];
  }

  // Actualizar un cliente
  static async actualizar(
    id: number,
    cliente: Cliente
  ): Promise<Cliente | null> {

    const resultado = await pool.query(
      `UPDATE clientes
       SET nombre = $1,
           apellido = $2,
           telefono = $3,
           correo = $4
       WHERE id = $5
       RETURNING *`,
      [
        cliente.nombre,
        cliente.apellido,
        cliente.telefono,
        cliente.correo,
        id
      ]
    );

    return resultado.rows[0] || null;
  }

  // Eliminar un cliente
  static async eliminar(id: number): Promise<boolean> {
    const resultado = await pool.query(
      'DELETE FROM clientes WHERE id = $1',
      [id]
    );

    return resultado.rowCount !== null && resultado.rowCount > 0;
  }
}
