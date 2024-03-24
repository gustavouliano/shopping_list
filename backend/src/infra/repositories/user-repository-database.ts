import User from "../../domain/entities/user";

class UserRepositoryDatabase {
    
    async getAll(): Promise<User[]> {
        return [];
    }
}

export default UserRepositoryDatabase;