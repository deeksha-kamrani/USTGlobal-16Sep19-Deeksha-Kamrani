//Named function

function circum(r)
{
    console.log('circumference =',2*3.14*r);
}
circum(2)

//Function Expression (Anonymous)

var circum = function(r)
{
    var circumValue= 2*3.14*r;
    return circumValue;
}
var value= circum(5)
console.log('Value ='+value);

//3rd way

(function(r)
{
    console.log('circum =',2*3.14*r);
}
)(2)

//4th way using fat arrow

var circum = r => console.log('Value =', 2*3.14*r);
circum(3);

