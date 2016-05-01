module Example {

	module Example {
		// A tuple type literal is written as a sequence of element types, separated by commas and enclosed in square brackets
		let a: [number, string] = [1, "one"];
		console.log(a[0]);

		// an array can be defined as
		let b: [string | number] = [-1, -2, "1", "2", "3", 1, 2, 3, 4, 5]

		// array type can be written using the union notation
		let x: (string | number | Object)[];
		x = ["Apples", 10, "Bananas", 20, 3.45, { "Store Name": "Walmart" }];
		console.log(x);

		// array types can be written using the 'Array<T>' notation
		let y: Array<string | number>
		y = [1, 2, 3, "x", "y", "z"];

		//TypeScript enables programmers to summarize a set of numeric 
		// constants as an enum type

	}


	function play(game: string = 'Basket Ball', teams: string[] = ['Red', 'Blue', 'Green'], {venue = 'Central Park', subsPerTeam = 3}: { venue?: string, subsPerTeam?: number }) {
		let players = 10;
		const referee = 2;
		console.log(game);
		let team = '';
		for (team in teams) {
			console.log(teams[team]);
		}
		console.log(game, teams, venue, subsPerTeam)
	}

	play("Foot Ball", [], {});

// What are arrow functions?
	let play: ()=> void;

	let play:(game: string)=>void;

	let play: (game: string) => void = (game: string) => {
		alert("Playing " + game);
	}

	play("Tennis ");

function Fruit(){
	this.fruit = "Orange";
	this.getFruit = function(){
		return function(){
			return function(){
				return this.fruit;
			}
		}
	}
}

let orange = new Fruit();

alert(orange.getFruit()()());

function Fruit(){
	this.fruit = "Orange";
	this.getFruit = ()=>{
		return ()=>{
			return ()=>{
				return this.fruit;
			}
		}
	}
}

let orange = new Fruit();

alert(orange.getFruit()()());



}