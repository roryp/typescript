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
var Countries;
(function (Countries) {
    Countries[Countries['Africa'] = 0] = 'Africa';
    Countries[Countries['Middle East'] = 1] = 'Middle East';
    Countries[Countries['India'] = 2] = 'India';
})(Countries || (Countries = {}));
var india = Countries[2];
console.log(india);
//# sourceMappingURL=play.js.map