var Add = (function () {
    function Add() {
    }
    return Add;
}());
var x1 = new Add();
x1.add = function (x, y) { return x + y; };
var y1 = new Add();
y1.add = function (x, y) { return x + ' ' + y; };
console.log(x1.add(5, 10));
console.log(y1.add('Hello', 'Generics'));
//# sourceMappingURL=index.js.map