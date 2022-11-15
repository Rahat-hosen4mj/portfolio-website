// ================ typing animation =================
var typed = new Typed(".typing",{
    strings:["","Front-End Developer", "Back-End Developer", "MERN-Stack Developer"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
});
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
        // console.log(this)
        for(let j = 0; j<totalNav; j++){
            navList[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active');
        showSection(this)
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
