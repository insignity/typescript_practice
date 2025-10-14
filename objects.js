var dog = {
    name: "Elton",
    breed: "Australian shepard",
    age: 2,
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
var coordinate = { x: 34, y: 2 };
//---------------------------(        object      )-(body starts)
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
} //-(body ends)
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 234234,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    },
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
