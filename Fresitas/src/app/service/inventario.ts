
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private readonly url = 'https://fresitas-production.up.railway.app/api/v1/inventario';

  constructor(private http: HttpClient) {}

  getInventario(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getInventarioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  crearInventario(inventario: any): Observable<any> {
    return this.http.post<any>(this.url, inventario);
  }

  actualizarInventario(id: number, inventario: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, inventario);
  }

  eliminarInventario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
