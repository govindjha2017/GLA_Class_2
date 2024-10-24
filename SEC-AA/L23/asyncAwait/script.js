// async function fun(){
//     // return "hello";
//     return new Promise((resolve, reject) => {
//         resolve("hello")
//     })
// }

// var x = fun();
// console.log(x);

let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise resolved data')
    },3000)
})
console.log('strat');
async function fetch(){
    var x;
    console.log("hello")
    x = await pr;
    console.log(x);
    console.log("world")
}
fetch()

console.log('end')