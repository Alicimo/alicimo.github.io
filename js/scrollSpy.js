$('.navbar-collapse a').click( function() {
    $(this).parent().parent().find('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function() {
    var windowHeight = $(window).height() - 100;
    $('.content').each(function() {
        if($(window).scrollTop() >= ($(this).offset().top) - windowHeight) {
            var id = $(this).attr('id');
            $('.navbar-collapse .nav-item').removeClass('active');
            $('.navbar-collapse .nav-link').removeClass('active');
            $('.navbar-collapse a[href=#'+ id +']').parent().addClass('active');
            $('.navbar-collapse a[href=#'+ id +']').addClass('active');
        }
    });
});
