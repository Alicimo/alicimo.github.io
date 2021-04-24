$('.navbar-collapse a').click( function() {
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().addClass('active');
});

$(window).on('scroll', function() {
    var windowHeight = $(window).height() - 100;
    $('.content').each(function() {
        if($(window).scrollTop() >= ($(this).offset().top) - windowHeight) {
            var id = $(this).attr('id');
            $('.navbar-collapse li').removeClass('active');
            $('.navbar-collapse a[href=#'+ id +']').parent().addClass('active');
        }
    });
});
