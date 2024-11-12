const para = document.querySelectorAll('p')[1];

// para.style.border="2px solid red"

// setAttribute getAttribute removeattribute

para.setAttribute('class','spclPara')

const img = document.querySelector('img');

img.setAttribute('src','https://images.unsplash.com/photo-1729691692870-a957012d616a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D');

img.style.height="250px";

console.log(img.getAttribute('src'));

img.removeAttribute('src');

const paragraph = document.querySelectorAll('p')[3];

paragraph.setAttribute('class','one');

paragraph.setAttribute('class','two');

// Classlist :- add remove toggle

paragraph.classList.add('one');

paragraph.classList.remove('two');

paragraph.classList.toggle('two');

paragraph.classList.toggle('two');


const spclCity = document.querySelector('#spclCity');

spclCity.style.border= "2px solid green";

// console.log(spclCity.previousElementSibling)

spclCity.previousElementSibling.style.color="yellow"

spclCity.nextElementSibling.style.color="blue";

spclCity.previousElementSibling.previousElementSibling.style.border="2px solid grey";


console.log(spclCity.parentElement)

spclCity.parentElement.style.border="3px solid black";

const ul = spclCity.parentElement;

console.log(ul.children[1]);

ul.children[1].style.color="pink";


const li = document.createElement('li');

li.innerText= `<h1><Mummbai</h1>`;
li.innerHTML= `<h1>Mumbai</h1>`

console.log(li);

ul.append("swkj");
ul.appendChild(li)