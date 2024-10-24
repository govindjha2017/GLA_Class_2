const head = document.getElementById("heading")

head.style.color='red'
head.style.border= '3px solid black'


console.log(head);

const favCity = document.getElementsByClassName('favCity');

for(let city of favCity){
    city.style.border="2px solid black"
}

console.log(favCity)

const para = document.getElementsByTagName('p');

console.log(para)

const x = document.querySelector('#heading')

console.log(x);
x.style.border ="";