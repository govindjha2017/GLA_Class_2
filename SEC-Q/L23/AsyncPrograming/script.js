console.log('start');

setTimeout(()=>{
    console.log('mid')
},3000)

// setInterval(()=>{
//    console.log("hello")
// },1000)

// let date = new Date();

// console.log(date.getTime);

let x = new Date().getTime();

while(new Date().getTime()<x+10000){

}

console.log('end');

