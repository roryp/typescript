export module MathCalculator {
    export let add = (...x: number[]) => {
        let result: number = 0;

        for (let num of x) {
            result += num;
        }

        return result;
    }

    export let multiply = (...x: number[]) => {
        let result: number = 1;

        for (let num of x) {
            result *= num;
        }

        return result;
    }
}

