var arr = [23,46,71,13,4,24];


var x =arr.reduce((acc,item,ind,arr)=>{
     console.log(acc)
     return ind*10;
},32)
// console.log(x);


// let sum = arr.reduce((acc,item)=>{
//     return acc+item;
// })

// console.log(sum)