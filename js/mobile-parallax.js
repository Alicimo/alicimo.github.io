$(document).ready(function() {
    var mobileQuery = window.matchMedia('(max-width: 768px)');
    var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    var ticking = false;
    var enabled = false;
    var parallaxWindows = [];

    function shouldEnableParallax() {
        return mobileQuery.matches && !reducedMotionQuery.matches;
    }

    function updateParallax() {
        if (!enabled) {
            ticking = false;
            return;
        }

        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        parallaxWindows.forEach(function(element) {
            var rect = element.getBoundingClientRect();

            element.style.setProperty('--mobile-parallax-viewport-height', viewportHeight + 'px');
            element.style.setProperty('--mobile-parallax-layer-top', (-rect.top).toFixed(2) + 'px');
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateParallax);
        }
    }

    function buildParallaxWindows() {
        parallaxWindows = $('.header-bg, .content-bg').not('.content-bg8-end').toArray();
    }

    function enableParallax() {
        if (enabled) {
            return;
        }

        enabled = true;
        buildParallaxWindows();
        document.documentElement.classList.add('mobile-parallax');
        updateParallax();
    }

    function disableParallax() {
        if (!enabled) {
            return;
        }

        enabled = false;
        ticking = false;
        document.documentElement.classList.remove('mobile-parallax');

        parallaxWindows.forEach(function(element) {
            element.style.removeProperty('--mobile-parallax-viewport-height');
            element.style.removeProperty('--mobile-parallax-layer-top');
        });

        parallaxWindows = [];
    }

    function refreshParallaxState() {
        if (shouldEnableParallax()) {
            enableParallax();
            updateParallax();
        } else {
            disableParallax();
        }
    }

    $(window).on('scroll', requestTick);
    $(window).on('resize orientationchange', function() {
        if (enabled) {
            buildParallaxWindows();
            updateParallax();
        }

        refreshParallaxState();
    });

    if (mobileQuery.addEventListener) {
        mobileQuery.addEventListener('change', refreshParallaxState);
        reducedMotionQuery.addEventListener('change', refreshParallaxState);
    } else {
        mobileQuery.addListener(refreshParallaxState);
        reducedMotionQuery.addListener(refreshParallaxState);
    }

    refreshParallaxState();
});
