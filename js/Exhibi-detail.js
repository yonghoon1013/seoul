const exPhoto = document.querySelectorAll('.exDeImg a'),
        exImgs = document.querySelectorAll('.exDeImg a img'),
exPopup = document.querySelector('.popup'),
            exPopupImg = document.querySelector('.popup img');

        exPhoto.forEach(function (ele, k) {
            ele.onclick = function () {

                exPopupImg.src = exImgs[k].src;

                exPopup.style = 'display:flex;';

            }
        });

        exPopup.onclick = function () {
            // event.target.tagName  !=  'IMG'
            if (event.target.className == 'popup') {
                exPopup.style = 'display:none';
            }
        }