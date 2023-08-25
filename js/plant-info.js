const elS2 = document.querySelectorAll('.text p');
const elS2Content = document.querySelectorAll('.nnn');


let num = 0;
elS2[num].classList.add('on');
elS2Content[num].classList.add('on');



const elallbutn = document.querySelector('.number');
const elplant = document.querySelector('.all-plant');

let fullpg = 0;

fetch('./json/flower.json')
    .then(res => { return res.json() })
    .then(data => {
        elS2.forEach(function (ele, key) {
            ele.onclick = function () {
                elS2Content[key].innerHTML = ""
                now = 1;
                elS2[num].classList.remove('on');
                this.classList.add('on');

                elS2Content[num].classList.remove('on');
                elS2Content[key].classList.add('on');


                if (key == 1) {

                    let monthdata = []

                    data.items.forEach((v7, k7) => {
                        let month = new Date().getMonth() + 1;

                        if (month >= (data.items[k7].bloomingSeason.substr(0, 1)) &&
                            month <= (data.items[k7].bloomingSeason.substr((data.items[k7].bloomingSeason.indexOf("월") - 1), 1))) {

                            monthdata.push(data.items[k7])
                        } else { }


                    });
                    monthdata.forEach((v8, k8) => {
                        if ((now - 1) * imgle <= k8 && now * imgle > k8) {
                            console.log(k8);
                            elS2Content[key].innerHTML += `
                                    <li class="sspace">
                                    <a href="./Pdetail.html">
                                        <img src="${v8.img}">
                                        <div class="ab">
                                            <p>${v8.name}</p>
                                            <p>${v8.engName}</p>
                                        </div>
                                    </a>
                                    </li>
                                    `
                        } else {
                        }

                    })

                    max_full = monthdata.length;
                    pgen(max_full)
                    sspace();
                } else {
                    max_full = data.items.length;
                    pgen(max_full);
                    imgFn(key);
                    sspace();
                }

                num = key;

            }
        });


        let now = 1;
        let imgle = 8;


        let max_full = data.items.length;
        let max = Math.ceil(max_full / imgle)


        // 이미지 뿌리기
        const imgFn = function (key) {
            elS2Content[key].innerHTML = '';


            data.items.forEach((v, k) => {

                if ((now - 1) * imgle <= k && now * imgle > k) {
                    console.log(key);

                    elS2Content[key].innerHTML += `
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
        const pgen = function (max_full) {

            max = Math.ceil(max_full / imgle)
            elallbutn.innerHTML = "";
            for (let i = 1; i <= max; i++) {
                elallbutn.innerHTML += `<span>${i}</span>`
            }

            const elbutn = document.querySelectorAll('.number >span')
            
            let rmvv2 = 0;
            elbutn[rmvv2].classList.add("on")
            
            elbutn.forEach((v2, k2) => {
                v2.onclick = function () {
                    elbutn[rmvv2].classList.remove("on")
                    v2.classList.add("on")
                    console.log(v2);
                    now = v2.innerText
                    
                    imgFn(num)
                    sspace()
                    rmvv2=k2;
                }
            })

            fullpg = Math.ceil(elbutn.length / 5 - 1);
            console.log(fullpg);
            
        }


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


        //검색
        const elsearchbt = document.querySelector('.inout > #search_but')
        const elsearch = document.querySelector('.inout > #search')

        elsearch.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                elS2[num].classList.remove('on');
                elS2Content[num].classList.remove('on');
                num = 0;
                elS2[num].classList.add('on');
                elS2Content[num].classList.add('on');

                console.log(elsearch.value);
                elS2Content[num].innerHTML = ""
                let searchdata = [];

                data.items.forEach((v7, k7) => {

                    if (data.items[k7].name.includes(elsearch.value)) {

                        searchdata.push(data.items[k7])
                    } else { }

                })
                searchdata.forEach((v9, k9) => {
                    if ((now - 1) * imgle <= k9 && now * imgle > k9) {
                        elS2Content[num].innerHTML += `
                                <li class="sspace">
                                <a href="./Pdetail.html">
                                    <img src="${v9.img}">
                                    <div class="ab">
                                        <p>${v9.name}</p>
                                        <p>${v9.engName}</p>
                                    </div>
                                </a>
                                </li>
                                `
                    }

                })
                elsearch.value = ""
                const elsspace = elS2Content[num].querySelectorAll('.sspace');
                elsspace.length == 0 ? elS2Content[num].innerHTML += `<li>검색 결과가 없습니다.</li>` : ""

                max_full = searchdata.length;
                pgen(max_full)
                sspace();

            }
        })

        elsearchbt.onclick = (v, k) => {

            elS2[num].classList.remove('on');
            elS2Content[num].classList.remove('on');
            num = 0;
            elS2[num].classList.add('on');
            elS2Content[num].classList.add('on');
            console.log(elsearch.value);
            elS2Content[num].innerHTML = ""
            let searchdata = [];

            data.items.forEach((v7, k7) => {

                if (data.items[k7].name.includes(elsearch.value)) {

                    searchdata.push(data.items[k7])
                } else { }

            })
            searchdata.forEach((v9, k9) => {
                if ((now - 1) * imgle <= k9 && now * imgle > k9) {
                    elS2Content[num].innerHTML += `
                            <li class="sspace">
                            <a href="./Pdetail.html">
                                <img src="${v9.img}">
                                <div class="ab">
                                    <p>${v9.name}</p>
                                    <p>${v9.engName}</p>
                                </div>
                            </a>
                            </li>
                            `
                } else {
                }
            })
            elsearch.value = ""
            const elsspace = elS2Content[num].querySelectorAll('.sspace');
            elsspace.length == 0 ? elS2Content[num].innerHTML += `<li>검색 결과가 없습니다.</li>` : ""

            max_full = searchdata.length;
            pgen(max_full)
            sspace();

        }


        pgen(max_full);
        imgFn(0);
        sspace();

    })






