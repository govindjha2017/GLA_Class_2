// const head = document.getElementById('head');
const head = document.querySelector('#head');

head.style.color="red";
head.style.border="2px solid green"
// head.style.height="200px"
head.style.backgroundColor="teal"

console.log(head);

// const para = document.getElementsByTagName('p');
const para = document.querySelectorAll('p');
console.log(para)

para[0].style.border="2px solid black"

for(let p of para){
    p.style.border="2px solid black"
}

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara = document.querySelectorAll('.spclPara')
console.log(spclPara)

for(let x of spclPara){
    x.style.backgroundColor="blue"
}