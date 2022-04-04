// ==UserScript==
// @name         Reddit Placer Schema
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Un script pour afficher un schéma sur r/place.
// @author       Adcoss95 / MasterCedric (Modification)
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://styles.redditmedia.com/t5_2sxhs/styles/communityIcon_5ejpm2gtctq81.png
// @grant        none
// ==/UserScript==

// Remplacer le lien juste ici avec l'url du schéma généré grâce au script python !
// Si l'url est conservé mais que l'image est modifié le schéma sera automatiquement rechargé après 30 secondes.
const IMG_URL = 'https://raw.githubusercontent.com/MasterCedric/reddit_place_schema/main/template.png'

const template = document.createElement("img");
template.id = 'placeTemplate';
template.src = IMG_URL;
template.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";

const showButton = document.createElement("button");
showButton.id = 'showButton';
showButton.style = "padding: 5px 10px 5px 10px;border-radius: 100px;background-color: white;border: 0;margin-left: 10px;font-weight: bold;pointer-events: none;font-family: var(--mona-lisa-font-mono); color:black;";
showButton.innerHTML = "Appuyer sur F2 pour activer/désactiver le schéma";
  

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(template);
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByClassName("bottom-controls")[0].appendChild(showButton);
    }, false);
}          
          
          
function toggleElement() {
    if (template.style.visibility == "visible") {
        showButton.innerHTML = "Schéma : Désactivé (F2)"
        template.style.visibility = "hidden";
    } else {
        showButton.innerHTML = "Schéma : Activé (F2)"
        template.style.visibility = "visible";
    }
}


function refreshImage() {    
    const timestamp = new Date().getTime();  
    const queryString = "?t=" + timestamp;    
   
    template.src = IMG_URL + queryString;    
} 


document.addEventListener( 'keydown', function(e) {
    if (e.key === "F2") {
        toggleElement();
    }
})

const timer = window.setInterval(function(){
    refreshImage();
}, 30000);


