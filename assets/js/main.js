/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      showMenu = () => navMenu.classList.add('show-menu'),
      hideMenu = () => navMenu.classList.remove('show-menu')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', showMenu)
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', hideMenu)
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

// quando clicamos em algum link do menu, escondemos o mesmo
navLink.forEach(link => link.addEventListener('click', hideMenu))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

const toggleSkills = (element) => {
  let itemClass = element.parentNode.className;

  for(i = 0; i < skillsContent.length; i += 1) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass  === 'skills__content skills__close') {
    element.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener('click', () => toggleSkills(element))
})

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 