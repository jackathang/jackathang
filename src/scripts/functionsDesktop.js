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
        }, { duration: 500, fill: "forwards" });       
    });
}




  
  