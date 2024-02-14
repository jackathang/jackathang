const logoSegments = document.querySelectorAll(".logo-piece");
const logoContainer = document.querySelector(".logo");

const logoRect = logoContainer.getBoundingClientRect();
const logoCenterX = logoRect.left+ (logoRect.width / 2), logoCenterY = logoRect.top + (logoRect.height / 2);

window.onmousemove = e => {
    logoSegments.forEach(function(segment, index){
        index = 4 - index;
        let distanceX = (e.clientX - logoCenterX) / 50; // Calculate distanceX with index offset
        let distanceY = (e.clientY - logoCenterY) / 50; // Calculate distanceY with index offset
        
        // Calculate the offset to keep the segment centered
        let offsetX = distanceX * index / 1.3;
        let offsetY = distanceY * index / 1.3;
        segment.animate({
            top: `calc(${offsetY}px)`,
            left: `calc(${offsetX}px)`
        }, { duration: 1000, fill: "forwards" });   
        
        // console.log(Math.round(distanceX),Math.round(distanceY))
        
    });
}

// document.querySelector(".hero-container").addEventListener("tap",function(){
//     requestDeviceOrientation();
// })

// // mobile
// let originalAlpha, originalBeta, originalGamma;

// // mobile
// function handleOrientation(event) {
//     if (!originalAlpha && !originalBeta && !originalGamma) {
//         // Store the original values when the function is called for the first time
//         originalAlpha = event.alpha;
//         originalBeta = event.beta;
//         originalGamma = event.gamma;
//     } else {
//         // Calculate the difference between the original values and the current values
//         let alphaDifference = (event.alpha - originalAlpha) / 50;
//         let betaDifference = (event.beta - originalBeta) / 5;
//         let gammaDifference = (event.gamma - originalGamma) / 5;

//         logoSegments.forEach(function(segment, index){
//             index = 4 - index;
//             let offsetX = gammaDifference * index / 1.3;
//             let offsetY = betaDifference * index / 1.3;
            
//             segment.animate([
//                 { top: `${offsetY}px`, left: `${offsetX}px` },
//                 { top: `${offsetY}px`, left: `${offsetX}px` }
//             ], { duration: 1000, fill: "forwards" });
//         });
//     }
// }
  
  
// // Orientation function
// async function requestDeviceOrientation() {
//     if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
//       //iOS 13+ devices
//       try {
//         const permissionState = await DeviceOrientationEvent.requestPermission()
//         if (permissionState === 'granted') {
//           window.addEventListener('deviceorientation', handleOrientation)
//         } else {
//           alert('Permission was denied')
//         }
//       } catch (error) {
//         alert(error)
//         console.log("error")
//       }
//     } else if ('DeviceOrientationEvent' in window) {
//       //non iOS 13+ devices
//       console.log("not iOS");
//       window.addEventListener('deviceorientation', handleOrientation)
//     } else {
//       //not supported
//       alert('Not Supported')
//     }
// }


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





// Project Drop Down
const projectDropButton = document.querySelector(".project-dropdown-button")


projectDropButton.addEventListener("click",function(){
    console.log("clicked")
})