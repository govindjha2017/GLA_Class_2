function outer(){
    var money = 50;
    function inner(){
        var a=10;
        money++;
        console.log(a);
        console.log(money);
    }
    return inner;
}

var x = outer();
x()