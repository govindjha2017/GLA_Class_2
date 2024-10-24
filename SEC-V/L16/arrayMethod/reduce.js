var arr = [24,61,25,4,12];

let x= arr.reduce((acc,item,ind,arr)=>{
    // console.log(acc);
    if(ind==4){
        return "final value"
    }
    return 20
})

console.log(x);