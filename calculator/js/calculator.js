/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    var calc = new Calculator('X', 'Y', 'output');
    // calc.wireEvents();
});
var Calculator = (function () {
    function Calculator(x, y, output) {
        this.x = $('#' + x);
        console.log(this.x);
        this.y = $('#' + y);
        this.output = $('output' + output);
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        $('#Add').click(function () {
            console.log(this.x);
            this.output.html = this.add(parseInt(this.x.val()), parseInt(this.y.val()));
        });
        $('#Subtract').click(function () {
            this.output.html = this.subtract(parseInt(this.x.val()), parseInt(this.y.val()));
        });
    };
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.substract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
