import { Pool } from 'mysql2/promise';
import { DataOrder } from '../interfaces/order.interface';
import connection from './connection';
import Query from './db.query';

class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public all = async (): Promise<DataOrder[]> => {
    const [orders] = await this.connection.query(
      Query.orders.all,
    );
    return orders as DataOrder[];
  };
}

export default OrderModel;
