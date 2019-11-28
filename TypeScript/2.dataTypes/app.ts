let myName : string = "Deeksha";

console.log(myName, typeof myName);

let age1 : number;

console.log(age1 , typeof age1);

let mobileNumber = 89898;

console.log(mobileNumber , typeof mobileNumber);

let address;

address = 'abshjghj';

address = 67549;

console.log(address , typeof address);

let calAge = function() :void{

console.log('Age is 26');

}
calAge();

class Person {
    constructor(public name : string , public age : number){

    }
}

let person1 = new Person('deeksha', 24);
console.log(person1);

class Student extends Person{
    constructor(name : string , age : number , public rollNo : number){
        super(name , age);
    }
}

let student1 =new Student('john', 24 , 122);

console.log(student1);


