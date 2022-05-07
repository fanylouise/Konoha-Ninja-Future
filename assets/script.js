window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
}
function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopOnScroll(){
  if (scrollY > 550) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

 
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  distance:'30px',
  durantion:700,
}).reveal(`
#home,
#home img,
#home .stats,
#assignments,
#assignments header,
#assignments .cards,
#about,
#about header,
#about .content

   `);