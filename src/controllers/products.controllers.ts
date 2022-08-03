import { Request, Response } from 'express';
import ProductServices from '../services/products.services';

export default class ProductsController {
  private services: ProductServices;

  constructor() {
    this.services = new ProductServices();
  }

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const product = await this.services.create(data);
    res.status(201).json(product);
  };

  public all = async (_req: Request, res: Response) => {
    const products = await this.services.all();
    res.status(200).json(products);
  };
}
