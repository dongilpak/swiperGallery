const swiper = new Swiper('.wrap', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 100,
    slidesPerView: 'auto',
    grabCursor: true,
    centeredSlides: true,
    speed: 1000,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
});
