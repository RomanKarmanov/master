let welcomeBtn = document.querySelector("#welcome_btn");
let welcomeBlock = document.querySelector("#welcome_block");
let auth = document.querySelector("#auth");
let btnMain = document.querySelector("#btn-main");
let flip = document.querySelector(".flip-contaner");

welcomeBtn.addEventListener("click", function(){
    // welcomeBlock.style = "display:none";
    welcomeBtn.style = "display:none";
    // auth.style = "display:flex";
    flip.classList.add("flip-active")

});

btnMain.addEventListener("click", function(){
    // welcomeBlock.style = "display:flex";
    // auth.style = "display:none";
    flip.classList.remove("flip-active")
    welcomeBtn.style = "display:block";
});
