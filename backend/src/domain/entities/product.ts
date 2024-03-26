
class Product {

    private description: string;
    private value: number;

    constructor(description: string, value: number){
        this.description = description;
        this.value = value;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number) {
        this.value = value;
    }

}

export default Product;