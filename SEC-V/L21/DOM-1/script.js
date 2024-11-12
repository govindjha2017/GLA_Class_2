const paragraph = document.querySelectorAll('p')[1];

// paragraph.style.border="2px solid red"

// setAttribute , getAttribute , removeAttribute

paragraph.setAttribute('id','para')

console.log(paragraph.getAttribute('id'))

const img = document.querySelector('img');

img.setAttribute('src','https://plus.unsplash.com/premium_photo-1676657954636-97656bfcf483?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

img.style.height="300px";

img.removeAttribute('src');
img.setAttribute('src','https://images.unsplash.com/photo-1730292423126-077dd3750a46?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

const para = document.querySelectorAll('p')[3];

// para.setAttribute('class','one')
// para.setAttribute('class','two')

// ClassList :- add , remove, toggle

para.classList.add("one");
para.classList.add("two");

para.classList.remove('one');

para.classList.toggle('one')
para.classList.toggle('one')
para.classList.toggle('one')

const favCity = document.querySelector('.favCity');

console.log(favCity);

favCity.style.border="2px solid black";

favCity.previousElementSibling.style.color="blue"
favCity.nextElementSibling.style.color="blue";

const ul = favCity.parentElement;

console.log(ul);

ul.style.border="2px solid red"

ul.children[3].style.backgroundColor="aqua";


const li = document.createElement('li');
li.innerText="Mumbai";

 ul.appendChild(li)