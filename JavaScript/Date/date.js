var todayDate = new Date();
var day = todayDate.getDay()
var array = ['Sunday','Monday','Tuesday','wednesday','Thursday','Friday','Saturday'];
console.log('Day : ', array[day]);

var month = todayDate.getMonth()
var array1 = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
console.log('Month : ',array1[month]);

var ran = Math.random();
console.log(ran*100);