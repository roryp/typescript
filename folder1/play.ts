/// <reference path="jquery.d.ts" />

// declare var $: JQueryStatic;
// $(document).ready(function(){
//     $('#button1').click(function(){
//         $('#p1').text("Welcome Peter");
//     })
// })

// /**
//  * class Dog
//  */
// class Dog {
//     constructor(name) {
        
//     };
    
//     bow(){
//         console.log('Bow!');
        
//     };
// }

// /**
//  * class Cat
//  */
// class Cat {
//     constructor(name) {
        
//     };
    
//     meow(){
//         console.log('meow');
        
//     };
// }

// let tom: Dog|Cat = new Dog('Tom');

// if(tom instanceof Dog){
//     tom.bow();
// } else if (tom instanceof Cat) {
//     tom.meow();
// }

// function equals<T>(x:T, y:T):boolean {
//     return x === y;
// }

// console.log(equals('Orange', 'Apple'));

enum Countries {'Africa', 'Middle East', 'India'}

let india = Countries[2];

console.log(india);
