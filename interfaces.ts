// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 234, y: 345}

interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 123, y: 1234 }

interface Person {
    readonly id: number;
    firstName: string;
    lastName: string;
    nickName?: string;
    // sayHi: () => string; the same as below
    sayHi(): string;
}

const thomas: Person = {
    firstName: "Thomas",
    lastName: "Hardy",
    nickName: "Tom",
    id: 234,
    sayHi: () => { return "Hello!" }
}

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4))

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "elton",
    age: 23,
    breed: "Husky",
    bark: () => {
        return "Wuf"
    }
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const serviceDog: ServiceDog = {
    name: "234",
    age: 2,
    breed: "husky",
    bark() {
        return "wow"
    },
    job: "bomb"
}

interface Human {
    name: string
}

interface Employee{
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 23424,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]

}