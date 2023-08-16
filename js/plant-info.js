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



fetch('./json/flower.json')
.then(res => { return res.json() })
.then(data => {

    data.items.forEach(function (obj, k) {
        const allPlant = document.querySelector('.all-plant');

        allPlant.innerHTML += `
        <li class="sspace">
        <a href="./Pdetail.html">
            <img src="${obj.img}">
            <div class="ab">
                <p>${obj.name}</p>
                <p>${obj.engName}</p>
            </div>
        </a>
    </li>
        `
    })


    const itemClick = document.querySelectorAll('.all-plant > li > a');

    itemClick.forEach(function(v,k){
        v.onclick = function(){
            sessionStorage.setItem("click02",k)
        }
    })

})



