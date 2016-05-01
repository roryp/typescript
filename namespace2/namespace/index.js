define(["require", "exports", './MathCalculator', './SimpleInterest'], function (require, exports, MC, SI) {
    "use strict";
    var M = MC.MathCalculator;
    var S = SI.SimpleInterest;
    // Using MC and SI aliases
    var sum = M.add(1, 2, 3, 4, 5, 6, 100);
    var product = M.multiply(1, 2, 3, 4, 5, 6, 100);
    console.log("\"The sum is " + sum + " and the product is " + product + ".\"");
    var si = S.simpleInterest(100, 3, 2);
    console.log("The Simple Interest is " + si);
    console.log("This Works!");
});
