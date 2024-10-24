// async function fun(){
//     // return "hello"
//     return new Promise((resolve, reject) => {
//         resolve("hello")
//     })
// }

// var x = fun();

// console.log(x);


var pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise data")
    },3000)
})

// pr  
//     .then((x)=>{
//     console.log(x);
// })

async function fetchData(){
    var y = await pr
    console.log("world")
}
console.log("hello")
fetchData()
console.log('end');