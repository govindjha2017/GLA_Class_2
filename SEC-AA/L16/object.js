var obj = {
   " full name":'govind',
    age: 20,
    city:'Noida'
}

console.log(obj['full name']);
// console.log(obj.age);


// for in loop

for(var i in obj){
    console.log(i)
    console.log(obj[i])
}