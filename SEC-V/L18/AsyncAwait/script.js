// async function fun(){
//     return "hello"
// }

// var x = fun();

// console.log(x);


let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise resolve data")
    },3000)
})

// pr
//     .then((x)=>{
//         console.log(x);
//     })

async function fetchData(){
    var x = await pr;
    console.log(x);
}

fetchData();