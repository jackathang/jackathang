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

