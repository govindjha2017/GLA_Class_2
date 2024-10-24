let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        let arr = [2,4,6,7]
        res(arr)
    },3000)

    // setTimeout(()=>{
    //     rej('promise rejected data')
    // },3000)
})
// console.log(pr);
console.log('start')
pr
    .then((x)=>{
        console.log(x)
    })
    .catch((x)=>{
        console.log(x);
    })

console.log('end');