function fun(p){
    let x = ()=>{
        console.log('inside x function')
    }
    p()
    return x;
}

var p = ()=>{
    console.log('inside p function')
}

var a = fun(p)

console.log(a);