import express from 'express';
import UserController from '../../application/controllers/user-controller';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getUsers.bind(userController));
router.post('/', userController.create.bind(userController));
router.post('/login', userController.login.bind(userController));

export { router as usersRouter };