var money = 50;

function inner(){
    console.log(a);
    var a=10;
    console.log(money);
    console.log(a);
}

inner();
console.log(a);

console.log('end')