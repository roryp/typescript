/// <reference path="./MathCalculator.ts" />
var SimpleInterest;
(function (SimpleInterest) {
    SimpleInterest.simpleInterest = function (principal, rate, time) {
        return MC.multiply(principal, rate / 100, time);
    };
})(SimpleInterest || (SimpleInterest = {}));
//define an alias
var SI = SimpleInterest;
//# sourceMappingURL=SimpleInterest.js.map