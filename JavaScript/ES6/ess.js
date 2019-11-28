const employee = new Promise(function(resolve,reject){
    if(30>10){
        resolve([{
        name : 'Bill Gates',
        age : 76
    },{
        name : 'Bill Gates',
        age : 76
    },{
        name : 'Bill Gates',
        age : 76
    }])
}else{
    reject('Failed')
}
})
employees.then(function(data){
    console.log('Employee Data ',data)
}).catch(function(error){
    console.log('Failure Message',error);
    )
})