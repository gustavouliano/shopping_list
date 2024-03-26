import Product from "./product";

class ProductList {

    private product: Product[] = [];
    private total: number = 0;
    private quantity: number = 0;

    public setProduct(product: Product[]) {
        this.product = product;
    }

    public getProduct(): Product[] {
        return this.product;
    }

    public addProduct(product: Product) {
        this.product.push(product);
    }

    public removeProduct(productDescription: string) {
        
    }

    public getTotal(): number {
        return this.total;
    }
    
    public setTotal(total: number) {
        this.total = total;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number) {
        this.quantity = quantity;
    }

}

export default ProductList;