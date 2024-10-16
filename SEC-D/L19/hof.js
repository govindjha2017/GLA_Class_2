function fun(b){
    b()
    var a=()=>{
        console.log('inside a function')
    };
    return a;
}

var b=()=>{
    console.log('inside b function');
 }

var y = fun(b);

console.log(y)

