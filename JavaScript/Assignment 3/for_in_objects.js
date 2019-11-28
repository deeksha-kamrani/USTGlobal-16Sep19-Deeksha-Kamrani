console.log('1. ==================')
var specs= {
shape : 'round',
color : 'black',
lens : +2
}

for( var key in specs){
    console.log('specs =',specs[key])
}
console.log('2.=====================')

var mobile = {
    company : 'apple',
    color : 'white'
}
for(var key in mobile){
    console.log('mobile =',mobile[key])
}
console.log('3. =====================')

var pen = {
    color : 'red',
    company : 'reynolds'
}
for(var value in pen){
    console.log('pen =',pen[value])
}
console.log('4. =====================')

var bangles = {
    shape : 'round',
    price : 100
}
for(var element in bangles){
    console.log('bangles =',bangles[element])
}
console.log('5. =====================')

var copy = {
    price : 50,
    type : 'plane'
}
for(var index in copy){
    console.log("copy =",copy[index])
}
console.log('6. =====================')

var suitcase = {
 color : 'red',
 size : 11,
 wheels : 'yes'
}
for( var key in suitcase){
    console.log('suitcase = ',suitcase[key])
}
console.log('7. =============')

var dress = {
    type : 'one piece',
    size : 'XL',
    color : 'brown'
}
for (var value in dress){
    console.log('for in =',dress[value])
}
console.log('8. =============')

var deo = {
    company : 'engage',
    quantity : 2
}
for(var element in deo){
    console.log('deo =',deo[element])
}
console.log('9. =============')

var charger = {
    type : 'apple',
    color : 'white'
}
for (var index in charger){
    console.log('charger =',charger[index])
}
console.log('10. =============')

var pillow = {
    type : 'soft',
    color : 'pink',
    number : 2
}
for(var key in pillow){
    console.log('pillow =',pillow[key])
}