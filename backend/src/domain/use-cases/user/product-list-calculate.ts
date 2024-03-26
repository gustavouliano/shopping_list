import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";

class ProductListCalculateUserUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(userId: string) {
        const productList = await this.userRepository.getAllProductsFromUser(userId);
        if (!productList) {
            return {};
        }
        let totalProductQuantity = 0;
        productList.getProduct().forEach((product) => {
            totalProductQuantity += product.getQuantity();
        })
        return { productQuantity: totalProductQuantity };
    }
}

export default ProductListCalculateUserUseCase;