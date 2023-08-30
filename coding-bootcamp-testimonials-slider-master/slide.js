const prevButton = document.querySelectorAll('.prev');
const nextButton = document.querySelectorAll('.next');
const slideContainer = document.querySelector('.slide-container');
const slideOne = document.querySelector('.one');
const slideTwo = document.querySelector('.two');

prevButton.forEach((btn)=>{
    btn.addEventListener('click', changeLeft);
})
nextButton.forEach((btn)=>{
    btn.addEventListener('click', changeRight);
})
function changeLeft(){
    slideOne.classList.toggle('hide');
    slideTwo.classList.toggle('hide');
    if(slideOne.checkVisibility()){
        slideOne.style.animation = 'slideLeft 0.4s ease-out';
    }else{
        slideTwo.style.animation = 'slideLeft 0.4s ease-out';
    }

}

function changeRight(){
    slideOne.classList.toggle('hide');
    slideTwo.classList.toggle('hide');
    if(slideOne.checkVisibility()){
        slideOne.style.animation = 'slideRight 0.4s ease-out';
    }else{
        slideTwo.style.animation = 'slideRight 0.4s ease-out';
    }
}

function removeAnimation(){
    slideContainer.style.animation = '';
}

