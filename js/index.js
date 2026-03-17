//main-slider swiper
let mainSliderSwiper = new Swiper(".main-slider-wrap", {
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 1200,
    effect: "fade",
});

//special-offers swiper
let specialOfferSwiper = new Swiper(".special-offer-list-wrap", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
        nextEl: ".specialof-button-next",
        prevEl: ".specialof-button-prev",
    },
});