import express from 'express';
import ProductsController from '../controllers/products.controllers';

const products = express.Router();

const productsController = new ProductsController();

products.post('/', productsController.create);

export default products;
