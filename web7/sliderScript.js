$(".your-class").slick({
  infinity: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768, // Пороговое значение для мобильных устройств
      settings: {
        slidesToShow: 1, // Один слайд на мобильных устройствах
      },
    },
    {
      breakpoint: 1024, // Пороговое значение для планшетов и более крупных экранов
      settings: {
        slidesToShow: 3, // Три слайда на более крупных экранах
      },
    },
  ],
});
