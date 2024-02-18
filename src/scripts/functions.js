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


// Transition to section animation
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var targetOffset = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetOffset - startPosition;
        var duration = 800; // Adjust the duration as needed
        
        var startTime = null;
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});



// Project Drop down
function toggleLinkStyles(link, isExpanded, index) {
    let heightFactor = 0;
    let heightOffset = 0
    let frameHeight = 0;
    if (window.innerWidth <= 1000) {
        // heightFactor = 83;
        // heightOffset = 40;
        heightFactor = 75;
        heightOffset = 10;
    } else {
        heightFactor = 50;
        heightOffset = 5;
    }
    console.log(window.innerWidth)
    if (isExpanded) {
        link.style.padding = `${((heightFactor*index)+heightOffset)}vh 0 0 0`;
        link.style.height = "20%";
        dropdownContent.style.height = `${(heightFactor*4)+heightOffset+50}vh`
    } else {
        link.style.padding = "0";
        link.style.height = "0%";
        dropdownContent.style.height = `10vh`
    }
}

var links = document.querySelectorAll("div .content");
var dropdownContent = document.querySelector("#dropdown-content");
var dropdown = document.querySelector(".dropdown");

let isExpanded = false;
document.querySelector(".dropdown-btn").addEventListener("click", function() {
    isExpanded = !isExpanded;
    links.forEach(function(link, index) {
        toggleLinkStyles(link, isExpanded, index);
    });
});