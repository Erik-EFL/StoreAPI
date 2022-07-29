import { DataProduct } from '../interfaces/product.interface';
import ProductsModel from '../models/products.model';

class ProductServices {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public create = async (product: DataProduct): Promise<DataProduct> => {
    const newProduct = await this.model.create(product);
    return newProduct;
  };
}

export default ProductServices;
