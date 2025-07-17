$('.navbar-collapse a').click( function() {
    $('.navbar-collapse .nav-item').removeClass('active');
    $('.navbar-collapse .nav-link').removeClass('active');
    $(this).parent().addClass('active');
    $(this).addClass('active');
});

function updateActiveNav() {
    var scrollTop = $(window).scrollTop();
    var currentSection = null;
    
    // Find the section that's currently at the top of the viewport
    $('#about, #research, #education, #experience, #publications, #contact').each(function() {
        var section = $(this);
        var sectionTop = section.offset().top - 100; // Account for navbar height
        var sectionBottom = sectionTop + section.outerHeight();
        
        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            currentSection = section.attr('id');
        }
    });
    
    // If we're at the very top, default to about
    if (scrollTop < 100) {
        currentSection = 'about';
    }
    
    // Update active states
    if (currentSection) {
        $('.navbar-collapse .nav-item').removeClass('active');
        $('.navbar-collapse .nav-link').removeClass('active');
        $('.navbar-collapse a[href="#'+ currentSection +'"]').parent().addClass('active');
        $('.navbar-collapse a[href="#'+ currentSection +'"]').addClass('active');
    }
}

$(window).on('scroll', updateActiveNav);

// Set initial active state on page load
$(document).ready(function() {
    updateActiveNav();
});
