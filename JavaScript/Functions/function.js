// Named Functions
function add(num1, num2)
{
    console.log('Sum =',num1+num2);
}
add(10,20)

function add(num1, num2, num3)
{
    console.log('sum value =', num1+num2+num3);
}
add(10,20,30)

//Function Expression (Anonymous)
var sub = function (num1,num2)
{
    var subvalue =num1 -num2;
    return subvalue;
}

var value = sub(90,89)
console.log('Value =',value);

console.log('Hello');
(function(num1,num2){
    console.log('Value =',num1*num2)
})(10,20)

var div=(num1,num2)=> {
    console.log('Value=',num1/num2);
}
div(10,5);

var div1=num1 =>
{
    console.log('Value=',num1);
}
div1(5);

var div2 = num1 => console.log(num1);
div2(6);


var add1=(num1,num2)=> {
    return num1+num2;}
var value= add1(10,20);
console.log('Value of add1',value)
//calling before declaration
greeting('dk');
function greeting(msg)
{
    console.log('Hello', msg);
}

// greet('Dinga');
// var greet = function(msg)
// {
//     console.log('hi',msg);
// }
 
// greets ('Dingi');
// var greets =(msg)=>
// {
//     console.log('Hi',msg);
// }


 
