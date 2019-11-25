const reviews = document.querySelector('.stars')
const stars = Array.from(document.querySelectorAll('.star'))
let isClick = false


function getRating(e){
    let currentRating = e.target.dataset.rating
    for (let i = 0; i < stars.length; i++) {
        console.log(stars[i].dataset.rating)
        if(stars[i].dataset.rating <= currentRating){
            stars[i].classList.add('active')
            isClick = true
        }else{
            stars[i].classList.remove('active')
        }
    }
}

function initStars(){
    if (!isClick){
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove('active')
        }
    }
}

reviews.addEventListener('mouseover', getRating)
reviews.addEventListener('click', getRating)
reviews.addEventListener('mouseleave', initStars)