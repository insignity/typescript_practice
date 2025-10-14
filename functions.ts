// function square(num: number){


//     return num * num
// }


square(3)
greet("sdfs")

// const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", 2, true)



function greet(person: string = "stranger") {
    return 'Hi there, ${person}';
}  

function greets(person: string = "stranger"): string {
    return 'Hi, there, ${person}!';
}

function squared(num: number) : number {
    return num * num;
} 

function rando(num: number){
    if(Math.random() < 0.5){
        return num. toString();
    }
    return num;
} 

const add = (x: number, y: number) : number => {
    return x + y;
}

const colors = ["red", "orage", "yellow"] 

colors.map(color => {
    return color.toUpperCase();
})

function printTwice(msg: string): void{
    console.log(msg);
    console.log(msg);
}

function makeError(msg: string): never {
    
    throw new Error(msg);
}

function gameLoop(): never {
    while(true){

    }
}