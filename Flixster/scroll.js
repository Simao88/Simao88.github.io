const menu = document.querySelector('.menu');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    // O usuário rolou para cima
    menu.classList.remove('visible');
  } else {
    // O usuário rolou para baixo
    menu.classList.add('visible');
  }
  prevScrollPos = currentScrollPos;
});
