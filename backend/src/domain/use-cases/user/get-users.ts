import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";
import User from "../../entities/user";

class GetUsersUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(): Promise<User[]> {
        return this.userRepository.getAll();
    }
}

export default GetUsersUseCase;