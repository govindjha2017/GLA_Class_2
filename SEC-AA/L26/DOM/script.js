// const spclPara = document.getElementById('spclPara')

// console.log(spclPara)

const spclPara = document.querySelector('#spclPara');

spclPara.style.color="red";
spclPara.style.backgroundColor="blue"
spclPara.style.padding="20px";
spclPara.style.width="50vw"

const para = document.querySelectorAll('.para');

for(let x of para){
    x.style.border = "2px solid red"
}

const img = document.querySelector('img');

img.style.height='300px'

//SetAttribute  removeattribute getAttribute

img.setAttribute('src','https://images.unsplash.com/photo-1729693862649-c457544c9c69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8')

img.removeAttribute('src')

img.setAttribute('src','https://images.unsplash.com/photo-1729693862649-c457544c9c69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8')


var x = img.getAttribute('src');

console.log(x);

const h1 = document.querySelector('h1');
// h1.setAttribute('class','one')
// // h1.setAttribute('class','two')

// h1.classList.add('two')

// h1.classList.remove('one')

h1.classList.toggle('one')
h1.classList.toggle('one')
h1.classList.toggle('one')

h1.innerText="kuchh bhi"

const y = document.querySelectorAll('li')[2];

y.style.border="2px solid red"

y.previousElementSibling.style.color="blue"

y.nextElementSibling.style.color="green"

y.parentElement.style.border="2px solid brown"

const parent = y.parentElement;

parent.children[4].style.color="brown"

