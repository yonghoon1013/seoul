function mainSlide(){
    const mainImgBox = document.querySelector('.mainSwiper > .swiper-wrapper');

    fetch('./json/flower.json')
    .then(res => { return res.json() }) 
    .then(data => {
        data.items.forEach(function(v,k){
            if(v.plantOfMonth == "Y"){
                mainImgBox.innerHTML += `
                <li class="swiper-slide">
                <a href="./Pdetail.html">
                    <img src="${v.img}">
                    <div class="plant-month">
                        <div class="text-box">
                            <span class="title">
                                이달의 식물
                            </span>
                            <span class="name">
                            ${v.name}
                            </span>
                            <span class="area">
                                주제정원 숲정원, 열린숲에 위치
                            </span>
                        </div>
                    </div>
                </a>
            </li>
        `
            }
        })

        const ff = document.querySelectorAll('.mainSwiper > .swiper-wrapper > .swiper-slide > a');
        ff.forEach(function(v,k){
            v.onclick = function(e){
                const txt = v.querySelector('.name').innerText;
                for(let k2 in data.items){
                    if(txt == data.items[k2].name){
                        sessionStorage.setItem("click", k2);
                        break;
                    }else{
                        e.preventDefault();
                    }

                }
            }
            
        })

    })
}

mainSlide();


setTimeout(function(){
var swiper = new Swiper(".mainSwiper", {
    slidesPerView: '1',
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

},500)

var swiper2 = new Swiper(".garden-slide", {
    slidesPerView: "2",
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {

        1024: {
            slidesPerView: '1',
            spaceBetween: 50,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        },
    }});

setTimeout(function(){

    var swiper3 = new Swiper(".experSwiper", {
        slidesPerView: '2',
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            1024: {
            
                slidesPerView: '3',
                spaceBetween: 50,
            },
        }
    });
},500)



function notice() {
    const noticeTab = document.querySelectorAll('.notice-tab > li'),
        noticeConTab = document.querySelectorAll('.notice-con-tab > li');

    let num = 0;

    noticeTab[num].classList.add('on');
    noticeConTab[num].classList.add('on');

    noticeTab.forEach(function (list, k) {
        list.onclick = function () {
            noticeTab[num].classList.remove('on');
            this.classList.add('on');

            noticeConTab[num].classList.remove('on');
            noticeConTab[k].classList.add('on');
            num = k;
        }
    })
}



function course() {
    const couresTab = document.querySelectorAll('.course-tab > li'),
        couresConTab = document.querySelectorAll('.course-con-tab > li');

    let num = 0;

    couresTab[num].classList.add('on');
    couresConTab[num].classList.add('on');

    couresTab.forEach(function (list, k) {
        list.onclick = function () {
            couresTab[num].classList.remove('on');
            this.classList.add('on');

            couresConTab[num].classList.remove('on');
            couresConTab[k].classList.add('on');
            num = k;
        }
    })
}


function useInfo() {
    const useInfoTab = document.querySelectorAll('.use-info-tab > li'),
        useConTab = document.querySelectorAll('.use-con-tab > li');

    let num = 0;

    useInfoTab[num].classList.add('on');
    useConTab[num].classList.add('on');

    useInfoTab.forEach(function (list, k) {
        list.onclick = function () {
            useInfoTab[num].classList.remove('on');
            this.classList.add('on');

            useConTab[num].classList.remove('on');
            useConTab[k].classList.add('on');
            num = k;
        }
    })
}

if (matchMedia("screen and (max-width: 1023px)").matches) {
    useInfo();
}




notice();
course();



fetch('./json/program.json')
    .then(res => { return res.json() })
    .then(data => {

        let num = 0;
        const mainPg = []

        for (num; num < 6; num++) {
            mainPg.push(data.items[num])
        }
        mainPg.forEach(function (obj, k) {
            const mainPgSlide = document.querySelector('.experSwiper > .swiper-wrapper');

            mainPgSlide.innerHTML += `
        <li class="swiper-slide">
        <a href="./experience.html">
            <img src="${obj.img}">
            <div class="experience-info">
                <p class="title">
                    ${obj.name}
                </p>
                <P class="time">
                    <span>${obj.period}</span>
                    <span>더보기</span>
                </P>
                <div class="situation">
                    <div class="area">
                        <span>${obj.area}</span>
                    </div>
                    <div class="target">
                        <span>${obj.target}</span>
                    </div>
                    <div>
                        <span>접수중</span>
                    </div>
                </div>
            </div>
        </a>
    </li>
        `
        })

        const itemClick = document.querySelectorAll('.experSwiper  li > a');

        itemClick.forEach(function (v, k) {
            v.onclick = function () {
                sessionStorage.setItem("click", k)
            }
        })

    })





