import { DataUser } from '../interfaces/user.interface';
import UserModel from '../models/users.model';

class UserServices {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public create = async (user: DataUser): Promise<DataUser> => {
    const newUser = await this.model.create(user);
    return newUser;
  };
}

export default UserServices;
