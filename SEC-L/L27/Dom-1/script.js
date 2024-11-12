// // const city = document.getElementsByTagName('li')

// const citys =  document.querySelectorAll('li');

// for(let city of citys){
//     city.style.border="2px solid green"
// }

// const favcity= document.querySelector('#favcity')

// favcity.style.color="red"

// console.log(favcity);

// // console.log(favcity.previousElementSibling)
// // console.log(favcity.nextElementSibling)

// favcity.previousElementSibling.previousElementSibling.style.color="blue"

// // console.log(favcity.parentElement)

// favcity.parentElement.style.border="5px solid black";

// const ul = favcity.parentElement;

// console.log(ul.children[1]);

// const li = document.createElement('li')
// li.innerText="Banglore"
// console.log(li);

// ul.appendChild(li);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4= document.createElement('li');

li1.innerText="delhi"
li2.innerText="Noida"
li3.innerText="kolkata"
li4.innerText="Mumbai";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

const div = document.querySelector('.container');

div.appendChild(ul)