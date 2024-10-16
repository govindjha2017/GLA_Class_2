var arr = [34,54,75,13,11,4];


var x = arr.filter((item,ind,arr)=>{
   if(item%2==0){
    return true
   }
})

console.log(x);