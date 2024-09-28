function fun(){
    console.log('inside fun function');
}

// fun()
// fun()

var x = fun;

x()
fun()

var y = function outer(){
    var x =10;
    console.log(x)
}

y();
outer();