import type { Venta } from '../models/ventas.models';

export const ventasDB: Venta[] = [

  {
    id: 1,
    id_cliente: 1,
    id_inventario: 1,
    producto: 'Fresas Manzana',
    cantidad: 3,
    precio_unitario: 8500,
    total: 25500,
    metodo_pago: 'Tarjeta',
    fecha_venta: new Date('2026-10-06T15:00:00.000Z'),
    fecha_creacion: new Date('2026-10-06T15:00:00.000Z')
  },
  {
    id: 2,
    id_cliente: 2,
    id_inventario: 2,
    producto: 'Fresas Mora',
    cantidad: 2,
    precio_unitario: 9500,
    total: 19000,
    metodo_pago: 'Efectivo',
    fecha_venta: new Date('2026-10-06T16:30:00.000Z'),
    fecha_creacion: new Date('2026-10-06T16:30:00.000Z')
  }
];

let siguienteId = ventasDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
