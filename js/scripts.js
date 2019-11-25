const McButton = document.querySelector("#McButton");
const btns__menu = document.getElementById("btns__menu");
const btn__Sign__up = document.getElementById("btn__Sign__up");
const McBar1 = document.getElementById("McBar1");
const McBar2 = document.getElementById("McBar2");
const McBar3 = document.getElementById("McBar3");
const BtnAppAlgeo = document.getElementById("AppAlgeo");

McButton.addEventListener("click", function() {
  btn__Sign__up.classList.remove("btn-white");
  btn__Sign__up.classList.add("btn-blue");
  btns__menu.classList.toggle("active");
  McButton.classList.toggle("active");

  McBar1.classList.toggle("active");
  McBar2.classList.toggle("active");
  //   McBar1.style.animationName = "menu-positivo";

  McBar3.classList.toggle("active");
});

BtnAppAlgeo.addEventListener("click", function(){
  window.location="/ResourceDetail.html"
});

