import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";

class ListProductUserUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(userId: string) {
        const productList = await this.userRepository.getAllProductsFromUser(userId);
        if (!productList){
            return [];
        }
        return productList.getProduct();
    }
}

export default ListProductUserUseCase;