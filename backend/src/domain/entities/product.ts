
class Product {

    private id: string;
    private description: string;
    private value: number;

    constructor(id: string, description: string, value: number){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
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