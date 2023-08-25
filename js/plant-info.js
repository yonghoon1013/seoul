const elS2 = document.querySelectorAll('.text p');
const elS2Content = document.querySelectorAll('.nnn');

let num = 0;
elS2[num].classList.add('on');
elS2Content[num].classList.add('on');

elS2.forEach(function (ele, key) {
    ele.onclick = function () {
        elS2[num].classList.remove('on');
        this.classList.add('on');

        elS2Content[num].classList.remove('on');
        elS2Content[key].classList.add('on');

        num = key;
    }
});



const elallbutn = document.querySelector('.number');
const elplant = document.querySelector('.all-plant');

let fullpg = 0;

fetch('./json/flower.json')
    .then(res => { return res.json() })
    .then(data => {

        let now = 1;
        let imgle = 8;


        let max_full = data.items.length;
        let max = Math.ceil(max_full / imgle)


        // 이미지 뿌리기
        const imgFn = function () {

            data.items.forEach((v, k) => {

                if ((now - 1) * imgle <= k && now * imgle > k) {


                    elplant.innerHTML += `
                    <li class="sspace">
                    <a href="./Pdetail.html">
                        <img src="${v.img}">
                        <div class="ab">
                            <p>${v.name}</p>
                            <p>${v.engName}</p>
                        </div>
                    </a>
                    </li>
                    `
                } else { }


            });
        }

        //클릭시 유도
        const sspace = function () {

            const elsspace = document.querySelectorAll('.sspace');


            elsspace.forEach((v4, k4) => {

                v4.onclick = function (e) {

                    v4.querySelectorAll('.ad >p')
                    console.log(v4.querySelector('.ab >p').innerText);
                    const text = v4.querySelector('.ab >p').innerText;

                    for (let k5 in data.items) {

                        if (text == data.items[k5].name) {
                            sessionStorage.setItem("click", k5);
                            location.href = 'Pdetail.html';
                            break;
                        }
                        else {
                            e.preventDefault()
                        }

                    }
                }
            })
        }




        // 페이지네이션
        const pgen = function () {

            max = Math.ceil(max_full / imgle)
            elallbutn.innerHTML = "";
            for (let i = 1; i <= max; i++) {
                elallbutn.innerHTML += `<span>${i}</span>`
            }

            const elbutn = document.querySelectorAll('.number >span')


            elbutn.forEach((v2, k2) => {
                v2.onclick = function () {
                    console.log(v2);
                    elplant.innerHTML = ""
                    now = v2.innerText
                    imgFn()
                    sspace()

                }
            })

            fullpg = Math.ceil(elbutn.length / 5 - 1);
            console.log(fullpg);
        }


        //검색
        const elsearchbt = document.querySelector('.inout > #search_but')
        const elsearch = document.querySelector('.inout > #search')


        elsearchbt.onclick = (v, k) => {
            console.log(elsearch.value);
            elplant.innerHTML = ""

            data.items.forEach((v7, k7) => {

                if (data.items[k7].name.includes(elsearch.value)) {

                    elplant.innerHTML += `
                        <li class="sspace">
                        <a href="./Pdetail.html">
                            <img src="${v7.img}">
                            <div class="ab">
                                <p>${v7.name}</p>
                                <p>${v7.engName}</p>
                            </div>
                        </a>
                    </li>
                        `
                } else { }

            })
            const elsspace = document.querySelectorAll('.sspace');
            max_full = elsspace.length;
            pgen()
            sspace();

        }


        pgen();
        imgFn();
        sspace();


    })


// 다음버튼
const elnext = document.querySelectorAll('.next > button')

let nextnum = 0;
elnext.forEach((v3, k3) => {

    v3.onclick = function () {

        if (v3.dataset.name == "next") {
            if (nextnum < fullpg) {
                nextnum++;
            } else {
            }
        } else {
            if (nextnum == 0) {

            } else {
                nextnum--;
            }
        }

        elallbutn.style.transform = `translateX(${nextnum * -150}px)`;
        console.log(elallbutn);


    }
})



