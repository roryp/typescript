import MC = require('./MathCalculator');

import M = MC.MathCalculator;


export module SimpleInterest {
    export let simpleInterest = (principal: number,
        rate: number,
        time: number) => {
        return M.multiply(principal, rate / 100, time);
    }
}

