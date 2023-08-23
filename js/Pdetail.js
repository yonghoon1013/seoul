let plantStoageNum = sessionStorage.getItem("click");

fetch('./json/flower.json')
.then(res => { return res.json() })
.then(data => {

    const plantDetailCon = document.querySelector('.content');
    plantDetailCon.innerHTML = `
    <h2>${data.items[plantStoageNum].name}</h2>
    <figure>
      <p><img src="${data.items[plantStoageNum].img}" /></p>
      <figcaption>
        <ul>
          <li><span>이름:</span>${data.items[plantStoageNum].name}</li>
          <li><span>학명:</span>${data.items[plantStoageNum].sciName}</li>
        </ul>
        <ul>
          <li><span>구분:</span>${data.items[plantStoageNum].familyName}</li>
          <li><span>개화기:</span>${data.items[plantStoageNum].bloomingSeason}</li>
        </ul>
      </figcaption>
    </figure>
    <hr />
    <ul class="txt">
      <li>
        <p>
          자생지역 : <span>${data.items[plantStoageNum].nativeArea}</span>
        </p>
      </li>
      <li>
        <p>
        생육환경 : <span>${data.items[plantStoageNum].growthEnvironment}</span>
        </p>
      </li>
      <li>
        <p>
        번식방법 : <span>${data.items[plantStoageNum].breeding}</span>
        </p>
      </li>
      <li>
        <p>
        재배특성 : <span>${data.items[plantStoageNum].CultivationCharacteristics}</span>
        </p>
      </li>
      <li>
        <p>
        유 사 종 : <span>${data.items[plantStoageNum].Similarity}</span>
        </p>
      </li>
      <li>
        <p>
        기 타 : <span>${data.items[plantStoageNum].etc}</span>
        </p>
      </li>
    </ul>
    <div class="btn_list">
      <a href="./plant-info.html">목록</a>
    </div>
    `

    const plantSapn = document.querySelectorAll('.txt > li > p > span'),
            plantLi = document.querySelectorAll('.txt > li');

            plantSapn.forEach(function(v,k){
                if(plantSapn[k].childNodes.length == 0){
                    plantLi[k].style = 'display : none;'
                }
            })

})