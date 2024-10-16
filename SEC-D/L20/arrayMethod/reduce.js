var arr = [34,54,75,13,11,4];
// var x= arr.reduce((acc,item,ind,arr)=>{
//     // console.log(acc)
//     return acc+ind;
// })

// console.log(x);

var x= arr.reduce((acc,item,ind,arr)=>{
     console.log(acc)
     return ind+1;
},0)
