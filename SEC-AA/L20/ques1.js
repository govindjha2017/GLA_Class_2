let arr = [
    {firstName:'rohit', lastName:'Jha',age:25},
    {firstName:'Donald', lastName:'Trump',age:76},
    {firstName:'Vimpol', lastName:'Xyz',age:20},
    {firstName:'Depika', lastName:'Padukone',age:25}
];


// op  == ['rohit Jha ','Depika Padukone'];

var op = arr.filter((item,ind)=>{
    if(item.age==25){
        return true;
    }
    return false;
}).map((item)=>{
    return item.firstName +" " + item.lastName
})

console.log(op)