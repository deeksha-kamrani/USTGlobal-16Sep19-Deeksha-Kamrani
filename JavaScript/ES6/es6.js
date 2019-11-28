const message = new Promise (function(resolve,reject){
    if(30>10){
        resolve([{
            name : 'BillGates',
            age : 60
        }])
     } else{
        reject('Failed')
    }
})
message.then(function(msg){
    console.log('Success Message ',msg)
}).catch(function(error){
    console.log('Failure Message',error)
})

//Closures

function outerFunction(counter){
    function innerFunction(){
        let count;
        count = counter + 10
        return count
    }
    return innerFunction
}
let innerFunc = outerFunction(20)
let counter = innerFunc()
console.log('Counter Value',counter)