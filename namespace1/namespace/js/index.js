/// <reference path="./MathCalculator.ts" />
/// <reference path="./SimpleInterest.ts" />
// Using MC and SI aliases
var sum = MC.add(1, 2, 3, 4, 5, 6, 100);
var product = MC.multiply(1, 2, 3, 4, 5, 6, 100);
console.log("\"The sum is " + sum + " and the product is " + product + "\"");
var si = SI.simpleInterest(100, 3, 2);
console.log("The Simple Interest is " + si);
//# sourceMappingURL=index.js.map