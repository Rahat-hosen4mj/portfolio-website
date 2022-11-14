// ================= toogle style switcher ===========
const styleSwitcherToggle = document.querySelector('.style_switcher_toggler');
styleSwitcherToggle.addEventListener('click', () =>{
    document.querySelector('.style_switcher').classList.toggle('open')
    // console.log('toggle btn clicked')
})
// hide style switcher on scrool
window.addEventListener("scroll", () =>{
    if(document.querySelector('.style_switcher').classList.contains('open')){
        document.querySelector('.style_switcher').classList.remove('open')
    }
});

// theme color 
const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyle.forEach((style) =>{
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled')
        }
        else{
            style.setAttribute('disabled', "true")
        }
    })
}

// theme color light and dark
const dayNight = document.querySelector('.day_night')
dayNight.addEventListener('click', ()=>{
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
});
window.addEventListener("load", () =>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')
    }else{
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})