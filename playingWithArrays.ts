module Example{
let a: number[] = [99, 78, 5, 4, 6, 7, 39, 6, 73, 757];

//simple iteration
for (let value of a) {
  console.log(value);
}

//using forEach in es5 style
a.forEach(function(value, index, array){
	console.log("value, index, array:", value, index, array);
})

//forEach
a.forEach((value, index, array)=>{console.log("value, index, array:", value, index, array)});

a.forEach(value=>console.log(value * value));

//The map() method creates a new array with the results of calling a provided function on every element in this array.

let b = a.map(value=>value.toString());
console.log(b);

let c = a.map(value=>({num:value, str:value.toString()}));
console.log(c);
}