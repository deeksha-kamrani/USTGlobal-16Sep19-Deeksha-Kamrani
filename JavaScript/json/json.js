const person = {
    name : 'Sundara',
    age : 100,
    color : 'white',
    address : {
        city : 'Bijapur',
        state : 'Karnataka',
        pincode : 591115
    },
    hobbies : ['Coding','Bird Watching','Singing']
}

console.log('JavaScript person Object',person)
const jsonObject = JSON.stringify(person)
console.log('JSON person Object',jsonObject)
const JavaScriptPersonObject = JSON.parse(jsonObject)
console.log('JavaScript person Object after parse',JavaScriptPersonObject)

localStorage.setItem('email','billgates@gmail.com');
const emailID = localStorage.getItem('emailaa')
console.log('Email ID',emailID)
localStorage.clear();