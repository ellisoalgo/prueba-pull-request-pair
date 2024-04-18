"use strict";


const face = document.querySelector(".js-face");
face.innerHTML = ":)";

function winkyFace(){
    face.innerHTML = ";)";
}

function handleHover(){
    face.innerHTML = ":)";
};

face.addEventListener('click', winkyFace);

face.addEventListener('mouseout', handleHover);


