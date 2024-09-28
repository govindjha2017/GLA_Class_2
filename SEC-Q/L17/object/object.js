var obj = {
    "full name":'ajay',
    age: 30,
    city:'delhi',
    i:'hello'
}

// console.log(obj.name);

console.log(obj["full name"])
for(var i in obj){
    console.log(i)
    console.log(obj[i]);
}