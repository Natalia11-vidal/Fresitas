
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Credenciales {
  usuario: string;
  contraseña: string;
}

export interface RespuestaLogin {
  autenticado: boolean;
  mensaje: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private url = 'https://fresitas-production.up.railway.app/api/v1/login';
  
  constructor(private http: HttpClient) {}

  login(credenciales: Credenciales): Observable<RespuestaLogin> {
    return this.http.post<RespuestaLogin>(this.url, credenciales);
  }
}
