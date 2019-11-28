console.log('1. =============');

const numbers = [100,200,300,400]
const num = numbers.map(function(value,index){
    let newValue = value + 50;
    return newValue; 
})
console.log(num);

console.log('2. =============');

const colors = ['red','blue','orange']
const col = colors.map(function(value,index){
    let newCol = index + 50;
    return newCol;
})
console.log(col);

console.log('3. =============');

const utensils = ['plate','spoon','glass']
const uten = utensils.map(function(value,index){
    let newUten = value+100;
    return newUten;
})
console.log(uten)

console.log('4. =============');

const mobile = ['apple','samsung','one plus']
const mob = mobile.map(function(value,index){
    let newMob = value + 20;
    return newMob;
})
console.log(mob)

console.log('5. =============');

const laptop = ['lenovo','dell','apple']
const lap = laptop.map(function(value,index){
    let newLap = value +50;
    return newLap;
})
console.log(lap);

console.log('6. =============');

const channels = ['zoom','mtv','9xm']
const chann = channels.map(function(value,index){
    let newChann = value + 40;
    return newChann;
})
console.log(chann);

console.log('7. =============');

const loops = ['for','foreach','for of','for in']
const loop = loops.map(value => value + 50)
console.log(loop);

console.log('8. =============');

const social = ['whatsapp','fb','whatsapp'];
const soci = social.map(value => value + 40)
console.log(soci)

console.log('9. =============');

const games = ['football','soccer','basketball','badminton']
const game = games.map(value => value + 30)
console.log(game);

console.log('10. =============');

const cabs = ['ola','uber','vogo']
const cab = cabs.map(value => value+ 40)
console.log(cab);