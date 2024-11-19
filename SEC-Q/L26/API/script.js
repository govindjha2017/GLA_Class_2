const URL = "https://official-joke-api.appspot.com/random_joke";

fetch(URL)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })