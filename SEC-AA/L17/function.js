// function fun(){
//     console.log('inside fun function')
// }

// fun()

// fun()

function fun1(){
    console.log('inside fun1 function')
}

var p = fun1;



var x = function fun(){
    console.log('inside function')
}

p();
fun1();
x()
// can't do this
// fun() 


// anonymous function

// var x = function (){
//     var y =10;
//     console.log(y)
// }

// x()

// Arrow function

var x =  ()=>{
        var y =10;
        console.log(y)
        return "kuchh bhi"
}
    
x()
x()


 console.log(x());