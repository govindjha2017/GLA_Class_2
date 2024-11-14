const head = document.querySelector('#head');

head.style.border =" 2px solid black";

head.addEventListener('click',(e)=>{
    
    console.log(e.target);

    e.target.style.color="red";
    e.target.style.backgroundColor="teal"
})

const btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
     const body = document.querySelector('body');
     body.classList.toggle('mode');
     if(e.target.innerText=="Dark MODE"){
        e.target.innerText="Light MODE"
     }
     else{
        e.target.innerText="Dark MODE"
     }
})