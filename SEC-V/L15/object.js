var obj = {
   "full name":'rahul',
    age:45,
    city:'delhi',
    marks:[8.2,3.5,5.6,7],
    x:55
}

// console.log(obj.name)
// console.log(obj.age);

for(var x in obj){
    console.log(x);
    console.log(obj[x]);
}