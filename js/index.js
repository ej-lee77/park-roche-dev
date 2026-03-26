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
let reserveBtn = document.querySelector(".reserve-btn");

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
        reserveBtn.style.display = "none";
    }else{
        topBtn.style.display = "block";
        reserveBtn.style.display = "block";
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

// 언어변경
let langWrap = document.querySelector(".lang-wrap");
let langList = langWrap.querySelector(".lang-list");

langWrap.addEventListener("click", (e)=>{
    e.preventDefault();
    
    let langheight = langList.scrollHeight;
    langList.style.height = langheight + "px";
});

langList.addEventListener("mouseleave", ()=>{
    langList.style.height = 0;
});

let langListA = langList.querySelectorAll("li a");

langListA.forEach(a =>{
    a.addEventListener("click", ()=>{
        let langWrapA = document.querySelector(".lang-wrap>a");
        console.log(a.value);
        langWrapA.textContent = a.textContent;
    });
});

document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth'
	});
	calendar.render();
});

// calendar
// 달력 시작날을 오늘로 하기
const date = new Date();
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + (date.getDate())).slice(-2);
const today = `${year}-${month}-${day}`;

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    initialDate: today,
    dayCellContent: function(arg) {
      return arg.date.getDate();
    },
    // customButtons: {
    //   today: {
    //     text: "오늘",
    //     click: function () {
    //       calendar.today();
    //     },
    //   },
    // },
    locale: "ko",
    selectable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    // events: [
    //   {
    //     title: 'All Day Event',
    //     start: '2023-01-01'
    //   },
    //   {
    //     title: 'Long Event',
    //     start: '2023-01-07',
    //     end: '2023-01-10'
    //   },
    //   {
    //     groupId: 999,
    //     title: 'Repeating Event',
    //     start: '2023-01-09T16:00:00'
    //   },
    //   {
    //     groupId: 999,
    //     title: 'Repeating Event',
    //     start: '2023-01-16T16:00:00'
    //   },
    //   {
    //     title: 'Conference',
    //     start: '2023-01-11',
    //     end: '2023-01-13'
    //   },
    //   {
    //     title: 'Meeting',
    //     start: '2023-01-12T10:30:00',
    //     end: '2023-01-12T12:30:00'
    //   },
    //   {
    //     title: 'Lunch',
    //     start: '2023-01-12T12:00:00'
    //   },
    //   {
    //     title: 'Meeting',
    //     start: '2023-01-12T14:30:00'
    //   },
    //   {
    //     title: 'Happy Hour',
    //     start: '2023-01-12T17:30:00'
    //   },
    //   {
    //     title: 'Dinner',
    //     start: '2023-01-12T20:00:00'
    //   },
    //   {
    //     title: 'Birthday Party',
    //     start: '2023-01-13T07:00:00'
    //   },
    //   {
    //     title: 'Click for Google',
    //     url: 'http://google.com/',
    //     start: '2023-01-28'
    //   }
    // ]
  });

  calendar.render();
});

// 에약팝업띄우기
let reserveWrap = document.querySelector(".reserve-wrap");

reserveBtn.addEventListener("click", ()=>{
  reserveWrap.classList.add("active");
});

let reserveCloseBtn = document.querySelector(".reserve-wrap .close-btn");

reserveCloseBtn.addEventListener("click", ()=>{
  reserveWrap.classList.remove("active");
});
