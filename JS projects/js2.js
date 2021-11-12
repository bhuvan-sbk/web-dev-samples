const body = document.querySelector('body');
const button = document.querySelector('button');
const value = document.querySelector('hex-value');

const values = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','f'];
 
button.addEventListener('click',change); 
       
function change(){
    let hex='#';
    for (let i=0; i<1; i++)
    {
    const index = Math.floor(Math.random()*values.length);
hex =hex + values[index];   
    }
}
          value.textContent= hex;
        body.style.backgroundColor=hex;
    
