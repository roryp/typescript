define(["require", "exports", './MathCalculator'], function (require, exports, MC) {
    "use strict";
    var M = MC.MathCalculator;
    var SimpleInterest;
    (function (SimpleInterest) {
        SimpleInterest.simpleInterest = function (principal, rate, time) {
            return M.multiply(principal, rate / 100, time);
        };
    })(SimpleInterest = exports.SimpleInterest || (exports.SimpleInterest = {}));
});
