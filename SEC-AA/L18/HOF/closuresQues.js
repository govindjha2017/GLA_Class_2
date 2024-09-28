function outerFun(){
    var money = 150;
    function innerFun(){
        money++;
        var a = 10;
        function innerMostFun(){
            money++;
            a++;
            console.log('money: ', money, 'a: ', a);
        }
        return innerMostFun;
    }
    return innerFun;
}
let fun = outerFun();
let fun1 = fun();
let fun2 = fun();
fun1();
fun1();
fun2();
fun2();
fun2()
fun1();