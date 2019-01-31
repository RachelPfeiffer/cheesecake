const burger = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.burger-menu');
burger.addEventListener('click', function () {
  burgerMenu.classList.toggle('invisible');
  console.log('click');
})

const ellipsis = document.querySelector('.ellipsis');
const ellipsisMenu = document.querySelector('.ellipsis-menu');
ellipsis.addEventListener('click', function () {
  ellipsisMenu.classList.toggle('showing');
})
