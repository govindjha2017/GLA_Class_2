// const head = document.getElementById('head');
const head = document.querySelector('#head');
console.log(head)

head.style.color="red";
head.style.border ="2px solid black";
head.style.backgroundColor="teal";
head.style.width="60vw";

// const para = document.getElementsByTagName('p');
const para = document.querySelectorAll('p')

console.log(para)

para[0].style.border="2px solid green"

for(let x of para){
    x.style.border="3px solid red"
}

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara = document.querySelectorAll('.spclPara')
console.log(spclPara);

for(let para of spclPara){
    para.style.color="blue"
}