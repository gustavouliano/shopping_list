import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";
import User from "../../entities/user";

class CreateUserUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(name: string, email: string, password: string): Promise<User> {
        throw new Error('Criar usuário e retornar este.')
    }
}

export default CreateUserUseCase;