const URL ="https://dog.ceo/api/breeds/image/random";

const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    fetch(URL)
    .then((res)=>{
        // console.log(res)
        return res.json()
    })
    .then((data)=>{
        // console.log(data);
        // const img = document.createElement('img');

        // img.setAttribute('src',data.message);

        // console.log(img);

        // const body = document.querySelector('body');
        // body.appendChild(img)

        const img = document.getElementById('img');
        img.setAttribute('src',data.message)
    })
})

