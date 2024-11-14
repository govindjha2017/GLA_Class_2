const head = document.getElementById('head');

console.log(head)

// head.style.backgroundColor="teal"

head.style.border="2px solid black";

head.addEventListener('click',(e)=>{
    // console.log('clicked!!')
    console.log(e.target);
    e.target.style.color="red"
})

head.addEventListener('mouseenter',(e)=>{
    e.target.style.color="blue"
})
head.addEventListener('mouseleave',(e)=>{
    e.target.style.color="black"
})

head.addEventListener('copy',(e)=>{
    e.target.innerText="Cheating karta hai!"
})

const btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    const body = document.querySelector('body');
    body.classList.toggle('mode');

    if(e.target.innerText=="Dark Mode"){
        e.target.innerText="light Mode"
    }
    else{
        e.target.innerText="Dark Mode"
    }
})



const para = document.createElement('p');
para.innerText="Hello ji"

const body = document.querySelector('body');

body.appendChild(para)