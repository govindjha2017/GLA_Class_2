const favCity = document.querySelector('.favCity');

console.log(favCity);

favCity.style.border="2px solid black";

favCity.previousElementSibling.style.border="2px solid red";

favCity.nextElementSibling.style.border="2px solid green";

console.log(favCity.parentElement);

favCity.parentElement.style.border="2px solid blue";

const ul = favCity.parentElement;

console.log(ul.children[3]);

ul.children[3].style.backgroundColor="pink";

const x = document.createElement('li');
// x.innerHTML=`<h1>BAnglore</h1>`
x.innerText="banglore";

console.log(x);

ul.appendChild(x);