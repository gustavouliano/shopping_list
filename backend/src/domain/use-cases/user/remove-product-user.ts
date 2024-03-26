import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";

class RemoveProductUserUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(userId: string, description: string) {
        await this.userRepository.removeProduct(userId, description);
    }
}

export default RemoveProductUserUseCase;