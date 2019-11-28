var brands = ['kingfisher','bisleri','aqua','kinley']
console.log('For of Loop')
for(var element of brands){
    console.log('Brand =', element);
    console.log('For Loop', number);
    
}

console.log('================');

console.log('For in Loop')
for(var index in  brands){
    console.log('Brand =',brands[index]);
}

console.log('==================');
console.log('For in Loop of Object')
    var person = {
        name : 'Sundari',
        age : 33,
        color : 'white'
    }

for(var key in  person){
    console.log('Value =',person[key])
}
console.log('=================');

var movies=['Sholay','MayaBazar','Jurassic Park','Titanic'];
movies.forEach(function(Value,index){
    console.log('movie = ', Value);
    console.log('Movie Index =',index)
});

console.log('============');

var items = [{
    item : 'bangles',
    id :1,
    price : 100
},
{
item : 'eyeliner',
id :2,
price : 500
},
{
    item : 'watch',
    id :3,
    price : 5000 
},
{
    item : 'bike',
    id :4,
    price : 1000000
}
]

items.forEach(function(item,index){
    console.log('Item = ',item)
    console.log('Index of item = ',index)
    
})