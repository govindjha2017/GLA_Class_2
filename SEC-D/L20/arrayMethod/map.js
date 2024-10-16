var arr = [34,54,75,13,11,4];


var x = arr.map((item,ind,arr)=>{
     return item+10*ind;
})

console.log(x);