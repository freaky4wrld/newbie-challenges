const trialForm = document.getElementById('trial-form')
trialForm.setAttribute('novalidate',"")
const inputFields = Array.from(trialForm.elements);

inputFields.forEach((inputField)=>{
    inputField.setAttribute('aria-invalid',false)

    inputField.addEventListener('blur',()=>{
        inputField.checkValidity()
    })
    inputField.addEventListener('input',()=>{
        const valid = inputField.checkValidity()
        if(valid){
            inputField.setAttribute('aria-invalid',false)
            inputField.classList.remove('input-icon')
            inputField.classList.remove('animate__animated','animate__shakeX');
            inputField.nextElementSibling.classList.add('hidden')
            inputField.nextElementSibling.innerText = ''
        }
    })
    inputField.addEventListener('invalid',()=>{
        const message = getMessage(inputField)
        inputField.setAttribute('aria-invalid',true)
        inputField.classList.add('input-icon')
        inputField.classList.add('animate__animated','animate__shakeX');
        inputField.nextElementSibling.classList.remove('hidden')
        inputField.nextElementSibling.innerText = message || inputField.validationMessage
    })
})

trialForm.addEventListener('submit',(event)=>{
    const allValid = trialForm.checkValidity();
    if(!allValid){
        event.preventDefault()
    }
})

function getMessage(inputField){
    const validity = inputField.validity
    if(validity.valueMissing) return `${inputField.getAttribute('placeholder')} cannot be empty`
    if(validity.typeMismatch) return 'Looks like this is not an email'
    if(validity.tooShort) return`${inputField.getAttribute('placeholder')} must be at least ${inputField.getAttribute('minlength')} characters`
}