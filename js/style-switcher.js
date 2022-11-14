// ================= toogle style switcher ===========
const styleSwitcherToggle = document.querySelector('.style_switcher_toggler');
styleSwitcherToggle.addEventListener('click', () =>{
    document.querySelector('.style_switcher').classList.toggle('open')
    console.log('toggle btn clicked')
})