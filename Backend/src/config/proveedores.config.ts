import type { Proveedor } from '../models/proveedores.models';

export const proveedoresDB: Proveedor[] = [

  {
    id: 1,
    nombre: 'Finca La Esperanza',
    contacto: 'Maria Lopez',
    telefono: '+57 300 123 4567',
    email: 'contacto.fincaesperanza@example.com',
    direccion: 'Finca La Esperanza, Vereda el Roble',
    fecha_creacion: new Date('2026-10-05T17:00:00.000Z')
  },
  {
    id: 2,
    nombre: 'Agricola El Mirador',
    contacto: 'Juan Torres',
    telefono: '+57 310 765 4321',
    email: 'ventas.elmirador@example.com',
    direccion: 'Carrera 10 # 45-20, Finca El Mirador',
    fecha_creacion: new Date('2026-10-05T17:30:00.000Z')
  }
];

let siguienteId = proveedoresDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
