
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private readonly url = 'https://fresitas-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getVentaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  crearVenta(venta: any): Observable<any> {
    return this.http.post<any>(this.url, venta);
  }

  actualizarVenta(id: number, venta: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, venta);
  }

  eliminarVenta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
