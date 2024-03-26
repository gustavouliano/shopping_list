import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";
import Product from "../../entities/product";

class AddProductUserUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(userId: string, description: string, quantity: number) {
        const product = new Product(description, quantity);
        await this.userRepository.addProduct(userId, [product]);
    }
}

export default AddProductUserUseCase;