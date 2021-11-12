const button = document.querySelector('button');
const body = document.querySelector('body');
const colors= ['red','yellow','blue','green','pink','black'];

body.style.backgroundColor='violet';

button.addEventListener('click',changeColor);
function changeColor(){
const change = parseInt(Math.random()*colors.length);

body.style.backgroundColor=colors[change];
}