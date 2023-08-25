function programClick() {
    let programStoageNum = sessionStorage.getItem("click");

    fetch('./json/program.json')
        .then(res => { return res.json() })
        .then(data => {
            const experDetail = document.querySelector('.experience-box'),
                  elprogram = document.querySelector('.experience-con >.ll');

            experDetail.innerHTML = `
        <div class="experience-info-box">
        <div class="left">
            <img src="${data.items[programStoageNum].img}">
        </div>
        <div class="right">
            <p class="title">
                ${data.items[programStoageNum].name}
            </p>
            <ul>
                <li class="a">
                    <dl>
                        <dt>체험기간</dt>
                        <dd>${data.items[programStoageNum].period}</dd>
                    </dl>
                </li>

                <li class="b">
                    <dl>
                        <dt>장소</dt>
                        <dd>${data.items[programStoageNum].area}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>대상</dt>
                        <dd>${data.items[programStoageNum].target}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>모집정원</dt>
                        <dd>${data.items[programStoageNum].recruit}명</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>이용시간</dt>
                        <dd>${data.items[programStoageNum].time}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>이용요금</dt>
                        <dd>${data.items[programStoageNum].price}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>신청제한</dt>
                        <dd>1팀 당 최대 ${data.items[programStoageNum].maxPeople}인</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>예약방법</dt>
                        <dd>${data.items[programStoageNum].reserveMethod}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>접수기간</dt>
                        <dd>${data.items[programStoageNum].deadline}</dd>
                    </dl>
                </li>

                <li>
                    <dl>
                        <dt>취소기간</dt>
                        <dd>${data.items[programStoageNum].periodCancel}</dd>
                    </dl>
                </li>

                <li class="c">
                    <dl>
                        <dt>단체예약 및 문의전화</dt>
                        <dd>${data.items[programStoageNum].tel}</dd>
                    </dl>
                </li>
            </ul>
            <div class="reservation-btn-box">
                <a href="./reserve.html" class="reserve">
                    <span>예약하기</span>
                </a>
                <a href="./reserve-check.html" class="reserve-check">
                <span>예약확인</span>
            </a>
            </div>
        </div>
    </div>`
        elprogram.innerHTML =`
        <img src="${data.items[programStoageNum].programD}" alt="">`
        })

}

programClick();