module Example{
	class Add{
		add(x: number|string|{}, y:number|string|{}):number|string|{};
		// add(x: string, y:string):string;
		
		add(x: any, y:any):any{
			if(typeof x == 'number' && typeof y == 'number'){
				return x + y;
			} else if(typeof x=='string' && typeof y=='string'){
				return x + ' ' + y;
			} else {
				return [x, y];
			}
		}
		
	}
	
	var a = new Add();
	console.log(
		"a.add(3, 4):", a.add(3, 4), "\n",
		"a.add(\"Hello\", \"World\"):", a.add("Hello", "World"), "\n",
		"a.add(4, \"Hello\"):", a.add("Hello", 25), "\n"
		);

class Person{
	constructor(public name:string){
		
	}
}

let jane = new Person('Jane Doe');
let mary = new Person('Mary Higgins');

console.log(a.add(jane, mary));


}