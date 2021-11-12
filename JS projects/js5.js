const button = document.querySelector(".add-count");
 
const number = document.querySelector(".number");
    var count = 0;
const lowercount =
document.querySelector(".lower-count");
button.addEventListener('click',addcounter)

function addcounter(){
    count += 1;
    number.textContent=count;
}

lowercount.addEventListener('click', lowercountfun)
function lowercountfun(){
     count = count - 1;
     number.textContent= count;
}
