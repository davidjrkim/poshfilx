let menu = document.querySelector(".menu")
let menuDiv = document.querySelector(".menu div")
let menuDivDiv = document.querySelector(".menu div div")
let profileSselecte = document.getElementById("profile-selecte");

profileSselecte.onclick = function() {
    menu.style.visibility = "visible";
    menuDiv.style.transform = "scale(1)";
    menuDiv.style.transitionDuration = "0.75s";
    menuDivDiv.style.opacity = "1";
    menuDivDiv.style.transition = "opacity 0.4s ease 0.4s";
  }