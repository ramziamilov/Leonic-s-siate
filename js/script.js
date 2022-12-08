let burger = document.querySelector(".burger");
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle("stop-scroll");

});

menuLinks.forEach(function(element) {

  element.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('.header__nav--active');

    document.body.remove('stop-scroll');

  });

});

let btnMore = document.querySelector(".article-more");
let articleItems = document.querySelectorAll('.articles-item');


btnMore.addEventListener('click', () => {

  btnMore.closest('.article-center').classList.add('article-center--hidden');
  articleItems.forEach(el => { el.classList.add('articles-item--vissible') });

});
