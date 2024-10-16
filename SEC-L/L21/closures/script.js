function fun(){
    var money = 50;
    var z = ()=>{
        var a= 10;
        console.log('inside z function')
        console.log(a);
        console.log(money);
    }
    return z;
}

var y = fun() ;

console.log(y);

y()