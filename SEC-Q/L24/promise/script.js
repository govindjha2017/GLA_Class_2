let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise resolved data")
        // rej('kuchh bhi')
    },4000)
})

 
console.log('start');
pr
    .then((x)=>{
      console.log(x);
    })
    .catch((x)=>{
      console.log(x);
    })

console.log('end')