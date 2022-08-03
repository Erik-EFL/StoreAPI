import { Pool, ResultSetHeader } from 'mysql2/promise';
import { DataUser } from '../interfaces/user.interface';
import connection from './connection';
import Query from './db.query';

class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public create = async (user: DataUser): Promise<DataUser> => {
    const [newUser] = await this.connection.query<ResultSetHeader>(
      Query.users.create,
      [user.username, user.classe, user.level, user.password],
    );
    return { id: newUser.insertId, ...user };
  };

  public login = async (user: DataUser): Promise<DataUser[]> => {
    const [loggedUser] = await this.connection.query(
      Query.users.login,
      [user.username, user.password],
    );
    return loggedUser as DataUser[];
  };
}

export default UserModel;
