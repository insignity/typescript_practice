const dog = {
    name: "Elton",
    breed: "Australian shepard",
    age: 2,
}

function printName(person: { first: string, last: string}){
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas", last: "Jenkins"})


let coordinate : Point = {x: 34, y: 2}
//---------------------------(        object      )-(body starts)
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y: Math.random()}
}//-(body ends)

// printName({first: "Mick", last: "Jagger", age: 73})//not ok

// const singer = {first: "Mick", last: "Jagger", age: 32, isAlive: true}// ok

// printName(singer);

function doublePoint(point: Point): Point{
    return {x: point.x * 2, y: point.y * 2};
}

type Song = {title: string, artist: string, numStreams: number, credits: {producer: string, writer: string}}


function calculatePayout(song: Song): number{
    return song.numStreams * 0.0033;


}

function printSong(song: Song){
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 234234,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    },
}

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong)



type Point = {
    x: number; 
    y: number;
    z?: number;
}

const myPoint: Point = {x: 1, y: 3};

//readonly keyword

type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 12355,
    username: "catgirl"
}

console.log(user.id)

type Circle = {radius: number}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 32,
    color: "yellow"
}

type Cat = {numLives: number}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & { //intersection type  
    age: number
}

const catDog: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 3
}