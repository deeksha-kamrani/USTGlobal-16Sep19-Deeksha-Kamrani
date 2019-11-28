//1st way

//1st way

function add(arr){
    var sum =0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
console.log(add([1,2,3,4,5]))

//2nd way
var add = function (arr){
    var sum = 0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
console.log(add([1,2,3,4,5]))

//3rd way

// (function(arr){
//     var sum=0
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return(sum)
// })
// (add[1,2,3,4,5])


//4th way

var add = arr =>{
    var sum = 0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
console.log(add([1,2,3,4,5]))
