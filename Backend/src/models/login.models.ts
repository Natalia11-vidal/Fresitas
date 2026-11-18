
import { pool } from '../config/database';

export interface LoginRequest {
  usuario: string;
  contraseña: string;
}

export interface LoginResponse {
  autenticado: boolean;
  mensaje: string;
}

export class LoginModel {
  static async autenticar(
    credenciales: LoginRequest
  ): Promise<LoginResponse> {

    const resultado = await pool.query(
      `SELECT id, nombre, email
       FROM usuarios
       WHERE email = $1 AND password = $2`,
      [
        credenciales.usuario,
        credenciales.contraseña
      ]
    );

    if (resultado.rows.length > 0) {
      return {
        autenticado: true,
        mensaje: 'Acceso concedido',
      };
    }

    return {
      autenticado: false,
      mensaje: 'Usuario o contraseña incorrectos',
    };
  }
}
