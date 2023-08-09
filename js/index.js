var swiper = new Swiper(".mainSwiper", {
    slidesPerView: '1',
    effect: "fade",
    loop: true,
    autoplay: { 
        delay : 5000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".garden-slide", {
    slidesPerView: '1',
    spaceBetween: 50,
    loop: true,
    autoplay: { 
        delay : 3000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".experSwiper", {
    slidesPerView: '3',
    spaceBetween: 50,
});




function notice(){
    const noticeTab = document.querySelectorAll('.notice-tab > li'),
    noticeConTab = document.querySelectorAll('.notice-con-tab > li');

    let num = 0;

    noticeTab[num].classList.add('on');
    noticeConTab[num].classList.add('on');
    
    noticeTab.forEach(function(list,k){
        list.onclick = function(){
            noticeTab[num].classList.remove('on');
            this.classList.add('on');

            noticeConTab[num].classList.remove('on');
            noticeConTab[k].classList.add('on');
            num = k;
        }
    })
}



function course(){
    const couresTab = document.querySelectorAll('.course-tab > li'),
    couresConTab = document.querySelectorAll('.course-con-tab > li');

    let num = 0;

    couresTab[num].classList.add('on');
    couresConTab[num].classList.add('on');
    
    couresTab.forEach(function(list,k){
        list.onclick = function(){
            couresTab[num].classList.remove('on');
            this.classList.add('on');

            couresConTab[num].classList.remove('on');
            couresConTab[k].classList.add('on');
            num = k;
        }
    })
}

notice();
course();





