let headerBurger = document.querySelector('.header__burger');
let headerBurgerSpans = headerBurger.querySelectorAll('span');
let headerNavList = document.querySelector('.header__nav-list');

headerBurger.addEventListener('click', function() {
  headerNavList.classList.toggle('header__nav-list--active'); // включение/выключение меню

  if (headerNavList.classList.contains('header__nav-list--active')) {
    headerBurgerSpans.forEach(function(span) {
      span.style.backgroundColor = "#ffffff"; // перекрашивает спаны для видимости (если активно меню)
    });
    headerNavList.querySelector('.nav__list-item--active').style.color = '#ffffff'; // перекрашиваем активный элемент меню
  } else {
    headerBurgerSpans.forEach(function(span) {
      span.style.backgroundColor = ""; // меняет цвет обратно на исходный после выключения меню
    });
    headerNavList.querySelector('.nav__list-item--active').style.color = ''; // возвращение исходного цвета активного элемента меню 
  }
});