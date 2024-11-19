const btn = document.getElementById('btn');
const url = "http://universities.hipolabs.com/search?country="
btn.addEventListener('click',()=>{
    const inp = document.getElementById('inp');
    const URL = url+inp.value;
    fetch(URL)
        .then((res)=>{
            return res.json()
        })
        .then((datas)=>{
            console.log(datas)

            const name = document.querySelector('.name');
            const state = document.querySelector('.state');
            const webpage = document.querySelector('.webpage')

            for(let data of datas){
                 const p1 = document.createElement('p');
                 p1.innerText= data.name;
                 const p2 = document.createElement('p');
                 p2.innerText= data["state-province"];
                 const p3 = document.createElement('p');
                 p3.innerText= data["web_pages"][0];

                 name.appendChild(p1);
                 state.appendChild(p2);
                 webpage.appendChild(p3)
             
                 inp.value=""
            }
        })
})