let pr = new Promise((res, rej) => {
//    setTimeout(()=>{
//     res("promise resolved data");
//    },3000)
setTimeout(()=>{
    rej("kuchh error hai")
   },3000)
})

console.log('start')
pr
    .then((res)=>{
        console.log(res)
    })
    .catch((res)=>{
        console.log(res)
    })

console.log('end');