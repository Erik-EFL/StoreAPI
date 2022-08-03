import { DataProduct } from '../interfaces/product.interface';
import ProductsModel from '../models/products.model';

export default class ProductServices {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public create = async (product: DataProduct): Promise<DataProduct> => {
    const newProduct = await this.model.create(product);
    return newProduct;
  };

  public all = async (): Promise<DataProduct[]> => {
    const products = await this.model.all();
    return products;
  };
}
