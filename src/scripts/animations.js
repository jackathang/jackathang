const logoSegments = document.querySelectorAll(".logo-piece");
const logoContainer = document.querySelector(".logo");

const logoRect = logoContainer.getBoundingClientRect();
const logoCenterX = logoRect.left+ (logoRect.width / 2), logoCenterY = logoRect.top + (logoRect.height / 2);

document.addEventListener("mousemove", function(event){
    logoSegments.forEach(function(segment, index){
        index = 4 - index;
        let distanceX = (event.clientX - logoCenterX) / 50; // Calculate distanceX with index offset
        let distanceY = (event.clientY - logoCenterY) / 50; // Calculate distanceY with index offset
        
        // Calculate the offset to keep the segment centered
        let offsetX = distanceX * index / 1.3;
        let offsetY = distanceY * index / 1.3;
        
        // Set the new top and left positions to keep the segment centered
        segment.style.top = `calc(50% + ${offsetY}px)`;
        segment.style.left = `calc(50% + ${offsetX}px)`;
    });
});



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

window.addEventListener('deviceorientation', handleOrientation);

const testOutput = document.querySelector(".test");

function handleOrientation(event) {
    // Get rotation data from the device
    var alpha = event.alpha; // Rotation around z-axis (in degrees)
    var beta = event.beta;   // Rotation around x-axis (in degrees)
    var gamma = event.gamma; // Rotation around y-axis (in degrees)

    // Use rotation data to adjust parallax effect
    // For example, you can adjust the position of parallax layers based on alpha, beta, gamma values
    // Update the CSS properties of your parallax layers accordingly
    testOutput.textContent= `${alpha}, ${beta}, ${gamma}`
}