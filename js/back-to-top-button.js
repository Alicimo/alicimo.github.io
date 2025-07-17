$( document ).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-default btn-circle"><span class="glyphicon glyphicon-triangle-top"></span></div>');
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
