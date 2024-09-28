function fun(){
    console.log('inside fun function')
}

// fun();
// fun();

function outer(){
    var x = 20;
    console.log(x);
}

var y = outer;

// console.log(y);
// console.log(outer);

y()
outer()


// var p = function abc(){
//     console.log('inside abc function')
// }

// p();

// abc() can't do this


var p = function (){
    console.log('inside abc function')
}

// arrow function
var x =()=>{
    console.log('inside arrow function')
}

x()

