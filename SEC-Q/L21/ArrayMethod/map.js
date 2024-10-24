var arr = [12,13,25,72,6];

 
var x = arr.map((item,ind,arr)=>{
   return item+10*ind;
}) 

console.log(x);