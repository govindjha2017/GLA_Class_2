function outer(){
    var money= 50;
    function inner(){
        var a=10;
        console.log(a);
        console.log(money);
    }

    return inner;
}

var x = outer();

x()