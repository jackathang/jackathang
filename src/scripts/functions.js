// Function to detect light or dark mode
function detectColorScheme() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Detect color scheme on page load
detectColorScheme();

// Listen for changes to the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme);


// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project scroll in
document.addEventListener("DOMContentLoaded", function() {
    var scrollFades = document.querySelectorAll('.project-item');
    
    function fadeInOnScroll() {
        scrollFades.forEach(function(scrollFade) {
            
            var distanceToTop = scrollFade.getBoundingClientRect().top;
            var elementHeight = scrollFade.offsetHeight;
            var windowHeight = window.innerHeight;

            // Add an offset to start fading in a bit sooner
            var offset = 600; // Adjust this value as needed
            // If the top of the element is within the viewport, or if it's close to being in the viewport, fade it in
            if (distanceToTop - windowHeight + elementHeight < offset) {
                var width = ((windowHeight - distanceToTop + offset) / (windowHeight + offset))*100;                
                if (width <90) {
                    scrollFade.style.width = `${width}%`;
                } else {

                }
                
            }
        });
    }

    // Initial call to set the initial opacity
    fadeInOnScroll();

    const element = document.querySelector('body');
    element.addEventListener('scroll', function() {
        fadeInOnScroll();
        
    });
});



// Function to detect if the device is mobile or desktop
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Function to dynamically load scripts
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    if (callback) {
        script.onload = callback;
    }
    document.getElementsByTagName("head")[0].appendChild(script);
}

// Load appropriate script based on the device type
if (isMobileDevice()) {
    loadScript("./src/scripts/functionsMobile.js", function() {
        console.log("Mobile script loaded.");
    });
} else {
    loadScript("./src/scripts/functionsDesktop.js", function() {
        console.log("Desktop script loaded.");
    });
}