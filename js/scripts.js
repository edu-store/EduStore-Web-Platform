const McButton = document.querySelector("#McButton");
const btns__menu = document.getElementById("btns__menu");
const btn__Sign__up = document.getElementById("btn__Sign__up");
const McBar1 = document.getElementById("McBar1");
const McBar2 = document.getElementById("McBar2");
const McBar3 = document.getElementById("McBar3");
const BtnAppAlgeo = document.getElementById("AppAlgeo");
const Modal = document.querySelector('#modal');
const Overlay = document.querySelector('#overlay');
const close_modal = document.querySelector('#close_modal');


const modal_app = document.querySelector('#modal_app');

const overlay_app = document.querySelector('#overlay_app');
const close_modal_app = document.querySelector('#close_modal_app');
//Home
const BtnLogIn = document.getElementById("btn__login");
const BtnSignUp = document.querySelector('#btn__Sign__up')
//Btns Modal
const btn_header_login = document.querySelector('#btn_header_login')
const btn_header_signUp = document.querySelector('#btn_header_signUp')
//Form
const Inputname = document.getElementById('name');
//Modal
const Btn_registrar_modal =  document.querySelector('#Btn_registrar_modal');
const Btn_iniciar_sesion_modal =  document.querySelector('#Btn_iniciar_sesion_modal');
//Titles Modal.
 const title_modal = document.querySelector('#title_modal');
 const subtitle_modal = document.querySelector('#subtitle_modal');
 //Btns footer modal
 const btn_iniciar_facebook = document.querySelector('#btn_iniciar_facebook');
 const btn_iniciar_google = document.querySelector('#btn_iniciar_google');
 const btn_registrar_facebook = document.querySelector('#btn_registrar_facebook');
 const btn_registrar_google = document.querySelector('#btn_registrar_google');


 showInfo = () => {
  modal_app.style.animation = 'animationIn 1s forwards';
  overlay_app.classList.add('active');
 }

 close_modal_app.addEventListener('click', ()=> {
  modal_app.style.animation = 'animationOut .8s forwards';
  overlay_app.style.transitionDelay = '.8s';
  overlay_app.classList.remove('active');
 })

close_modal.addEventListener('click', () => {
  HideModal()
})

activeMcButtom = () =>{
  btns__menu.classList.toggle("active");
  McButton.classList.toggle("active");
  McBar1.classList.toggle("active");
  McBar2.classList.toggle("active");
  McBar3.classList.toggle("active");
}

//Agregando y removiendo color de activado a btns de header del modal
activeHeaderButtom = () => {
  btn_header_signUp.classList.remove("active")    
  btn_header_login.classList.add("active")
}

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


HideModal = () => {
  Modal.style.animation = 'animationOut .8s forwards';
  Overlay.style.transitionDelay = '.8s';
  Overlay.classList.remove('active');
}

showModal = () => {
  Modal.style.animation = 'animationIn 1s forwards';
  Overlay.classList.add('active');
}

BtnLogIn.addEventListener("click", () => {
  showModal();
  activeMcButtom();
  activeHeaderButtom();
  ActiveSignIn();

  
});


BtnSignUp.addEventListener('click', () => {
  Modal.style.animation = 'animationIn 1s forwards';
  overlay.classList.add('active');
  activeMcButtom();
  ActiveSignUp();

 

})

ActiveSignUp = () =>{
  title_modal.innerHTML = "¡Completa tus datos!";
  subtitle_modal.innerHTML = "y da click en registrar";
  Inputname.classList.add('active');
  btn_header_login.classList.remove("active")
  btn_header_signUp.classList.add("active")
  Btn_iniciar_sesion_modal.classList.remove('active');
  Btn_registrar_modal.classList.add('active');


  btn_iniciar_facebook.classList.remove('active')
  btn_iniciar_google.classList.remove('active')
  btn_registrar_facebook.classList.add('active')
  btn_registrar_google.classList.add('active')

}

ActiveSignIn = () => {
  title_modal.innerHTML = "¡Bienvenido nuevamente!";
  subtitle_modal.innerHTML = "inicia en tu cuenta";
  Inputname.classList.remove('active');
  btn_header_signUp.classList.remove("active")
  btn_header_login.classList.add("active")
  Btn_registrar_modal.classList.remove('active');
  Btn_iniciar_sesion_modal.classList.add('active');

  btn_registrar_facebook.classList.remove('active')
  btn_registrar_google.classList.remove('active')
  btn_iniciar_facebook.classList.add('active')
  btn_iniciar_google.classList.add('active')
  
}


btn_header_signUp.addEventListener('click', () =>{
  ActiveSignUp(); 
})

btn_header_login.addEventListener('click', () =>{
  ActiveSignIn();
})

clearInput = () => {
  let inputs= document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    const elements = inputs[i];
    elements.value = ''
    
  }
  
}
