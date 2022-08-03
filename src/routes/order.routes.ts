import { Router } from 'express';
import OrderController from '../controllers/order.controllers';

const order = Router();

const orderController = new OrderController();

order.get('/', orderController.all);

export default order;
