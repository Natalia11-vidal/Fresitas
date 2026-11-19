
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private readonly url = 'https://fresitas-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getProveedorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  crearProveedor(proveedor: any): Observable<any> {
    return this.http.post<any>(this.url, proveedor);
  }

  actualizarProveedor(id: number, proveedor: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, proveedor);
  }

  eliminarProveedor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
