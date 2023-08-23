let lostStoageNum = sessionStorage.getItem("click");


fetch('./json/lostItem.json')
.then(res => { return res.json() })
.then(data => {

    const lostCon = document.querySelector('.lost-con');

    lostCon.innerHTML = `
    <div class="haha">
    <div class="state">
            <p>${data.items[lostStoageNum].state}</p>
    </div>
    <div class="name">
        <p>${data.items[lostStoageNum].name}</p>
    </div>
</div>
<div class="ttt">

    <div class="im">
        <img src = "${data.items[lostStoageNum].img}">
    </div>

    <div class="tdt">
        <table>
            <tr>
                <td>습득물명</td>
                <td>${data.items[lostStoageNum].name}</td>
            </tr>
            <tr>
                <td>습득장소</td>
                <td>${data.items[lostStoageNum].place}</td>
            </tr>
            <tr>
                <td>습득날짜</td>
                <td>${data.items[lostStoageNum].acquisitionDate}</td>
            </tr>
            <tr>
                <td>상태</td>
                <td>${data.items[lostStoageNum].state}</td>
            </tr>
            <tr>
                <td>보관장소</td>
                <td>
                ${data.items[lostStoageNum].storage[0]}<br>
                ${data.items[lostStoageNum].storage[1]}
                </td>
            </tr>
        </table>
    </div>
    <div class="statee">
    <a href="./lostitem-info.html"><p>목록</p></a>
    </div>
</div>


    `

})