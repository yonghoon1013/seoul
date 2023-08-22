const elS2 = document.querySelectorAll('.line div');
const elS2Content = document.querySelectorAll('.flex');

            let num = 0;
            elS2[num].classList.add('on');
            elS2Content[num].classList.add('on');

            elS2.forEach(function(ele,key){
                ele.onclick = function(){
                    elS2[num].classList.remove('on');
                    this.classList.add('on');

                    elS2Content[num].classList.remove('on');
                    elS2Content[key].classList.add('on');

                    num = key;
                }
            });
