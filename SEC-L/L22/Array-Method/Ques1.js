let arr = [
    {firstName:'raj', lastName:'gupta',age:25},
    {firstName:'Donald', lastName:'Trump',age:76},
    {firstName:'Vimpol', lastName:'Xyz',age:20},
    {firstName:'Depika', lastName:'Padukone',age:25}
];

// op  == ['raj gupta ','Depika Padukone'];

let op =arr.filter((item)=>{
    if(item.age==25){
        return true
    }
}).map((item)=>{
    return item.firstName+" " +item.lastName
})

console.log(op)