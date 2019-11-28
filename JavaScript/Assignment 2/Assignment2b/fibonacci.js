//1st way

function fibo(n)
{
    var a = 0, b = 1, f = 1;
    console.log(a);
    console.log(b);
    for(var i = 2; i <= n; i++)
    {
        f = a + b;
        a = b;
        b = f;
        console.log(f);
    }   
}
fibo(5);
console.log('==============');

//2nd way

var fibo = function(n)
{
    var a = 0, b = 1, f = 1;
    console.log(a);
    console.log(b);
    for(var i = 2; i <= n; i++)
    {
        f = a + b;
        a = b;
        b = f;
        console.log(f);
    }
   return f; 
}
var fibonacci = fibo(8);
console.log('============================');

// 3rd way

(function(n)
{
    var a = 0, b = 1, f = 1;
    console.log(a);
    console.log(b);
    for(var i = 2; i <= n; i++)
    {
        f = a + b;
        a = b;
        b = f;
        console.log(f);
    }
}
)(5);
console.log('==============================')

//4th way

var fibo = n =>
{
    var a = 0, b = 1, f = 1;
    console.log(a);
    console.log(b);
    for(var i = 2; i <= n; i++)
    {
        f = a + b;
        a = b;
        b = f;
        console.log(f);
    }
}
fibo(4);