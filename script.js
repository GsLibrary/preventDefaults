document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Website Has Been Loaded");
});

const norc = document.getElementById("block-rc");
const nosel = document.getElementById("block-sel");
const nocopypaste = document.getElementById("no-copy-paste");


norc.addEventListener("contextmenu", function(event){
    event.preventDefault();
});

nocopypaste.addEventListener("copy", function(event) {
    event.preventDefault();
});

nocopypaste.addEventListener("paste", function(event) {
    event.preventDefault();
});

nocopypaste.addEventListener("blur", function() {
    nocopypaste.value = "You Shouldn't Be Able To Copy Or Paste In This";
});