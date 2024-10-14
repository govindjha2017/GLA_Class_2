var arr = [11,20,33,46,48];

var FilterdArr = arr.filter((item,ind,arr)=>{
    // if(ind%2==0){
    //     return true;
    // }
    if(item>20){
        return true;
    }
})

console.log(FilterdArr);