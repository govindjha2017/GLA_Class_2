let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise resolve data")
    },3000)
})

console.log('start');
async function fetchData(){
    console.log("world")
    var x = await pr;
    console.log(x);
    console.log('after await')
}
fetchData();
console.log("end");