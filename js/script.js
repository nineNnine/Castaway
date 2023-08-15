let headerBurger = document.querySelector('.header__burger');
let headerBurgerSpans = headerBurger.querySelectorAll('span');
let headerNavList = document.querySelector('.header__nav-list');

headerBurger.addEventListener('click', function() {
  headerNavList.classList.toggle('header__nav-list--active');

  if (headerNavList.classList.contains('header__nav-list--active')) {
    headerBurgerSpans.forEach(function(span) {
      span.style.backgroundColor = "#ffffff";
    });
    headerNavList.querySelector('.nav__list-item--active').style.color = '#ffffff';
  } else {
    headerBurgerSpans.forEach(function(span) {
      span.style.backgroundColor = "";
    });
    headerNavList.querySelector('.nav__list-item--active').style.color = '';
  }
}); 

let hostImages = document.getElementsByClassName("host__link-img");

function replaceImage() {
  for (let i = 0; i < hostImages.length; i++) {
    let hostImage = hostImages[i];
    if (window.innerWidth >= 1260) {
      hostImage.src = "images/host-link.jpg";
    } else {
      hostImage.src = "images/host-link-v_reversed.jpg";
    }
  }
}

replaceImage();
window.addEventListener("resize", replaceImage);