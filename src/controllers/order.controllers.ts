import { Request, Response } from 'express';
import OrderServices from '../services/order.services';

export default class OrderController {
  private services: OrderServices;

  constructor() {
    this.services = new OrderServices();
  }

  public all = async (_req: Request, res: Response) => {
    const orders = await this.services.all();
    res.status(200).json(orders);
  };
}
