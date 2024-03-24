import express from 'express';
import UserController from '../../application/controllers/user-controller';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getUsers);