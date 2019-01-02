var header = document.getElementById("header");
var navList = document.getElementById("nav-list");

header.addEventListener("click", listLoad, false);
navList.addEventListener("click", hideList, false);

function listLoad(){
    navList.style.display = "block";
    // document.getElementById("nav-title").style.color = "black";
    header.removeEventListener("click", listLoad, false);
    header.addEventListener("click", hideList, false);
}

function hideList(){
	header.removeEventListener("click", hideList, false);
	header.addEventListener("click", listLoad, false);
    navList.style.display = "none";
}

