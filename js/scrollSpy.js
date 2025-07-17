$('.navbar-collapse a').click( function() {
    $('.navbar-collapse .nav-item').removeClass('active');
    $('.navbar-collapse .nav-link').removeClass('active');
    $(this).parent().addClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function() {
    var windowHeight = $(window).height() - 100;
    $('section[id], div[id]').each(function() {
        if($(window).scrollTop() >= ($(this).offset().top) - windowHeight) {
            var id = $(this).attr('id');
            if(id) {
                $('.navbar-collapse .nav-item').removeClass('active');
                $('.navbar-collapse .nav-link').removeClass('active');
                $('.navbar-collapse a[href="#'+ id +'"]').parent().addClass('active');
                $('.navbar-collapse a[href="#'+ id +'"]').addClass('active');
            }
        }
    });
});
