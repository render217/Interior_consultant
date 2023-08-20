const addEventOnElements = (elements,eventType,callback)=>{
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType,callback);
    }
}

const navbar = document.querySelector('[data-navbar]')
const navTogglers = document.querySelectorAll('[data-nav-toggler]')


const navToggle = function (){
    navbar.classList.toggle('active')
    
}

addEventOnElements(navTogglers,'click',navToggle)