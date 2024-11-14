// async function fun(){
//      return new Promise((resolve, reject) => {
//         resolve("hello")
//      })
// }

// let x = fun();

// console.log(x);

let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
   res("promise resolved data")
    },3000)
})

// pr
//     .then((x)=>{
//         console.log(x);
//     })
console.log('start');
async function fetcData(){
    let x = await pr;
    console.log(x);

}
fetcData();

console.log('end');