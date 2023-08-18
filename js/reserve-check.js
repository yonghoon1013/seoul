const info = JSON.parse(localStorage.getItem("result"));

const btn = document.querySelector('.reserve-btn-box > a');


btn.onclick = function(){
    let programStoageNum = parseInt(sessionStorage.getItem("click"));
    const checkName = document.getElementById('check-name').value,
            checkTel = document.getElementById('check-tel').value;
    
    let a =false;

    info.forEach(function(v,k){
        if(programStoageNum+1 == v.id && checkName == v.repName && checkTel == v.repTel){
            window.location.href = './reserve-check-page.html';
            sessionStorage.setItem("check",JSON.stringify(v))
            a = ture;
        }
    })

    if(!a){
        alert("예약된 내역이 존재하지 않습니다.");
        return;
    }
}