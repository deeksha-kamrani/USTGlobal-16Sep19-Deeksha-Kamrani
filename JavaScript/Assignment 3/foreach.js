console.log('1. =====================')

var bag = ['handbag',,'luggagebag']
bag.forEach(function(value,index){
    console.log('index =',index)
    console.log('bag =',value)
    
}
)

console.log('2. =====================')

var mobile = ['apple','one plus','nokia']
mobile.forEach(function(element,value){
    console.log('index =',value)
    console.log('mobile =',element)
    
    })

console.log('3. =====================')

var car = ['audi','bmw','jaguar']
car.forEach(function(index){
    // console.log('index =',element)
    console.log('car =',index)
})

console.log('4. =====================')

var city = ['pune','bng','delhi']
city.forEach(function(element,index){
    console.log('index =',index)
    console.log('element =',element)
})

console.log('5. =====================')

var channels = ['sony','starplus','mtv','colors']
channels.forEach(function(index1,index){
    console.log('index =',index)
    console.log('channels =',index1)
})

console.log('6. =====================')

var mobiles = [{
    mobile : 'apple',
    id : 1,
    color : 'gold'
},
{
    mobile : 'one plus',
    id : 2,
    color : 'black'
},
{
    mobile : 'samsung',
    id : 3,
    color : 'white'
}]
mobiles.forEach(function(mobile,index){
    console.log('index =',index)
    console.log('mobile= ',mobile)
})

console.log('7. =====================')

var bikes = [{
    bike : 'R15',
    id :1,
    price : 1000000
},
{
bike : 'apache',
id :2,
price : 5000000
},
{
    bike : 'pulsur',
    id :3,
    price : 50000000
},
{
    bike : 'karizma',
    id :4,
    price : 1000000
}
]

bikes.forEach(function(bike,index){
    console.log('Bike = ',bike)
    console.log('Index of Bike = ',index)
    
})

console.log('8. =====================')

var cars = [{
    car : 'audi',
    id : 0,
    color : 'white'
},
{
    car : 'bmw',
    id : 2,
    color : 'black'
},
{
    car : 'jaguar',
    id : 3,
    color : 'grey'
}
]
cars.forEach(function(value,index){
    console.log('index =',index)
    console.log('value =',value)
})

console.log('9. =====================')

var dresses = [{
    dress : 'one piece',
    id : 1,
    color : 'blue',
    size : 'XL'
},{
    dress : 'jump suit',
    id : 2,
    color : 'black',
    size : 'L'
},{
    dress : 'formal',
    id : 3,
    color :'white',
    size : 'M'
}]
dresses.forEach(function(dress,number){
    console.log('number =',number)
    console.log('dress =',dress)
})

console.log('10. =====================')

var shoes = [{
    id : 1,
    company : 'puma',
    size : 34
},
{
    id : 2,
    company : 'adidas',
    size : 36
},
{
  id : 3,
  company : 'reebok',
  size : 38
}]
shoes.forEach(function(value,index){
    console.log('id =',index)
    console.log('shoe =',value)
})