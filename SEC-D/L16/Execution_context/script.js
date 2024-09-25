// var x=20;

// console.log(x);
// console.log(p)
 

// console.log('end')

var x = 50;
x++;
function fun(){
    var a=10;
    function inner(){
        var p="hello"
        console.log(x)
        console.log(a)
        var x= 20;
    }
    console.log(p)
    console.log(x);
    inner()
}

fun()