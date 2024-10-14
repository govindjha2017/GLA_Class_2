let arr = [
    {firstName:'Govind', lastName:'Jha',age:25},
    {firstName:'Donald', lastName:'Trump',age:76},
    {firstName:'Vimpol', lastName:'Xyz',age:20},
    {firstName:'Depika', lastName:'Padukone',age:25}
];

// op {25:2,76:1,20:1}


var op = arr.reduce((acc,item,ind)=>{
        if(acc[item.age]){
            acc[item.age]+=1;
        }
        else{
            acc[item.age]=1
        }

        return acc;
},{})

console.log(op)