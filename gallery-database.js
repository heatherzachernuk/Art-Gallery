var artistData =  {
    CeciliaParedes: {
        name: "Cecilia Paredes",
        images: ["cp1.jpg", "cp2.jpg", "cp3.jpg", "cp4.jpg"],
        thumbs: ["cp1t.jpg", "cp2t.jpg", "cp3t.jpg", "cp4t.jpg"],
        website: "http://www.artnet.com/artists/cecilia-paredes/",
    },
    EyvindEarle:{
        name: "Eyvind Earle", 
        images: ["ee1.jpg", "ee2.jpg", "ee3.jpg", "ee4.jpg"],
        thumbs: ["ee1t.jpg", "ee2t.jpg", "ee3t.jpg", "ee4t.jpg"],
        website: "http://www.eyvindearle.com/",
    },
    AliceandMartinProvensen: {
        name: "Alice & Martin Provensen", 
        images: ["amp1.jpg","amp2.jpg","amp3.jpg","amp4.jpg"],
        thumbs: ["amp1t.jpg","amp2t.jpg","amp3t.jpg","amp4t.jpg"],
        website: "http://authors.simonandschuster.com/Alice-Provensen/1576544",
    },
    PatrickHruby: {
        name: "Patrick Hruby", 
        images: ["ph1.jpg","ph2.jpg","ph3.jpg","ph4.jpg"],
        thumbs: ["ph1t.jpg","ph2t.jpg","ph3t.jpg","ph4t.jpg"],
        website: "http://patrickdrawsthings.com/",
    },
    PascalBlanchet: {
        name: "Pascal Blanchet",
        images:  ["pb1.jpg","pb2.jpg","pb3.jpg","pb4.jpg"],
        thumbs:  ["pb1t.jpg","pb2t.jpg","pb3t.jpg","pb4t.jpg"],
        website: "http://www.pascalblanchet.com/",
    },
    HenriRousseau: {
        name: "Henri Rousseau",
        images:  ["hr1.jpg","hr2.jpg","hr3.jpg","hr4.jpg"],
        thumbs:  ["hr1t.jpg","hr2t.jpg","hr3t.jpg","hr4t.jpg"],
        website: "http://www.henrirousseau.org/"

    },
    MCEscher: {
        name: "M C Escher",
        images:  ["mce1.jpg","mce2.jpg","mce3.jpg","mce4.jpg"],
        thumbs:  ["mce1t.jpg","mce2t.jpg","mce3t.jpg","mce4t.jpg"],
        website: "http://www.mcescher.com/"
    },
    SaulSteinberg: {
        name: "Saul Steinberg",
        images:  ["ss1.jpg","ss2.jpg","ss3.jpg","ss4.jpg"],
        thumbs:  ["ss1t.jpg","ss2t.jpg","ss3t.jpg","ss4t.jpg"],
        website: "http://www.saulsteinbergfoundation.org/"
    },
    AndyGilmore: {
        name: "Andy Gilmore",
        images:  ["ag1.jpg","ag2.jpg","ag3.jpg","ag4.jpg"],
        thumbs:  ["ag1t.jpg","ag2t.jpg","ag3t.jpg","ag4t.jpg"],
        website: "http://crowquills.com/"
    },
    YangYongliang: {
        name: "Yang Yongliang",
        images:  ["yy1.jpg","yy2.jpg","yy3.jpg","yy4.jpg"],
        thumbs:  ["yy1t.jpg","yy2t.jpg","yy3t.jpg","yy4t.jpg"],
        website: "http://www.yangyongliang.com/"
    },
};

    var artistList = []; //same as saying "new Array();"

//this displays the list of artists on the left of the screen
for (var artistName in artistData) {
    var artistEntry = artistData[artistName];
    var artistListing = document.createElement("a");
    artistListing.innerText = artistEntry.name + "\n" + "\n";
    document.getElementById("listSpace").appendChild(artistListing);
    artistListing.addEventListener("click", clickName);
    artistList.push(artistEntry.name);
}

populatePage(artistData.CeciliaParedes);

//this function populates the gallery space when clicking on a specific artist name in the list
function clickName(event){
    var artistListing = event.target;
    var targetKey = artistListing.innerText;
    targetKey = targetKey.substr(0, targetKey.length-2);
    for(var key in artistData) {
        if(artistData[key].name==targetKey) {
            populatePage(artistData[key]);
        }
    }
}

function populatePage(artistEntry){
    var headerTitle = document.querySelector(".header");
    var websiteReference = document.querySelector(".footer");

    currentArtist = artistEntry;


    //this part puts the thumbnails in the gallery space
    var frameContent = document.querySelectorAll(".frame");
    for (var i = 0; i<frameContent.length; i++){
        frameContent[i].querySelector("img").src = "images/" + artistEntry.name + "/" + artistEntry.thumbs[i];
    }


        //this part sets the link from the thumbnail to the full size image 
        //When you don't have lightbox installed, it just opens the full-size image on a new page.
        var fullImage = document.querySelectorAll(".frame");
        for (var i = 0; i<fullImage.length; i++){
            fullImage[i].querySelector("a").href = "images/" + artistEntry.name + "/" + artistEntry.images[i];
        } 

        headerTitle.innerText = artistEntry.name;
       // websiteReference.querySelector("a").href = artistEntry.website;



   }
