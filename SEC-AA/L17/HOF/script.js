
function fun(){
    var a=10;
    var x = ()=>{
      var b=20;
      console.log(a);
      console.log(b)
    }
    return x;
}

var p=fun();
console.log(p)

p()