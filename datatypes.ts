// Datatypes in Typescript
module Example {
	var firstName: string = 'Peter';
	var lastName = 'Roberts';

	var x: number;
	var y = null;
	var z = undefined;

	var isRaining: boolean = true;

	var fruits: string[] = ['Apple', 'Banana', 'Grape', 'Orange'];

	console.log(fruits);
	console.log(fruits[0]);

	var shape: Object = { x1: 10, y1: 50, x2: 100, y2: 150 };

	var getName: Function = function() {
		return firstName + ' ' + lastName;
	};

	var square: (x: number) => number = function(x: number) {
		return x * x;
	};

	console.log(square(10));

	//function with optional parameters
	var fullName: string;
	var setName: (firstName: string, lastName?: string) => string = function(firstName, lastName) {
		if (lastName === undefined) {
			return firstName;
		} else {
			return firstName + ' ' + lastName;
		}
	}

	fullName = setName('Bob');
	console.log(fullName);
	fullName = setName('Bob', 'Jenson');
	console.log(fullName);

}