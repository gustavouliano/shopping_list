import CryptoProvider from "../../../infra/providers/crypto-provider";
import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";
import User from "../../entities/user";
import { v4 as uuidv4 } from 'uuid';

class CreateUserUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(name: string, email: string, password: string): Promise<User> {
        password = await CryptoProvider.encrypt(password);
        const id = uuidv4();
        const user = new User(id, name, email, password);
        await this.userRepository.create(user);
        return user;
    }
}

export default CreateUserUseCase;