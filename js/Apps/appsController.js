function insertApp(){

const app = new Apps;
const user = firebase.auth().currentUser;

//validar que el usuario este autenticado

if ( user == null) {
    alert('Debes estar autenticado');
}

//obtener los datos ingresados en los inputs

const name = 'Mi Expresion Cuenta', description = "App para apoyar a personas con deficiencia auditiva",videoLink='';
const imageLink = sessionStorage.getItem('imgNewApp') == 'null'
    ? null
    : sessionStorage.getItem('imgNewApp')
app
    .crearApp(
        user.uid,
        user.email,
        name,
        description,
        imageLink,
        videoLink
    )
    .then( resp => {
        alert('App agregada correctamente');
    })
    .catch(error => {
        alert(`Error => ${error}`);
    })

} 