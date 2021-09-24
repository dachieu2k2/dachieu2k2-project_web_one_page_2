var turnOnLight = document.querySelector('.onlight');
const body = document.querySelector('body');
const scrollTopBtn = document.querySelector('.scrollTopBtn');
//home
turnOnLight.onclick = function () {
    // console.log(turnOnLight);

    turnOnLight.classList.toggle('onlight-on');
    turnOnLight.classList.toggle('onlight-off');

    body.classList.toggle('on--light');
}


//skill
const circleSkillNumber = document.querySelectorAll('.circle__skill-number');
const attributeDataTargetSkill = [];
const attributeSetTimeSkill = [];

for(var i =0; i < circleSkillNumber.length;i++){
    attributeDataTargetSkill[i] = circleSkillNumber[i].getAttribute('data-target');
    attributeSetTimeSkill[i] = circleSkillNumber[i].getAttribute('set-time');
    // console.log(attributeDataTargetSkill[i],attributeSetTimeSkill[i]);
}


for(var i =0; i < circleSkillNumber.length;i++){
    animationPercent(circleSkillNumber[i],attributeDataTargetSkill[i],attributeSetTimeSkill[i]);
}
function animationPercent(element, value, time){
    let dem = 0;
    let interval = setInterval(function(){
        if(dem == value){
            clearInterval(interval);
        }else {
            dem ++;
            return element.innerHTML = dem + '%';
        }
    }, time);
}

const skillItemPercent = document.querySelectorAll('.skills__item-percent');
const skillsItemLineInline = document.querySelectorAll('.skills__item-line-inline');
for(var i=0;i<skillItemPercent.length;i++){
    skillsItemLineInline[i].style.width = 0;
}
// console.log(skillItemPercent);



//mobile navbar 
var buttonMenu = document.querySelector('.button-nav__nut');
var buttonMenuClose = document.querySelector('.button-nav__nut-close');
var navList = document.querySelector('.nav__list');

buttonMenu.onclick = function(){
    navList.classList.remove('hide-on-mobile');
}
buttonMenuClose.onclick = function(){
    navList.classList.add('hide-on-mobile');
}
//scroll 
const sections = document.querySelectorAll('section');
const navItem = document.querySelectorAll('.nav__item');
const header = document.querySelector('.header');
const svg = document.querySelectorAll('svg');
let count=0;

console.log();
document.addEventListener('scroll', function(){
if (body.classList.length === 0 || window.innerWidth < 1024){

    let current = '';
    const scroll_postition = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scroll_postition >= (sectionTop - sectionHeight / 5)){
            current = section.getAttribute('id');
        }
    
    })
    navItem.forEach( li =>{
        li.classList.remove('active');
        if(li.querySelector('a').getAttribute('href') == "#" + current){
            li.classList.add('active');
        }
        
        // console.log(key);
    } )
    //button 
    if(scroll_postition == 0){
        turnOnLight.style = "visibility:visible;"
        scrollTopBtn.style = 'display:none;';
    }else{
        turnOnLight.style = "visibility:hidden;"
        scrollTopBtn.style = 'display:flex;'
    }
    //navbar
    if(scroll_postition >= (sections[1].offsetTop - sections[1].clientHeight / 5)){
        header.style.backgroundColor = "var(--black-color)"
    }else {
        header.style.backgroundColor = "transparent";
    }
    //about
    if(scroll_postition >= (sections[1].offsetTop - sections[1].clientHeight / 5)){
        document.querySelector('.about__img').style = ` animation: hienra cubic-bezier(0.4, 0, 1, 1) 1s forwards;`;
        document.querySelector('.about__content').style = ` animation: 1s hienra cubic-bezier(0.4, 0, 1, 1) 0.5s forwards;`;
        
    }
    //education
    if(scroll_postition >= (sections[2].offsetTop - sections[2].clientHeight / 5)){
        var educationElements = document.querySelectorAll('.education__item');
        educationElements.forEach((e,key) =>{
            e.style = `animation: 1s bottom-to-top linear ${key * 0.5}s forwards;`
        } )
    }


    //skills
    if(scroll_postition >= (sections[3].offsetTop - sections[3].clientHeight / 5)){
        for(var i=0;i<svg.length;i++){
            if(count<4){
            svg[i].querySelector('circle').classList.add(`circle-${i+1}`);
            animationPercent(circleSkillNumber[i],attributeDataTargetSkill[i],attributeSetTimeSkill[i]);
            }
            count++;
        }
        const css = window.document.styleSheets[4];
for(var i=0;i<skillItemPercent.length;i++){
    if(count<5){
        animationPercent(skillItemPercent[i],skillItemPercent[i].getAttribute('data-target'),skillItemPercent[i].getAttribute('set-time'));
    css.insertRule(`
@keyframes right-to-left${i} {
  100% { width: ${skillItemPercent[i].innerHTML}; }
}`);
    skillsItemLineInline[i].style.animation = ` right-to-left${i} 2s forwards`;
}
        
    }
    }
    
    // console.log(current,current2);
    //contact
    if(scroll_postition >= (sections[4].offsetTop - sections[4].clientHeight / 5)){}
    
}

})
    
// console.log(svg);
console.warn('CẢnh báo cực mạnh');
console.error('Operation completed, but that doesn’t mean it’s error free.');
console.error('Security Alert – Moving cursor is not as safe as you thought.');

//form
valid('.form.form-name');
valid('.form.form-email');
valid('.form.form-subject');
valid('.form-textarea');

var getDataClick = document.querySelector('.btn.btn-fix');
getDataClick.onclick = function(){
    getData('input','.form-textarea');
}