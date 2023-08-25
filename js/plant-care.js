


 fetch('./json/plant-care.json')
 .then(res => { return res.json() })
 .then(data => {

     data.items.forEach(function (obj, k) {

         const careBox = document.querySelector('.qna_list ul');

         careBox.innerHTML += `
      
         <li>
             <button>
                 <span>Q</span> 
                 <h2>${obj.text}</h2>
                 <div><img src="./img/icon_accordion_open.svg"></div>
             </button>

             <div class="dada2n">
                 <button>
                     <span>A</span> 
                     <h2>${obj.detail}</h2>
                 </button>
             </div>
        </li>
        
   

        
         `
     })

     $('.qna_list li').on('click',function(){
        if(!$(this).hasClass('active')){
            $('.qna_list li')
            .removeClass('active')
            .find('.dada2n').stop().slideUp();
        }
    
        $(this)
        .toggleClass('active')
        .find('.dada2n').stop().slideToggle();
    })

 })




