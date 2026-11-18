import express from 'express';
import cors from 'cors';
import clientesRoutes from './routers/clientes.routers';
import inventariosRoutes from './routers/inventarios.routers';
import proveedoresRoutes from './routers/proveedores.routers';
import ventasRoutes from './routers/ventas.routers';
import loginRoutes from './routers/login.routers';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/v1/health', (req, res) => {

  res.json({
    status: 'OK'
  });

});

app.use('/api/v1/clientes',clientesRoutes);
app.use('/api/v1/inventario',inventariosRoutes);
app.use('/api/v1/proveedores', proveedoresRoutes);
app.use('/api/v1/ventas', ventasRoutes);
app.use('/api/v1/login',loginRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

export default app;


