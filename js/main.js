$(document).ready(function () {
   const mMenuBtn = $('.m-menu-button');
   const mMenu = $('.m-menu');
   const tab = $('.tab');

   mMenuBtn.on('click', function() {
     mMenu.toggleClass('active');
     $('body').toggleClass('no-scroll');
   }); /* чтобы не перелистывало при открывании меню */

   tab.on('click', function() {
    tab.removeClass('active'); // удаляем класс active
    $(this).toggleClass('active'); // вешаем класс active
    let activeTabContent = $(this).attr('data-target'); // помещаем атрибут data-target в переменную activeTabContent
    $('.tabs-content').removeClass('visible'); // предварительно удаляем у tabs-content класс visible
    $(activeTabContent).toggleClass('visible'); // обращаемся к переменной, чтобы повесить класс visible
   }) /* переключение вкладок актеры и создатели */

   var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4, /* количество слайдов при разрешении 992 */
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        } 
      },
    },
  });
});