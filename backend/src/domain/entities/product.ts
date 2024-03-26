
class Product {

    private description: string;
    private quantity: number;

    constructor(description: string, quantity: number){
        this.description = description;
        this.quantity = quantity;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number) {
        this.quantity = quantity;
    }

}

export default Product;