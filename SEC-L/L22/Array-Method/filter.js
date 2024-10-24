var arr = [23,46,71,13,4,24];

var x = arr.filter((item,ind,arr)=>{
    if(item>30){
        return true
    }
})

console.log(x)