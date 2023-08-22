
fetch('./json/lostItem.json')
.then(res => { return res.json() })
.then(data => {

    data.items.forEach(function (obj, k) {

        const lostBox = document.querySelector('.nnn');

        lostBox.innerHTML += `
        <li class="sspace">
        <a href="./lostitem-detail.html">
            <img src="${obj.img}">
            <div class="ab">
                <p>${obj.name}</p><br>
                <p>${obj.place}</p>
            </div>
        </a>
    </li>
        `
    })


    const itemClick = document.querySelectorAll('.nnn > li > a');

    itemClick.forEach(function(v,k){
        v.onclick = function(){
            sessionStorage.setItem("click",k)
        }
    })


})