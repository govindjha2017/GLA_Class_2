let pr1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve('promise1 resolved data');
    },5000)
})
let pr2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve('promise2 resolved data');
    },10000)
})
function fetchData(){
    console.log('hello')
    pr1
        .then((x)=>{
            console.log(x);
        })
    console.log('world');
    pr2
        .then((x)=>{
            console.log(x);
        })
}
console.log('hii');
fetchData();
console.log('end');