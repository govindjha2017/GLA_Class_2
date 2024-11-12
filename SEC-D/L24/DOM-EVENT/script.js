const head = document.getElementById('head');

head.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.style.border="2px solid green";
    e.target.style.backgroundColor="aqua"
})

head.addEventListener('mouseenter',(e)=>{
    e.target.style.color="blue"
})
head.addEventListener('mouseleave',(e)=>{
    e.target.style.color="black"
})

head.addEventListener('copy',(e)=>{
    e.target.innerText="Chreating karta hai"
})

const btn = document.querySelector('#btn');

btn.addEventListener('click',(e)=>{
    console.log(e.target)

    const body = document.querySelector('body');
     body.classList.toggle('darkmode')
})