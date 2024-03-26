import CryptoProvider from "../../../infra/providers/crypto-provider";
import UserRepositoryDatabase from "../../../infra/repositories/user-repository-database";
import User from "../../entities/user";

class LoginUserUseCase {

    private userRepository: UserRepositoryDatabase;

    constructor(userRepository: UserRepositoryDatabase) {
        this.userRepository = userRepository;
    }

    async execute(email: string, password: string): Promise<Object | false> {
        const user = await this.userRepository.findByEmail(email);
        if (!user){
            return false;
        }
        const correctPassword = await CryptoProvider.compare(password, user.getPassword());
        if (!correctPassword) {
            return false;
        }
        return {id: user.getId(), email: user.getEmail(), name: user.getName()};
    }
}

export default LoginUserUseCase;