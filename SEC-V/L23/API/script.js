const URL = "https://official-joke-api.appspot.com/random_joke";

fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);

        const p1 = document.createElement('p');
        p1.innerText=data.setup;

        const container = document.querySelector('.container');

        container.appendChild(p1);

        setTimeout(()=>{
            const p2 = document.createElement('p');
            p2.innerText=data.punchline;
    
            container.appendChild(p2);
        },5000)
    })