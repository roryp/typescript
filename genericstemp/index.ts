class Add<T>{
	//lambda
	add:(param1: T, param2:T)=>T;
}

let x1 = new Add<number>();
x1.add = (x: number, y: number)=>{return x + y};

let y1 = new Add<string>();
y1.add = (x: string, y: string)=>{return x + ' ' + y;}

console.log(x1.add(5, 10));
console.log(y1.add('Hello', 'Generics'));


