let dissapearButton = document.getElementById("codeButton");
dissapearButton.addEventListener("click", dissapear);

function dissapear(){
    console.log("hghgh")
    let allChat = document.getElementsByClassName("chatText font-white");
    if(dissapearButton.textContent == "show details"){
        dissapearButton.textContent = "only code"
    }else{
        dissapearButton.textContent = "show details"
    }
    for(var i = 0; i <= allChat.length; i++){
        allChat[i].classList.toggle("dissapear")
    }
}

let links = document.getElementsByClassName("indexLink");

let menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", toggleMenue);
for(var i = 0; i < links.length ; i++){
    links[i].addEventListener("click", toggleMenue);
}
let menuIcon = document.getElementById("menu");
function toggleMenue(){
    if(menuIcon.innerText == "menu"){
        menuIcon.innerText = "menu_open";
    }else{
        menuIcon.innerText = "menu";
    }
    let menuebar = document.getElementById("indexId");
    menuebar.classList.toggle("hidden");

}

// dark moode integration
let darkModeButton = document.getElementById("dark");
darkModeButton.addEventListener("click",darkModeToggle);
let darkIcon = document.getElementById("darkButton");
function darkModeToggle(){
    // button change
    if(darkIcon.innerText == "dark_mode"){
        darkIcon.innerText = "light_mode";
    }else{
        darkIcon.innerText = "dark_mode";
    }
    // bg color
    let bgColorTop = document.getElementsByClassName("top-bg-white");
    for(var i = 0; i < bgColorTop.length; i++){
        bgColorTop[i].classList.toggle("top-bg-dark");
    }
    let bgColorMain = document.getElementsByClassName("main-bg-white");
    for(var i = 0; i < bgColorMain.length; i++){
        bgColorMain[i].classList.toggle("main-bg-dark");
    }
    // font
    let textColor = document.getElementsByClassName("font-white");
    for(var i = 0; i < textColor.length; i++){
        textColor[i].classList.toggle("font-dark");
    }
    
}

window.onload = function() {
    var reloading = localStorage.getItem("reloading");
    if(reloading){
      localStorage.removeItem("reloading");
      darkModeToggle();
    }
    localStorage.setItem("reloading", "true");
    
}