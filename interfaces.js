// type Point = {
//     x: number,
//     y: number
// }
var pt = { x: 123, y: 1234 };
var thomas = {
    firstName: "Thomas",
    lastName: "Hardy",
    nickName: "Tom",
    id: 234,
    sayHi: function () { return "Hello!"; }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
