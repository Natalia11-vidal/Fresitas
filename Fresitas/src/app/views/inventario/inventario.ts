
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Table } from '../../tabla/tabla';
import { InventarioService } from '../../service/inventario';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [Table, JsonPipe],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class Inventario implements OnInit {

  columnas = [
    'id',
    'producto',
    'cantidad',
    'precio'
  ];

  inventario: any[] = [];

  constructor(private inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.inventarioService.getInventario().subscribe({
      next: (datos) => {
  console.log('DATOS RECIBIDOS EN ANGULAR:', datos);
  this.inventario = datos;
},
      error: (error) => {
        console.error('Error al obtener el inventario:', error);
      }
    });
  }
}
