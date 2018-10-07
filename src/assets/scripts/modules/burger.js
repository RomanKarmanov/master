let burger = document.querySelector("#burger");
let fullScreen = document.querySelector("#full-screen");
let close = document.querySelector("#close");

burger.addEventListener("click", function(){
    fullScreen.style = "display:flex";
    burger.style = "display:none";
    close.style = "display:block";
});

close.addEventListener("click", function(){
    fullScreen.style = "display:none";
    close.style = "display:none";
    burger.style = "display:block";
})