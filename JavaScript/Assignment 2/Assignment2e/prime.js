// 1st way Named Functions

function prime(num)
{
    for(i=2;i<=num/2;i++)
    {
        if(num%i===0)
        {
            console.log(num,' is not Prime number');
        }
        else 
        {
            console.log(num,' is a Prime number')
        }
    }
}
prime(5);

// 2nd way


// 3rd way
(function(num)
{
    for(i=2;i<=num/2;i++)
    {
        if(num%i===0)
        {
            console.log(num,' is not Prime number');
        }
        else
        {
            console.log(num,' is a Prime number')
        }
    }
}
)(4);

//3rd Way

var prime = num =>
{
    for(i=2;i<=num/2;i++)
    {
        if(num%i===0)
        {
            console.log(num,' is not Prime number');
        }
        else
        {
            console.log(num,' is a Prime number')
        }
    }
}
prime(7);