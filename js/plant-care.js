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