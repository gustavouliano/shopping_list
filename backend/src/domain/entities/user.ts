import ProductList from "./product-list";

class User {

    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private productList: ProductList | null = null;

    constructor(id: string, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public getProductList(): ProductList {
        if (!this.productList){
            return new ProductList();
        }
        return this.productList;
    }

    public setProductList(productList: ProductList) {
        this.productList = productList;
    }

}

export default User;