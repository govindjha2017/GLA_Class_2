// const head = document.getElementById('head');
const head = document.querySelector('#head')
console.log(head);

head.style.color="red";
head.style.border = "2px solid black"
head.style.backgroundColor="teal"
head.style.width="60vw";
// head.style.padding="20px"

// const pargraph = document.getElementsByTagName('p');
const pargraph = document.querySelectorAll('p');

// console.log(pargraph)
// pargraph[0].style.border="3px solid red"
// pargraph[1].style.border="3px solid red"

for(let p of pargraph){
    p.style.border="2px solid red"
}

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara = document.querySelectorAll('.spclPara')
console.log(spclPara);

for(let para of spclPara){
    para.style.backgroundColor="blue";
    para.style.color="yellow"
}


