import { Routes } from '@angular/router';
import { Clientes } from './views/clientes/clientes';
import { Ventas } from './views/ventas/ventas';
import { Inventario } from './views/inventario/inventario';
import { Proveedores } from './views/proveedores/proveedores';
import { Table } from './tabla/tabla';
import { Login } from './views/login/login';

export const routes: Routes = [
    {path: "clientes", component: Clientes},
    {path: "", component: Login},
    {path: "login", component: Login},
    {path: "ventas", component: Ventas},
    {path: "inventario", component: Inventario},
    {path: "proveedores", component: Proveedores},
    {path: "tabla", component: Table}, 
    



];

