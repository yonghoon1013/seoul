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


fetch('./json/seed-data.json')
    .then(res => { return res.json() })
    .then(data => {
        data.items.forEach(function (obj, k) {
            const allSeed = document.querySelector('.all-seed'),
                springSeed = document.querySelector('.spring-seed'),
                summerSeed = document.querySelector('.summer-seed'),
                autumnSeed = document.querySelector('.autumn-seed'),
                winterSeed = document.querySelector('.winter-seed');

            if (obj.rental == "N") {
                var seedRental = "불가능"

            } else {
                var seedRental = "대출가능"
            }


            allSeed.innerHTML += `
                <li class="sspace">
                <div class="haha ${seedRental == "불가능" ? 'on' : ""}">
                <p>${seedRental}</p>
            </div>
                    <a href="./Sdetail.html">
                        <img src="${obj.mainImg}">
                        <div class="ab">

                            <p>${obj.name}</p>
                            <div class="center">
                                <span class = "${obj.level == "상" ? "on" : ""}">상</span>
                                <span class = "${obj.level == "중" ? "on" : ""}">중</span>
                                <span class = "${obj.level == "하" ? "on" : ""}">하</span>
                            </div>
                        </div>
                    </a>
                </li>
            `

            let season = parseInt(obj.sowingSeason.substr(0, 2));


            if (season >= 3 && season <= 5) {
                var seedOfMonth = "spring";
            } else if (season >= 6 && season <= 8) {
                var seedOfMonth = "summer";
            } else if (season >= 9 && season <= 11) {
                var seedOfMonth = "autumn";
            } else {
                var seedOfMonth = "winter";
            }

            switch (seedOfMonth) {
                case "spring":
                    springSeed.innerHTML += `
                    <li class="sspace">
                    <div class="haha ${seedRental == "불가능" ? 'on' : ""}">
                    <p>${seedRental}</p>
                </div>
                    <a href="./Sdetail.html">
                        <img src="${obj.mainImg}">
                        <div class="ab">
                            <p>${obj.name}</p>
                            <div class="center">
                            <span class = "${obj.level == "상" ? "on" : ""}">상</span>
                            <span class = "${obj.level == "중" ? "on" : ""}">중</span>
                            <span class = "${obj.level == "하" ? "on" : ""}">하</span>
                            </div>
                        </div>
                    </a>
                </li>
                    `
                    break;

                case "summer":
                    summerSeed.innerHTML += `
                        <li class="sspace">
                        <div class="haha ${seedRental == "불가능" ? 'on' : ""}">
                        <p>${seedRental}</p>
                    </div>
                        <a href="./Sdetail.html">
                            <img src="${obj.mainImg}">
                            <div class="ab">
                                <p>${obj.name}</p>

                                <div class="center">
                                <span class = "${obj.level == "상" ? "on" : ""}">상</span>
                                <span class = "${obj.level == "중" ? "on" : ""}">중</span>
                                <span class = "${obj.level == "하" ? "on" : ""}">하</span>
                                </div>
                            </div>
                        </a>
                    </li>
                        `
                    break;

                case "autumn":
                    autumnSeed.innerHTML += `
                            <li class="sspace">
                            <div class="haha ${seedRental == "불가능" ? 'on' : ""}">
                            <p>${seedRental}</p>
                        </div>
                            <a href="./Sdetail.html">
                                <img src="${obj.mainImg}">
                                <div class="ab">
                                    <p>${obj.name}</p>
                                    <div class="center">
                                    <span class = "${obj.level == "상" ? "on" : ""}">상</span>
                                    <span class = "${obj.level == "중" ? "on" : ""}">중</span>
                                    <span class = "${obj.level == "하" ? "on" : ""}">하</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                            `
                    break;

                case "winter":
                    winterSeed.innerHTML += `
                                <li class="sspace">
                                <div class="haha ${seedRental == "불가능" ? 'on' : ""}">
                                <p>${seedRental}</p>
                            </div>
                                <a href="./Sdetail.html">
                                    <img src="${obj.mainImg}">
                                    <div class="ab">
                                        <p>${obj.name}</p>
                                        <div class="center">
                                        <span class = "${obj.level == "상" ? "on" : ""}">상</span>
                                        <span class = "${obj.level == "중" ? "on" : ""}">중</span>
                                        <span class = "${obj.level == "하" ? "on" : ""}">하</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                                `
                    break;

                default: console.log("ss");
            }




        })



        const itemClick = document.querySelectorAll('.all-seed > li > a');


        itemClick.forEach(function (v, k) {
            v.onclick = function () {
                sessionStorage.setItem("click", k)
            }
        })

    })


