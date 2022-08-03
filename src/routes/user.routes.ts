import express from 'express';
import UserController from '../controllers/user.controllers';

const user = express.Router();

const userController = new UserController();

user.post('/', userController.create);

export default user;
