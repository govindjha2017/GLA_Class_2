var arr = [12,13,25,72,6];

var x = arr.filter((item,ind,arr)=>{
     if(item%2==0){
        return true;     }
})

console.log(x);