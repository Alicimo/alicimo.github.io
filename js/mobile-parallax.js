$(document).ready(function() {
    // Mobile parallax effect for restoring background image changes
    // Only applies on mobile devices where background-attachment: fixed is disabled
    
    function isMobileDevice() {
        return window.innerWidth <= 768;
    }
    
    if (isMobileDevice()) {
        var currentVisibleBg = '';
        
        function updateBackgroundOnScroll() {
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            // Define sections and their corresponding background elements
            var sections = [
                { content: $('#about'), bg: $('.content-bg1') },
                { content: $('#research'), bg: $('.content-bg3') },
                { content: $('#education'), bg: $('.content-bg6') },
                { content: $('#experience'), bg: $('.content-bg7') },
                { content: $('#publications'), bg: $('.content-bg8') },
                { content: $('#contact'), bg: $('.content-bg8') }
            ];
            
            sections.forEach(function(section) {
                if (section.content.length && section.bg.length) {
                    var sectionTop = section.content.offset().top;
                    var sectionHeight = section.content.outerHeight();
                    var sectionBottom = sectionTop + sectionHeight;
                    
                    // Check if section is in viewport
                    if (scrollPos + windowHeight > sectionTop && scrollPos < sectionBottom) {
                        var bgClass = section.bg.attr('class').split(' ').find(cls => cls.startsWith('content-bg'));
                        
                        if (currentVisibleBg !== bgClass) {
                            currentVisibleBg = bgClass;
                            
                            // Create subtle parallax effect
                            var parallaxOffset = (scrollPos - sectionTop) * 0.3;
                            section.bg.css({
                                'transform': 'translateY(' + parallaxOffset + 'px)',
                                'opacity': 1
                            });
                            
                            // Fade out other backgrounds
                            $('.content-bg').not(section.bg).css({
                                'opacity': 0.7,
                                'transform': 'translateY(0)'
                            });
                        }
                    }
                }
            });
        }
        
        // Throttle scroll events for performance
        var ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateBackgroundOnScroll);
                ticking = true;
                setTimeout(function() {
                    ticking = false;
                }, 16); // ~60fps
            }
        }
        
        $(window).on('scroll', requestTick);
        
        // Handle resize events
        $(window).on('resize', function() {
            if (!isMobileDevice()) {
                // Reset styles if switched to desktop
                $('.content-bg').css({
                    'transform': '',
                    'opacity': ''
                });
                $(window).off('scroll', requestTick);
            }
        });
        
        // Initial call
        updateBackgroundOnScroll();
    }
});