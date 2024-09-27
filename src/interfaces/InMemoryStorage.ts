import { Product } from "../services/Product";
import { Storable } from "./Storable";

export class InMemoryStorage implements Storable {
    constructor(private list: Product[]) {

    }
    
    store(): void {
        console.log(this.list);
    }

    total(): number {
        let totalPrice: number = 0
        this.list.forEach(element => {
            totalPrice += element.getPrice();
        });

        return totalPrice;
    }
}