/// <reference path="./MathCalculator.ts" />
/// <reference path="./SimpleInterest.ts" />

// Using MC and SI aliases
let sum: number =    MC.add(1, 2, 3, 4, 5, 6, 100);
let product: number = MC.multiply(1, 2, 3, 4, 5, 6, 100);
console.log(`"The sum is ${sum} and the product is ${product}."`);
let si: number = SI.simpleInterest(100, 3, 2);
console.log(`The Simple Interest is ${si}`);
console.log(`This Works!`)