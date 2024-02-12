const logoSegments = document.querySelectorAll(".logo-piece");
const logoContainer = document.querySelector(".logo");

const logoRect = logoContainer.getBoundingClientRect();
const logoCenterX = logoRect.left+ (logoRect.width / 2), logoCenterY = logoRect.top + (logoRect.height / 2);

document.addEventListener("mousemove", function(event){
    logoSegments.forEach(function(segment, index){
        let distanceX = (event.clientX - logoCenterX) / 50; // Calculate distanceX with index offset
        let distanceY = (event.clientY - logoCenterY) / 50; // Calculate distanceY with index offset
        segment.style.top = `${distanceY*index/1.3}px`;
        segment.style.left = `${distanceX*index/1.3}px`;
        console.log(4*index)
    });
})


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
            // Easing function - you can replace this with any easing function you prefer
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});

