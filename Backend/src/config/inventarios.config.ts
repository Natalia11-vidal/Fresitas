import type { Inventario } from '../models/inventarios.models';

export const inventariosDB: Inventario[] = [

  {
    id: 1,
    nombre: 'Fresas Manzana',
    descripcion: 'Fresas organicas de manzana',
    categoria: 'Fresas',
    cantidad: 120,
    precio_unitario: 8500,
    stock_minimo: 20,
    fecha_creacion: new Date('2026-10-05T18:00:00.000Z')
  },
  {
    id: 2,
    nombre: 'Fresas Mora',
    descripcion: 'Fresas organicas de mora',
    categoria: 'Fresas',
    cantidad: 85,
    precio_unitario: 9500,
    stock_minimo: 15,
    fecha_creacion: new Date('2026-10-05T18:05:00.000Z')
  }
];

let siguienteId = inventariosDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
