import { Request, Response } from 'express';
import AuthService from '../middlewares/auth/auth.middleware';
import UserServices from '../services/user.services';

export default class UserController {
  private services: UserServices;

  constructor() {
    this.services = new UserServices();
  }

  public create = async (req: Request, res: Response) => {
    const data = req.body;

    const newUser = await this.services.create(data);
    const token = AuthService.genToken(newUser);
    res.status(201).json({ token });
  };
}
