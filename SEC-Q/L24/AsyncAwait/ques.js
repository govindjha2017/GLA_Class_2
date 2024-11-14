let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise1 resolved data');
    },10000);  
})
let pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise2 resolved data');
    },20000);   
})
console.log('start');
async function handlePromise(){
    console.log('Hello World');
    let data2 = await pr2;
    console.log(data2);
    console.log('console after resolved');

    let data1 = await pr;
    console.log(data1);
}
handlePromise();
console.log('End');