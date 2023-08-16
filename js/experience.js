function experience(){
    const experienceTab = document.querySelectorAll('.experience-tab > li'),
    experienceConTab = document.querySelectorAll('.experience-con-tab > li');
    const trafficTab = document.querySelectorAll('.traffic-tab > li'),
    trafficConTab = document.querySelectorAll('.traffic-con-tab > li');


    let num = 0;
    let num2 = 0;

    experienceTab[num].classList.add('on');
    experienceConTab[num].classList.add('on');
    
    experienceTab.forEach(function(list,k){
        list.onclick = function(){
            experienceTab[num].classList.remove('on');
            this.classList.add('on');

            experienceConTab[num].classList.remove('on');
            experienceConTab[k].classList.add('on');
            num = k;

            trafficTab[num2].classList.remove('on');
            trafficTab[0].classList.add('on');
            trafficConTab[0].classList.add('on');
            num2 = 0;

            trafficTab.forEach(function(v,k){
                v.onclick = function(){
                    trafficTab[num2].classList.remove('on');
                    this.classList.add('on');

                    trafficConTab[num2].classList.remove('on');
                    trafficConTab[k].classList.add('on');
                    num2 = k;
                }
            })

        }
    })
}


experience();
