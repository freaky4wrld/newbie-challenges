const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const userPassword = document.getElementById('userPassword');
const inputElements = document.querySelectorAll('input');

function checkRequired(){
    inputElements.forEach((input)=>{
        if(input.hasAttribute('required') && input.value===""){
            showRequired(input);
        }else{
            hideRequired(input)
        }
    })
}

function showRequired(input){
    input.classList.add('input-icon')
    input.nextElementSibling.innerText = 'This field can not be empty'
    input.nextElementSibling.classList.remove('hidden')
    
}
function hideRequired(input){
    input.classList.remove('input-icon')
    input.nextElementSibling.innerText = ''
    input.nextElementSibling.classList.add('hidden')
}
