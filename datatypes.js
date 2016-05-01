// Datatypes in Typescript
var Example;
(function (Example) {
    var firstName = 'Peter';
    var lastName = 'Roberts';
    var x;
    var y = null;
    var z = undefined;
    var isRaining = true;
    var fruits = ['Apple', 'Banana', 'Grape', 'Orange'];
    console.log(fruits);
    console.log(fruits[0]);
    var shape = { x1: 10, y1: 50, x2: 100, y2: 150 };
    var getName = function () {
        return firstName + ' ' + lastName;
    };
    var square = function (x) {
        return x * x;
    };
    console.log(square(10));
    //function with optional parameters
    var fullName;
    var setName = function (firstName, lastName) {
        if (lastName === undefined) {
            return firstName;
        }
        else {
            return firstName + ' ' + lastName;
        }
    };
    fullName = setName('Bob');
    console.log(fullName);
    fullName = setName('Bob', 'Jenson');
    console.log(fullName);
})(Example || (Example = {}));
