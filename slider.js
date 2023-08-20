document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      autoplay: {
        delay: 100, 
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });
    });
  