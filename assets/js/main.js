/*==================== LOADER ANIMATION ====================*/
const loader = document.querySelector('.overlay');

window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('disapear') , 200);
});

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
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach((tab) => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

const modal = (modalClick) => {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
const swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
const swiperTestimoial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints:{
    568:{
      slidesPerView: 2,
    }
  }
});

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
const scrollHeader = () => {
  const nav = document.getElementById('header')

  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
