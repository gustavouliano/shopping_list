import { Request, Response } from "express";
import GetUsersUseCase from "../../domain/use-cases/user/get-users";
import CreateUserUseCase from "../../domain/use-cases/user/create-user";
import UserRepositoryDatabase from "../../infra/repositories/user-repository-database";

class UserController {

    constructor(private userRepository = new UserRepositoryDatabase()){};

    async getUsers(req: Request, res: Response){ 
        try {
            const getUsersUseCase = new GetUsersUseCase(this.userRepository);
            const users = getUsersUseCase.execute();
            return res.json(users).status(200);
        } catch (error) {
            return res.status(500).send('Internal Server Error');
        }
    }

    async create(req: Request, res: Response) {
        try{
            const [name, email, password] = req.body;
            const createUserUseCase = new CreateUserUseCase(this.userRepository);
            const user = createUserUseCase.execute(name, email, password);
            return res.json(user).status(201);
        } catch(error) {
            return res.status(500).send('Internal Server Error');
        }
    }


}

export default UserController;