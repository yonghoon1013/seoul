const elS2 = document.querySelectorAll('.text p');
const elS2Content = document.querySelectorAll('.michin');

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

const elS3 = document.querySelectorAll('.line div');
const elS3Content = document.querySelectorAll('.nnn');

let nnum = 0;
elS3[nnum].classList.add('on');
elS3Content[nnum].classList.add('on');

elS3.forEach(function (ele, key) {
    ele.onclick = function () {
        elS3[nnum].classList.remove('on');
        this.classList.add('on');

        elS3Content[nnum].classList.remove('on');
        elS3Content[key].classList.add('on');

        nnum = key;
    }
});



fetch('./json/program.json')
    .then(res => { return res.json() }) // 한줄일땐 (),{]생략가능 근데 {}쓸땐 return시켜줘야함 안쓰면 필없
    .then(data => {

        let a
        let b

        data.items.sort((a,b)=>{
            if(a.end > b.end) return -1;
            if(a.end < b.end) return 1;
            return 0;
        });



        data.items.forEach(function (obj, k) {
            let date = obj.period;
            let date_arr = date.split('~');
            let start = new Date(date_arr[0]);
            let end = new Date(date_arr[1]);
            
            const allPg = document.querySelector('.all-program'),
            teenPg = document.querySelector('.teen-program'),
            familyPg = document.querySelector('.family-program'),
            adultPg = document.querySelector('.adult-program');

            
            let i,t ='';

            for(i in obj.target){
                t += obj.target[i]+" ";
            }


            if (start < new Date() && end > new Date()) {
                var deadline = "접수중";
            } else{
                var deadline = "예약마감"

            }

            if(obj.price.length > 3){
                var price = "유료"
            }else{
                var price = "무료"
            };


            allPg.innerHTML += `
        <li>
        <a href="./experience.html">
            <div class="sspace ${deadline == "예약마감" ? "on" : ""}">    
                <img src="${obj.img}">
                <div class="ab">
                    <p>예 약 마 감</p>
                </div>
            </div>
            <div class="ssspace">
                <div class="huhu">
                    <span>${deadline}</span>
                    <span>${price}</span>
                </div>
                <div>
                    <p>
                        ${obj.name}<br>
                        대상 : ${t}
                    </p>
                    <p>
                        ${obj.period}
                    </p>
                </div>
            </div>
        </a>
    </li>
        `
        

        if(obj.target.includes("청소년")){
            teenPg.innerHTML += `
            <li>
            <a href="./experience.html">
            <div class="sspace ${deadline == "예약마감" ? "on" : ""}">    
                    <img src="${obj.img}">
                    <div class="ab">
                        <p>예 약 마 감</p>
                    </div>
                </div>
                <div class="ssspace">
                    <div class="huhu">
                        <span>${deadline}</span>
                        <span>${price}</span>
                    </div>
                    <div>
                        <p>
                            ${obj.name}<br>
                            대상 : ${t}
                        </p>
                        <p>
                            ${obj.period}
                        </p>
                    </div>
                </div>
            </a>
        </li>
            `
        }
        if(obj.target.includes("유아")){
            familyPg.innerHTML += `
            <li>
            <a href="./experience.html">
            <div class="sspace ${deadline == "예약마감" ? "on" : ""}">    
                    <img src="${obj.img}">
                    <div class="ab">
                        <p>예 약 마 감</p>
                    </div>
                </div>
                <div class="ssspace">
                    <div class="huhu">
                        <span>${deadline}</span>
                        <span>${price}</span>
                    </div>
                    <div>
                        <p>
                            ${obj.name}<br>
                            대상 : ${t}
                        </p>
                        <p>
                            ${obj.period}
                        </p>
                    </div>
                </div>
            </a>
        </li>
            `
        }
        if(obj.target.includes("성인")){
            adultPg.innerHTML += `
            <li>
            <a href="./experience.html">
            <div class="sspace ${deadline == "예약마감" ? "on" : ""}">    
                    <img src="${obj.img}">
                    <div class="ab">
                        <p>예 약 마 감</p>
                    </div>
                </div>
                <div class="ssspace">
                    <div class="huhu">
                        <span>${deadline}</span>
                        <span>${price}</span>
                    </div>
                    <div>
                        <p>
                            ${obj.name}<br>
                            대상 : ${t}
                        </p>
                        <p>
                            ${obj.period}
                        </p>
                    </div>
                </div>
            </a>
        </li>
            `
        }
        
        })
       

        const itemClick = document.querySelectorAll('.all-program > li > a');

        itemClick.forEach(function(v,k){
            v.onclick = function(){
                sessionStorage.setItem("click",k)
            }
        })

      

    })




