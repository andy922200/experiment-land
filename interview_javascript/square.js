const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, 3.5];
const emptyArray = [];

Array.prototype.square = function () {
    return this.map(n => n * n)
}

console.log(numbers.square()); // [1, 4, 9, 16, 25]
console.log(mixedArray.square()); // [1, 12.25]
console.log(emptyArray.square()); // []