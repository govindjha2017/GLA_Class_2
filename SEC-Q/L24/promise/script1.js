function fun(KalMilneAayega){
   let pr = new Promise((res,rej)=>{
         setTimeout(()=>{
            if(KalMilneAayega){
                res('main tujhe party dunga!')
            }
            else{
                rej('tum aaye hi nh to party kise du')
            }
         },3000)
   })
   return pr;
}

fun(!true)
    .then((x)=>{console.log(x)})
    .catch((x)=>{console.log(x)});