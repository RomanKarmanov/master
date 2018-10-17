import $ from 'jquery';
document.onscroll = function(){
  var wScroll = window.pageYOffset;
  var thems_list = document.querySelector(".thems_list");
  if (wScroll > 700) {
    thems_list.classList.add("fixed");
  }
  else {
    thems_list.classList.remove("fixed");
  }
}


