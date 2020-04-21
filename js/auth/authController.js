    const Username = document.getElementById("name");
    const Useremail = document.getElementById("email");
    const userpassword = document.getElementById("password");

    
    Btn_registrar_modal.addEventListener('click', () => {
        let name = Username.value;
        let email = Useremail.value;
        let password = userpassword.value;
        const auth = new Autentication()
            auth.crearCuentaEmailPass( email, password, name )
        clearInput()
        HideModal();
})

Btn_iniciar_sesion_modal.addEventListener('click', () => {
    const auth = new Autentication()
        auth.autEmailPass(Useremail.value, userpassword.value)
        clearInput();
        HideModal();

})

btn_iniciar_google.addEventListener('click', () => {
    const auth = new Autentication();
    auth.authCuentaGoogle();
})