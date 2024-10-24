function check(kalMilneAyega){
    let pr = new Promise((res, rej) => {
        setTimeout(()=>{
            if(kalMilneAyega){
                res('to main tujhe party dung!')
            }
            else{
                rej("tum aaya hi nhi to main party kise dunga!")
            }
        },5000)
    })
    return pr;
}
check(!true)
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x)
    })