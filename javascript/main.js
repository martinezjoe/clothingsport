// Cambiar el color del backgroud de la barra de navegacion

const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Cuando la vista supere 50 vh, entonces se cambia el color del background de la barra de nav.
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
};


window.addEventListener('scroll', scrollHeader);


// ----------------------------------------------------------

// Swiper en los prodcutos */

let swiperProducts = new Swiper(".products__container", {

    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
  });


// --------------------------------------------------------------------

// Cambiar el color del link del nav correspondiente a la seccion que ve el usario 

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	});
};

window.addEventListener('scroll', scrollActive);


// ----------------------------------------------------------

// Mostrar el Scroll Up

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
    // Cuando el scroll sea mayor a 350 vh se mostrara el Scroll Up
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


// -------------------------------------------------

// Cambiar tema oscuro / claro 

// Tema oscuro 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previamente se selecciona el tipo 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtenemos el tema actual
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Validamos si el usario ha usado un tema previamente
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
};

// Activamos y desactivamos el tema, presionando el boton

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


// ------------------------------------------------------


// Animacion Scroll Reveal

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: true
});

sr.reveal(`.home__data, .products__container`);
sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'});
sr.reveal(`.new__card, .brand__img`, {interval: 100});
sr.reveal(`.collection__explore:nth-child(1)`, {origin:  'right'});
sr.reveal(`.collection__explore:nth-child(2)`, {origin:  'left'});
sr.reveal(`.footer`, {origin:  'bottom'});
