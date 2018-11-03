var navTitle = document.getElementById("nav-title");
var navList = document.getElementById("nav-list");

navTitle.addEventListener("click", listLoad, false);
navList.addEventListener("click", hideList, false);

function listLoad(){
    navList.style.display = "block";
}

function hideList(){
    navList.style.display = "none";
}