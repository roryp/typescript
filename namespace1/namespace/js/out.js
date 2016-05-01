var MathCalculator;
(function (MathCalculator) {
    MathCalculator.add = function () {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i - 0] = arguments[_i];
        }
        var result = 0;
        for (var _a = 0, x_1 = x; _a < x_1.length; _a++) {
            var num = x_1[_a];
            result += num;
        }
        return result;
    };
    MathCalculator.multiply = function () {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i - 0] = arguments[_i];
        }
        var result = 1;
        for (var _a = 0, x_2 = x; _a < x_2.length; _a++) {
            var num = x_2[_a];
            result *= num;
        }
        return result;
    };
})(MathCalculator || (MathCalculator = {}));
//define an alias
var MC = MathCalculator;
/// <reference path="./MathCalculator.ts" />
var SimpleInterest;
(function (SimpleInterest) {
    SimpleInterest.simpleInterest = function (principal, rate, time) {
        return MC.multiply(principal, rate / 100, time);
    };
})(SimpleInterest || (SimpleInterest = {}));
//define an alias
var SI = SimpleInterest;
/// <reference path="./MathCalculator.ts" />
/// <reference path="./SimpleInterest.ts" />
// Using MC and SI aliases
var sum = MC.add(1, 2, 3, 4, 5, 6, 100);
var product = MC.multiply(1, 2, 3, 4, 5, 6, 100);
console.log("\"The sum is " + sum + " and the product is " + product + ".\"");
var si = SI.simpleInterest(100, 3, 2);
console.log("The Simple Interest is " + si);
console.log("This Works!");
