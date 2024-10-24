function fun(a){
    var p = ()=>{
        console.log('inside p function')
    }
    return p;
}

var a = ()=>{

}

let x = fun(a)

console.log(x);