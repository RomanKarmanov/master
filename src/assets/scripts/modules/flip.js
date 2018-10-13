let welcomeBtn = document.querySelector("#welcome_btn");
let welcomeBlock = document.querySelector("#welcome_block");
let auth = document.querySelector("#auth");
let btnMain = document.querySelector("#btn-main");

welcomeBtn.addEventListener("click", function(){
    welcomeBlock.style = "display:none";
    welcomeBtn.style = "display:none";
    // auth.style = "transform: translate(-50%, -50%) rotateY(180deg);";
    auth.style = "display:flex";
    // welcomeBlock.style = "transform: translate(-50%, -50%) rotateY(180deg)";
    

});

btnMain.addEventListener("click", function(){
    welcomeBlock.style = "display:flex";
    auth.style = "display:none";
    welcomeBtn.style = "display:block";
});
