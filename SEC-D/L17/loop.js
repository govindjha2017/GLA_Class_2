// var arr = [3,4,6,8,"qwer",[3,4],{
//     'name':'govind',
//     'age':20
// }];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// for of loop  ((ARRAY))

var x = [1,32,45,67,62];

for(var item of x){
    console.log(item)
}

for(var i in x){
    console.log(i)
}

var obj = {
    'full name':'abhay',
    'age':45,
    city:'delhi'
}
// can't do this
// for(var i of obj){
//     console.log(i)
// }