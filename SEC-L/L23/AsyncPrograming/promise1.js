function check(kalMilneAayega){
    let pr = new Promise((res, rej) => {
        setTimeout(()=>{
            if(kalMilneAayega){
                res('to main tujhe party dunga!')
            }
            else{
                rej("tum aaye hi nhi to party kise du??")
            }
        },3000)
    })

    return pr;
}

check(!true)
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })
