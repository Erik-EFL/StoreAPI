import { Request, Response } from 'express';
import ProductServices from '../services/products.services';

class ProductsController {
  public services: ProductServices;

  constructor() {
    this.services = new ProductServices();
  }

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const product = await this.services.create(data);
    res.status(201).json(product);
  };
}

export default ProductsController;
