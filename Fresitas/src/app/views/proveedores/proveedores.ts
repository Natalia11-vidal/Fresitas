
import { Component, OnInit } from '@angular/core';
import { Table } from '../../tabla/tabla';
import { ProveedoresService } from '../../service/proveedores';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [Table],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css'
})
export class Proveedores implements OnInit {

  proveedores: any[] = [];

  constructor(private proveedoresService: ProveedoresService) {}

  ngOnInit(): void {
    this.proveedoresService.getProveedores().subscribe({
      next: (datos) => {
        this.proveedores = datos;
      },
      error: (error) => {
        console.error('Error al obtener proveedores:', error);
      }
    });
  }
}
