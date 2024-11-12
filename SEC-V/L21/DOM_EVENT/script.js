const head = document.querySelector('#head');

head.addEventListener('click',(e)=>{
    console.log(e.target)
    e.target.style.border="2px solid black";
    e.target.style.color="red"
})

head.addEventListener('copy',(e)=>{
    e.target.innerText="copy karta hai!!"
})

head.addEventListener('mouseenter',(e)=>{
    e.target.style.color="green"
})

head.addEventListener('mouseleave',(e)=>{
    e.target.style.color="black"
})