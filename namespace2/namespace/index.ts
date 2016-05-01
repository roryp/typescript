import MC = require('./MathCalculator');
import SI = require('./SimpleInterest');

import M = MC.MathCalculator;
import S = SI.SimpleInterest;

// Using MC and SI aliases
let sum: number =    M.add(1, 2, 3, 4, 5, 6, 100);
let product: number = M.multiply(1, 2, 3, 4, 5, 6, 100);
console.log(`"The sum is ${sum} and the product is ${product}."`);
let si: number = S.simpleInterest(100, 3, 2);
console.log(`The Simple Interest is ${si}`);
console.log(`This Works!`)