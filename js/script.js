// ================ typing animation =================
var typed = new Typed(".typing",{
    strings:["","Front-End Developer", "Back-End Developer", "MERN-Stack Developer"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
});

// ================ aside nav color =================
// const nav = document.querySelector('.nav')
// const navList = document.querySelectorAll('li')
// const totalNav = navList.length;
// for(let i=0; i<totalNav; i++){
//     // console.log(navList[i])
//     const a = navList[i].querySelector('a');
//     a.addEventListener('click', function(){
//         // console.log(this)
//         for(let j = 0; j<totalNav; j++){
//             navList[j].querySelector('a').classList.remove('active')
//         }
//         this.classList.add('active')
//         showSection(this)
//     })
// }
// function showSection(element){
//     // console.log(element.getAttribute('href').split('#')[1])
//     for(let i=1; i<totalSection; i++){
//         allSection[i].classList.remove('active');
//     }
//     const target = element.getAttribute('href').split('#')[1];
//     document.querySelector('#' + target).classList.add('active')
// }
// ================ aside nav color =================
const nav = document.querySelector('.nav')
const navList = document.querySelectorAll('li'),
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
const totalNav = navList.length;
for(let i=0; i<totalNav; i++){
    // console.log(navList[i])
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){
        for(let i=1; i<totalSection; i++){
            allSection[i].classList.remove('back-section');
        }
        // console.log(this)
        for(let j = 0; j<totalNav; j++){
            if(navList[j].querySelector('a').classList.contains('active')){
                // console.log("back-section" + navList[j].querySelector('a'))
                allSection[j].classList.add('back-section')
            }
            navList[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active');
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn()
        }
    })
}
function showSection(element){
    // console.log(element.getAttribute('href').split('#')[1])
    for(let i=1; i<totalSection; i++){
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active')
}
function updateNav(element){
    // console.log( element.getAttribute('href').split('#')[1])
    for(let i=0; i<totalNav; i++){
        navList[i].querySelector('a').classList.remove("active");
        const target = element.getAttribute('href').split("#")[1]
    }
}
document.querySelector('.hire_me').addEventListener('click', function(){
    showSection(this)
    updateNav(this)
//    console.log(this)
})
const navToggleBtn = document.querySelector(".nav_toggler"),
   aside = document.querySelector(".aside");
   navToggleBtn.addEventListener('click', () =>{
    asideSectionTogglerBtn();
   })
   function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open")
    }
   }
