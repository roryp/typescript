define(["require", "exports"], function (require, exports) {
    "use strict";
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
    })(MathCalculator = exports.MathCalculator || (exports.MathCalculator = {}));
});
//# sourceMappingURL=MathCalculator.js.map