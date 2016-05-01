module Example {
	class Person implements Family {
		private _age: number;

		constructor(public firstName: string,
			public lastName: string,
			public familyName: string,
			public numFamilyMembers: number,
			public maritalStatus: string,
			public ownHome: boolean,
			public totalFamilyIncome: number
		) {
			console.log('Person created');
		}

		get age(): number {
			return this._age;
		}

		set age(age: number) {
			this._age = age;
		}

	}

	interface Family {
		familyName: string,
		numPets?: number,
		numFamilyMembers: number,
		maritalStatus: string,
		ownHome: boolean,
		totalFamilyIncome: number
	}

	var david = new Person('David',
		'Hoffman',
		'Hoffman',
		4,
		'Married',
		true,
		100000);
	david.age = 30;
	console.log(david.firstName, ' ', david.lastName, david.age);
	david.age = 31;
	console.log(david.firstName, ' ', david.lastName, david.age);
	console.log(david);
}