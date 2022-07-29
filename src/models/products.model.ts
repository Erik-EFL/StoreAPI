import { Pool, ResultSetHeader } from 'mysql2/promise';
import { DataProduct } from '../interfaces/product.interface';
import connection from './connection';
import Query from './db.query';

class ProductsModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public create = async (product: DataProduct) => {
    const [newProduct] = await this.connection.query<ResultSetHeader>(
      Query.products.create,
      [product.name, product.amount],
    );
    return { id: newProduct.insertId, ...product };
  };

  public all = async (): Promise<DataProduct[]> => {
    const [product] = await this.connection.query(
      Query.products.all,
    );
    return product as DataProduct[];
  };
}

export default ProductsModel;
