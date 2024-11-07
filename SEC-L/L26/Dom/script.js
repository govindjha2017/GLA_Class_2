// const para = document.getElementsByClassName('para');

// console.log(para);

// for(let x of para){
//     x.style.border="2px solid red"
// }

// const para2 = document.getElementsByTagName('p');

// for(let x of para2){
//     x.style.color="blue"
// }

// const splcPara = document.getElementById('spclPara');

// splcPara.style.backgroundColor = "teal";
// splcPara.style.width="50vw"


const para = document.querySelectorAll('.para');

console.log(para);

const spclPara = document.querySelector('#splcPara');


// setAttribute removeAttribute getAttribute

const img = document.querySelector('img');

img.style.height="250px"

img.removeAttribute('src');

img.setAttribute('src','https://images.unsplash.com/photo-1729756760480-b9f5ee9f352f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D')

console.log(img.getAttribute('src'));


const div = document.querySelectorAll('div')[0];

// div.setAttribute('class','one')
// div.setAttribute('class','two')

// Classlist :- add , remove, toggle

div.classList.add('one')
div.classList.add('two')

div.classList.remove('two')

div.classList.toggle('two');
div.classList.toggle('two');