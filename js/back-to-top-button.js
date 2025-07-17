$( document ).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-outline-primary btn-circle"><i class="fa-solid fa-chevron-up"></i></div>');
        $(window).scroll(function (){
            if ($(this).scrollTop() > 100 && $(this).width() < 768 ) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
