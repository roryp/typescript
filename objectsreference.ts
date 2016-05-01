class Person{
    constructor(public name: string,  public age: number){
    }

}

let p1 = new Person("Jack", 30);
let p2 = new Person("Dave", 40);

console.log("p1 == p2", p1 == p2);

let p3 = new Person("Jack", 30);
console.log("p1 == p3", p1 == p2);

let p4 = p1;
console.log("p1 == p4", p1 == p4);
p4.name = "Amber";
p4.age = 28;
console.log("p1 name: ", p1.name, " p1: age", p1.age );
console.log("p4 name: ", p4.name, " p4: age", p4.age );

