console.log('1. =============');

const numbers = [100,200,300,400]

const filternum = numbers.filter(function(value,index){
    if(value>100){
        return true;
    }
    else{
        return false;
    }
})
console.log('numbers after filter',filternum)

console.log('2. =============');

const num1 = numbers.filter(function(value,index){
    if(value>200){
        return true;
    }
    else{
        return false;
    }
})
console.log(num1)

console.log('3. =============');

const num2 = numbers.filter(function(value,index){
    if(value>300){
        return true;
    }
    else{
        return false;
    }
})
console.log(num2)

console.log('4. =============');

const num3 = numbers.filter(function(value,index){
    if(value>400){
        return true;
    }
    else{
        return false;
    }
})
console.log(num3)

console.log('5. =============');

const num4 = numbers.filter(function(value){
    if(value<100){
        return true;
    }
    else{
        return false;
    }
})
console.log(num4)

console.log('6. =============');

const colors = ['red','green','yellow','blue']
const color1 = colors.filter(value => value > 1)
console.log('colors after filter',color1)

