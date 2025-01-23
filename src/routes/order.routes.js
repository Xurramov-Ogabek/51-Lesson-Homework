import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
} from '../controllers/order.controller.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', getAllOrders);
orderRouter.get('/:id', getOrderById);
orderRouter.put('/:id', updateOrderById);
orderRouter.delete('/:id', deleteOrderById);

export { orderRouter };