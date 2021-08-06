let controller = new ScrollMagic.Controller(); 
let timeline = new TimelineMax(); 

//GSAP library commands to move parralax item 
timeline 
.to('.man', 3, {y:-200}, '-=3')
.fromTo('.background', {y: -100}, {y: 0, duration: 3}, '-=3')
.to('.content', 3, {top: '0%'}, '-=3')
.fromTo('.card', 3, {opacity: '0'}, {opacity: '1'}, '-=3')
.from('.signupForm', {opacity: 0, duration: 2, x: -100})
.from('.sign-up-now', {opacity: 0, duration: 1, x: 100});


let scene = new ScrollMagic.Scene({ 
    triggerElement: 'section', 
    duration: '100%', 
    triggerHook: 0
})

.setTween(timeline)
.setPin('section')
.addTo(controller)

//animate chevrons 
let chevrons = document.querySelectorAll('.fa-chevron-down'); 

function changeColor() { 
    setTimeout(function() { 
        chevrons[0].style.color = "#194137"
        chevrons[0].style.fontSize = "3.5rem"
        chevrons[1].style.color = "white"
        chevrons[2].style.color = "white"
        chevrons[2].style.fontSize = "3rem"
    }, 1000); 
    setTimeout(function() { 
        chevrons[0].style.color = "white"
        chevrons[0].style.fontSize = "3rem"
        chevrons[1].style.color = "rgb(79, 192, 145)"
        chevrons[1].style.fontSize = "3.5rem"
        chevrons[2].style.color = "white"
    }, 2000); 
    setTimeout(function() { 
        chevrons[0].style.color = "white"
        chevrons[1].style.color = "white"
        chevrons[1].style.fontSize = "3rem"
        chevrons[2].style.color = "#194137"
        chevrons[2].style.fontSize = "3.5rem"
    }, 3000);    
}

changeColor();
setInterval(changeColor, 3000);

//form validation 
const input = document.querySelector('#input');
const form = document.querySelector('#form'); 
const error = document.querySelector('#error'); 

form.addEventListener('submit', (e) => { 
    let messages = []
    if(input.value === '' || input.value == null) { 
        messages.push('Input is required'); 
    }
    if(!isNaN(input.value)) { 
        messages.push("You can't use numbers")
    }
    if(messages.length > 0) { 
        e.preventDefault(); 
        error.innerText = messages.join(', ');
    } 
})
