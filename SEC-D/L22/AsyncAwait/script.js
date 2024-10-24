// async function fun(){
//     // let x = "hello";
//     let x = new Promise((res,rej)=>{
//         res("hello")
//     })
//     return x;
// }

// let y = fun();

// console.log(y)

var pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise resolved data")
    },3000)
})

pr  
    .then((x)=>{
        console.log(x);
    })

async function fetchData(){
   var x  = await pr;
   console.log(x);
}

fetchData();