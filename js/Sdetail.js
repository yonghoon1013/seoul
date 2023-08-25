let seedStoageNum = sessionStorage.getItem("click");

fetch('./json/seed-data.json')
.then(res => { return res.json() })
.then(data => {

    const seedDetailCon = document.querySelector('.content');
    
    seedDetailCon.innerHTML = `
    <h4>씨앗 정보</h4>
    <div class="seedname">${data.items[seedStoageNum].name}</div>
    <hr />
    <figure>
      <img id=seed src="${data.items[seedStoageNum].mainImg}" />
    </figure>
    <div class="content_box">
      <ul class="top_detail">
        <li class="conbox">
          <div class="name">
            <p>이름</p>
          </div>
          <div class="text_content">
            <ul class="txt">
              <li><span>과명</span>${data.items[seedStoageNum].familyName}</li>
              <li><span>학명</span>${data.items[seedStoageNum].sciName}</li>
            </ul>
          </div>
        </li>
        <li class="conbox2">
          <div class="name">
            <p>재배</p>
          </div>
          <div class="text_content2">
            <ul class="txt2">
            <li><span>파종기</span>${data.items[seedStoageNum].sowingSeason}</li>
              <li><span>개화기</span>${data.items[seedStoageNum].bloomingSeason}</li>
              <li><span>결실기</span>${data.items[seedStoageNum].bearingSeason}</li>
            </ul>
          </div>
        </li>
      </ul>

      <div class="bottom_detail">
        <div class="conbox3">
          <div class="name">
            <p>키우는 법</p>
          </div>
          <div class="text_content3">
            <ul class="txt3">
              <li>
                <figure><img src="${data.items[seedStoageNum].ground[0]}">
                  <figcaption>${data.items[seedStoageNum].ground[1]}</figcaption>
                </figure>
              </li>
              <li>
                <figure><img src="${data.items[seedStoageNum].tmp[0]}">
                  <figcaption>${data.items[seedStoageNum].tmp[1]}</figcaption>
                </figure>
              </li>
              <li>
                <figure><img src="${data.items[seedStoageNum].deep[0]}">
                  <figcaption>${data.items[seedStoageNum].deep[1]}</figcaption>
                </figure>
              </li>
              <li>
                <figure><img src="${data.items[seedStoageNum].topsoil[0]}">
                  <figcaption>${data.items[seedStoageNum].topsoil[1]}</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="btn_list">
      <a href="./seed-info.html">목록</a>
    </div>
    </div>

    `


    

})