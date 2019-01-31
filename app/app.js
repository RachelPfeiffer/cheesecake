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


// carousel la-de-da
// every 3 seconds, toggle
setInterval(toggle, 5000);

// if you click the arrows, toggle.
const arrow = document.querySelector('.arrows');
arrow.addEventListener('click', toggle());

function toggle() {

  let banners = document.querySelectorAll('.banner');
  for (banner of banners) {
    banner.classList.toggle('hide');
    setTimeout(banner.classList.toggle('shrink'), 700);
  }
}
