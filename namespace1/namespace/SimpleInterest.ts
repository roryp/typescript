/// <reference path="./MathCalculator.ts" />

module SimpleInterest {
    export let simpleInterest = (principal: number,
        rate: number,
        time: number) => {
        return MC.multiply(principal, rate / 100, time);
    }
}

//define an alias
import SI = SimpleInterest;
