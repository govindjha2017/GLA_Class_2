function check(kalMilneAayega){
    let pr = new Promise((res,rej)=>{
        setTimeout(()=>{
            if(kalMilneAayega){
                res("main tujhe party dunga!")
            }
            else{
                rej("chal koi nhi")
            }
        },4000)
    })
    return pr;
}

check(!true)
    .then((x)=>{
        console.log(x)
    })
    .catch((x)=>{
        console.log(x);
    })

    