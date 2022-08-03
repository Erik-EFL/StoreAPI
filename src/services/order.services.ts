import { DataOrder } from '../interfaces/order.interface';
import OrderModel from '../models/orders.model';

export default class OrderServices {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public all = async (): Promise<DataOrder[]> => {
    const orders = await this.model.all();
    return orders;
  };
}
