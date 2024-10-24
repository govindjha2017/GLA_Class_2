
let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("promise resolved data")
    },3000)
})

console.log('start')
pr 
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })
console.log('end')