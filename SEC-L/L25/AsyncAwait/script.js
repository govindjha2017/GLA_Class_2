let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise data")
    },3000)
})

// pr
//     .then((y)=>{
//        var x = y;
//     })


async function fetchData(){
    let x =await pr;
    console.log(x);
}
fetchData()