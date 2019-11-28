const items = [{
    name : 'Earing',
    id : 01,
    price :100
},{
    name : 'Kajal',
    id : 02,
    price : 200
},{
    name : 'Trimmer',
    id : 03,
    price : 4000
},{
    name : 'Beardo',
    id : 04,
    price : 600
}]

for (var i=0;i<=items.length;i++){
    console.log('items',items)
}

const updatedItem = items.map(function(item){
    item = items.price + 300
    return item
})
console.log(updatedItem)

console.log("==================================");

const itemsArrow = items.map((value) => {
value.price = value.price + 300
return value
})
console.log(itemsArrow)

console.log("=====================================");

const filteredItems = 
      items.filter((item)=> item.price>1000)
      console.log(filteredItems)