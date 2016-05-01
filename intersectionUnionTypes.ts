// intersections and union types
interface add{
	x: number|string;
	y: number|string;
	add:(x: number|string, y:number|string)=>number|string;
}

interface subtract{
	x: number;
	y: number;
	subtract:(x: number, y:number)=>number;
}
 
interface multiply{
	x: number;
	y: number;
	multiply:(x: number, y: number)=>number;
}

let calculator: add&subtract&multiply;
calculator = {
	x: 5,
	y: 10,
	add:(x: number, y: number)=>{return x +y;},
	subtract:(x: number, y: number)=>{return x - y},
	multiply:(x: number, y: number)=>{return x * y}
};

console.log(calculator.add(10, 5));
console.log(calculator.add(5, "5"));
console.log(calculator.add("Hello ", "World"));
