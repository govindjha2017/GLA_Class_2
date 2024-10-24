var arr = [24,61,25,4,12];


let x = arr.map((item,ind,arr)=>{
   if(item%2==0){
    return item;
   }
   else{
    return item+1;
   }
})

console.log(x);