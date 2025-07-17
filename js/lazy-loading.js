// Lazy loading for background images
$(document).ready(function() {
    // Background image lazy loading
    const lazyBackgrounds = [
        { element: '.content-bg1', image: './img/about.jpg' },
        { element: '.content-bg3', image: './img/interests.jpg' },
        { element: '.content-bg6', image: './img/oxford.jpg' },
        { element: '.content-bg7', image: './img/publication.jpg' },
        { element: '.content-bg8', image: './img/rowing.jpg' },
        { element: '.content-bg8-end', image: './img/rowing.jpg' }
    ];
    
    // Create an intersection observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const bgImage = element.dataset.bg;
                
                if (bgImage) {
                    // Create a new image to preload
                    const img = new Image();
                    img.onload = function() {
                        element.style.backgroundImage = `url(${bgImage})`;
                        element.classList.add('loaded');
                    };
                    img.src = bgImage;
                    
                    // Stop observing this element
                    observer.unobserve(element);
                }
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading 50px before element comes into view
        threshold: 0.01
    });
    
    // Set up lazy loading for each background element
    lazyBackgrounds.forEach(bg => {
        const element = document.querySelector(bg.element);
        if (element) {
            element.dataset.bg = bg.image;
            imageObserver.observe(element);
        }
    });
    
    // Fallback for browsers that don't support IntersectionObserver
    if (!window.IntersectionObserver) {
        lazyBackgrounds.forEach(bg => {
            const element = document.querySelector(bg.element);
            if (element) {
                element.style.backgroundImage = `url(${bg.image})`;
            }
        });
    }
});