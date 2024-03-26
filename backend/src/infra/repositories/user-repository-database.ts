import fs from 'fs';
import path from 'path';
import User from "../../domain/entities/user";
import Product from '../../domain/entities/product';
import ProductList from '../../domain/entities/product-list';
import { isArray } from 'util';

class UserRepositoryDatabase {

    async saveUsers(users: User[]){
        fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'data', 'users.json'), JSON.stringify(users, null, 2));
    }

    async getAll(): Promise<User[]> {
        try {
            const data = fs.readFileSync(path.join(__dirname, '..', '..', '..', 'data', 'users.json'), 'utf8');
            const parsedData = JSON.parse(data);
            const users: User[] = [];
    
            parsedData.forEach((userData: any) => {
                const user = new User(userData.id, userData.name, userData.email, userData.password);
                user.getProductList().setProduct(userData.productList.product);
                users.push(user);
            });
    
            return users;
        } catch(error) {
            return []
        }
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const users = await this.getAll();
        return users.find(user => user.getEmail() == email);
    }

    async create(user: User): Promise<User> {
        const users = await this.getAll();
        users.push(user);
        fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'data', 'users.json'), JSON.stringify(users, null, 2));
        return user;
    }

    async addProduct(userId: string, products: Product[]) {
        const users = await this.getAll();
        const findUser = users.find((user) => user.getId() == userId);
        if (!findUser){
            throw new Error('User does not exists');
        }
        products.forEach((product) => {
            console.log(product);
            findUser.getProductList().addProduct(product);
        });
        await this.saveUsers([findUser]);
    }

    async removeProduct(userId: string, productDescription: string) {
        const users = await this.getAll();
        const findUser = users.find((user) => user.getId() == userId);
        if (!findUser){
            throw new Error('User does not exists');
        }
        findUser.getProductList(); 
        await this.saveUsers([findUser]);
    }
}

export default UserRepositoryDatabase;