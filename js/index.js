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

// header
let header = document.querySelector("header");
let headerHeight = header.offsetHeight;
let mainSliderHeight = document.querySelector(".main-slider-wrap").offsetHeight;
let topBtn = document.querySelector('.top-btn');
let reserveWrap = document.querySelector(".reserve-wrap");

// 스크롤에 따라서 보여주기 숨기기
document.addEventListener("scroll", ()=>{
    let sPos = document.documentElement.scrollTop;

    if(sPos < headerHeight){
        header.classList.remove("active");
    }else{
        header.classList.add("active");
    }

    if(sPos < mainSliderHeight){
        topBtn.style.display = "none";
        reserveWrap.style.display = "none";
    }else{
        topBtn.style.display = "block";
        reserveWrap.style.display = "block";
    }
});

// 위로가기 버튼
topBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    document.documentElement.scrollTo({top:0, left:0, behavior:'smooth'});
});

// 서브메뉴
let mainMenuLi = document.querySelectorAll(".main-menu>li");
let subMenuWell = document.querySelector(".submenu-wellness");
let subMenuWrap = subMenuWell.querySelector(".submenu-wrap");

mainMenuLi.forEach((li, id)=>{
    let subMenu = li.querySelector(".sub-menu");

    li.addEventListener("mouseover", ()=>{
        let subHeight = subMenu.scrollHeight;
        subMenu.style.height = subHeight + "px";
    });

    li.addEventListener("mouseout", ()=>{
        subMenu.style.height = 0;
        subMenuWrap.style.height = 0;
    })
});

subMenuWell.addEventListener("mouseover", ()=>{
    let subWrapHeight = subMenuWrap.scrollHeight;
    subMenuWrap.style.height = subWrapHeight + "px";
});

