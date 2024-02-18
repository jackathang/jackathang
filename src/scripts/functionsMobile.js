// Mobile popup for permissions
const mobilePopup = document.querySelector(".mobile-popup");
mobilePopup.style.display = "unset"

// Reject permissions
function rejectPermissions(){
    mobilePopup.style.display = "none"
}

//Accept permissions 
function acceptPermissions(){
    mobilePopup.style.display = "none"
    requestDeviceOrientation();
}


const logoSegments = document.querySelectorAll(".logo-piece");
const logoContainer = document.querySelector(".logo");

const logoRect = logoContainer.getBoundingClientRect();
const logoCenterX = logoRect.left+ (logoRect.width / 2), logoCenterY = logoRect.top + (logoRect.height / 2);


// mobile
let originalAlpha, originalBeta, originalGamma;

// mobile
function handleOrientation(event) {
    if (!originalAlpha && !originalBeta && !originalGamma) {
        // Store the original values when the function is called for the first time
        originalAlpha = event.alpha;
        originalBeta = event.beta;
        originalGamma = event.gamma;
    } else {
        // Calculate the difference between the original values and the current values
        let alphaDifference = (event.alpha - originalAlpha) / 50;
        let betaDifference = (event.beta - originalBeta) / 5;
        let gammaDifference = (event.gamma - originalGamma) / 5;

        logoSegments.forEach(function(segment, index){
            index = 4 - index;
            let offsetX = gammaDifference * index / 1.3;
            let offsetY = betaDifference * index / 1.3;
            
            segment.animate([
                { top: `${offsetY}px`, left: `${offsetX}px` }
            ], { duration: 1000, fill: "forwards" });
        });
    }
}
  
  
// Orientation function
async function requestDeviceOrientation() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      //iOS 13+ devices
      try {
        const permissionState = await DeviceOrientationEvent.requestPermission()
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation)
          console.log("test")
        } else {
          console.log('Permission was denied')
        }
      } catch (error) {
        console.log(error)
        console.log("error")
      }
    } else if ('DeviceOrientationEvent' in window) {
      //non iOS 13+ devices
      console.log("not iOS");
      window.addEventListener('deviceorientation', handleOrientation)
    } else {
      //not supported
      console.log('Not Supported')
    }
}