const head = document.getElementById('head');

head.style.border="2px solid black"

// head.addEventListener('click',(e)=>{
//     // console.log('clicked!')
//     console.log(e.target);

//     e.target.style.color="yellow";
//     e.target.style.backgroundColor="blue"
// })

// head.addEventListener('mouseenter',(e)=>{
//     e.target.style.color="blue"
// })

// head.addEventListener('mouseleave',(e)=>{
//     e.target.style.color="black"
// })

head.addEventListener('copy',(e)=>{
    e.target.innerText="Cheating karta hai!"
})


const btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click',(e)=>{
 
    const body = document.querySelector('body');
    body.classList.toggle('mode');

    if(e.target.innerText=="Dark Mode"){
        e.target.innerText="ligt Mode"
    }
    else{
       e.target.innerText="Dark Mode"
    }
})