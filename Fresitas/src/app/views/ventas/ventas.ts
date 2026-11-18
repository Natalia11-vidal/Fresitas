
import { Component, OnInit } from '@angular/core';
import { Table } from '../../tabla/tabla';
import { VentasService } from '../../service/ventas';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [Table],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas implements OnInit {

  ventas: any[] = [];

  constructor(private ventasService: VentasService) {}

  ngOnInit(): void {
    this.ventasService.getVentas().subscribe({
      next: (datos) => {
        this.ventas = datos;
      },
      error: (error) => {
        console.error('Error al obtener ventas:', error);
      }
    });
  }
}
