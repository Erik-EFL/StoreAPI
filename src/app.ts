import express from 'express';
import routes from './routes/export.routes';

const app = express();

app.use(express.json());

app.use('/products', routes.products);
app.use('/users', routes.user);
app.use('/orders', routes.order);

export default app;
