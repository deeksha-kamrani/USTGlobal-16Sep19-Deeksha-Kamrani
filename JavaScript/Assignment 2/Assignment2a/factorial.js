// 1st way

function facto(num)
{
    var i, fact=1;
    for(i = 1; i <= num; i++)
    {
        fact = fact * i;
    }
    console.log(fact);
}
facto(5);

//2nd way

var facto = function(num)
{
    var i, fact=1;
    for(i = 1; i <= num; i++)
    {
        fact = fact * i;
    }
    return fact;
}
var factorial = facto(4);
console.log(factorial);

//3rd way

(function(num)
{
    var i, fact=1;
    for(i = 1; i <= num; i++)
    {
        fact = fact * i;
    }
    console.log(fact);
}
)(3);

//4th way

var facto = num =>
{
    var i, fact=1;
    for(i = 1; i <= num; i++)
    {
        fact = fact * i;
    }
    console.log(fact);
}
facto(5);