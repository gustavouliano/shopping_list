import express from 'express';
import UserController from '../../application/controllers/user-controller';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getUsers.bind(userController));
router.post('/', userController.create.bind(userController));
router.post('/login', userController.login.bind(userController));

router.post('/products/', userController.addProduct.bind(userController));
router.delete('/products/:userId', userController.removeProduct.bind(userController));
router.get('/products/:userId', userController.listProducts.bind(userController));

router.get('/products/calculate/:userId', userController.calculateProductListQuantity.bind(userController));

export { router as usersRouter };