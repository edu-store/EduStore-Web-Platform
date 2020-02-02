const $BtnLogIn = document.getElementById("btn__login");
const $BtnSignUp = document.querySelector('#btn__Sign__up')

$BtnLogIn.addEventListener("click", () => {
    
    const auth = new Autentication()
        auth.crearCuentaEmailPass( 'jehaann07carlos@gmail.com', '123456789', 'Jehaann Manzanares' )
});

$BtnSignUp.addEventListener('click', () => {
    const auth = new Autentication()
    auth.autEmailPass('jehaann07carlos@gmail.com', '123456789')
})