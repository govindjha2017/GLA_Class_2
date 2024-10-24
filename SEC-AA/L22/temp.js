setTimeout(()=>{
    console.log("hello after 6Sec");
},6000)

console.log('mid');

setTimeout(()=>{
  console.log('hello after 4sec');
},4000)

let x = new Date().getTime();

while( new Date().getTime()<x+5000){

}
console.log('end');