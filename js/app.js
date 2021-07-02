var modals = document.querySelector(".howToPlay");
var popupBtn = document.getElementById("restop");
var dont_show_popup = localStorage.getItem("dont_show_popup");

if (dont_show_popup == "true") {
    modals.style.display = "none";
} else {
    modals.style.display = "block";
}

popupBtn.addEventListener("click", function(){ 
    localStorage.setItem("dont_show_popup", "true");
});
