let age: number | string  = 23;
age = 23;
age = "24";

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x: 1, y: 34}

coordinates = {lat: 432.212, long: 23.342}

function printAge(age: number | string) : void{
    console.log(`You are ${age} years old`);
}

printAge(23)
printAge("83")

function calculateTax(price: number | string, tax: number){
    if(typeof price === "string"){
        price = parseFloat(price.replace("$", ""))
    } 
    return  price * tax
};

// const stuff: any[] = [1,2,3,4, "asd", true, {}]

// const stuff: (number | string)[]  = [1, "sdf", 23]

const coords: (Point | Loc)[] = []

coords.push({lat: 321.213, long: 23.334})
coords.push({x: 213, y: 32})

let zero: 0 = 0
let hi: "hi" = "hi" 

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday"| "Thursday" | "Friday" | "Saturday" | "Sunday";
 
let today: DayOfWeek = "Monday";

