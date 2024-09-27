import { Product } from "./services/Product";
import { InMemoryStorage } from "./interfaces/InMemoryStorage";
import { Cart } from "./services/Cart";

type Courses = {
    name: string;
    price: number;
};

const courses: Courses[] = [
    {name: 'Pomme', price: 1.5},
    {name: 'Banane', price: 1.5},
    {name: 'Clémentine', price: 1.5},
    {name: 'Fraise', price: 1.5},
    {name: 'Huître', price: 25},

]

let lists: Product[] = []

courses.forEach(course => {
    const produit = new Product(course.name, course.price);
    lists.push(produit);
});

const memoryStorage = new InMemoryStorage(lists);
memoryStorage.store();
memoryStorage.total();

const panier = new Cart(memoryStorage);
console.log(panier.showDetails());