import { Request, Response } from "express";
import GetUsersUseCase from "../../domain/use-cases/user/get-users";
import CreateUserUseCase from "../../domain/use-cases/user/create-user";
import UserRepositoryDatabase from "../../infra/repositories/user-repository-database";
import LoginUserUseCase from "../../domain/use-cases/user/login-user";
import AddProductUserUseCase from "../../domain/use-cases/user/add-product-user";
import RemoveProductUserUseCase from "../../domain/use-cases/user/remove-product-user";
import ListProductUserUseCase from "../../domain/use-cases/user/list-product-user";
import ProductListCalculateUserUseCase from "../../domain/use-cases/user/product-list-calculate";

class UserController {

    private userRepository = new UserRepositoryDatabase();

    async getUsers(req: Request, res: Response) {
        try {
            const getUsersUseCase = new GetUsersUseCase(this.userRepository);
            const users = await getUsersUseCase.execute();
            return res.json(users).status(200);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const createUserUseCase = new CreateUserUseCase(this.userRepository);
            const user = await createUserUseCase.execute(name, email, password);
            return res.json(user).status(201);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const loginUserUseCase = new LoginUserUseCase(this.userRepository);
            const login = await loginUserUseCase.execute(email, password);
            return res.json({ login: login }).status(200);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    async addProduct(req: Request, res: Response) {
        try {
            const { userId, description, quantity } = req.body;
            const addProductUserUseCase = new AddProductUserUseCase(this.userRepository);
            await addProductUserUseCase.execute(userId, description, quantity);
            return res.json().status(201);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    async removeProduct(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const productDescription = req.body.productDescription;
            const removeProductUserUseCase = new RemoveProductUserUseCase(this.userRepository);
            await removeProductUserUseCase.execute(userId, productDescription);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    async listProducts(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const listProductUserUseCase = new ListProductUserUseCase(this.userRepository);
            const products = await listProductUserUseCase.execute(userId);
            return res.json({ products }).status(200);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    async calculateProductListQuantity(req: Request, res: Response) {
        try {
            const id = req.params.userId;
            const productListCalculate = new ProductListCalculateUserUseCase(this.userRepository);
            const response = await productListCalculate.execute(id);
            return res.json(response).status(200);
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

}

export default UserController;