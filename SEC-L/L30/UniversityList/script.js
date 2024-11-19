const inp = document.getElementById('inp');
const url = "http://universities.hipolabs.com/search?country="
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const URL =   url+ inp.value;

    fetch(URL)
        .then((res)=>{
            return res.json()
        })
        .then((datas)=>{
            console.log(datas);
            const name = document.querySelector('.name');
            const state = document.querySelector('.state');
            const webpage = document.querySelector('.webpage');

            
            for(let data of datas){
                 const p1 = document.createElement('p');
                 p1.innerText=data.name;
                 name.appendChild(p1);

                 const p2 = document.createElement('p');
                 p2.innerText=data["state-province"];
                 state.appendChild(p2);

                 const p3 = document.createElement('p');
                 p3.innerText=data.web_pages[0];
                 webpage.appendChild(p3);
            }

            inp.value="";
        })
})