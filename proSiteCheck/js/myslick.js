new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    keyboard: {
        enabled: true
    },
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: 1,
    initialSlide: 0,
    loop: true,
    speed: 800,
    autoHeight: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    effect: 'coverflow',
    coverflowEffect: {
        stretch: 50,
        rotate: 20,
        slideShadows: true
    }
});