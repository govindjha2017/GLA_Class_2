const para = document.querySelectorAll('p')[1];

// SetAttribute getAttribute removeAttribute

para.setAttribute('class','spclPara')

const img = document.querySelector('img');

img.setAttribute('src','https://plus.unsplash.com/premium_photo-1731291212442-810b296619f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

img.style.height="200px";

console.log(img.getAttribute('src'))

img.removeAttribute('src')

const paragraph = document.querySelector('p');

// paragraph.setAttribute('class','one two')

// classlist :- add remove toggle;

paragraph.classList.add('one')
paragraph.classList.add('two');

paragraph.classList.remove('two');

paragraph.classList.toggle('two');
paragraph.classList.toggle('two');

paragraph.classList.toggle('two');