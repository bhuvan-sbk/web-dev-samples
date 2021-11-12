 const form  = document.querySelector('.message-form');
form.addEventListener('sumbit', function(e){
   e.preventDefault()
    
    const message = document.querySelector('#message');
     
    const feedback  = document.querySelector('.feedback');
    const messageContent= document.querySelector('.message-content');
    
    if(message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
    feedback.classList.remove('show')
        }, 2000)
        }else{
 messageContent.textContent= message.value            message.value= ''
            
        }
    
    
}
 
)
alert(34)