
class Autentication {
    autEmailPass ( email, password) {
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( result => {
            if (result.user.emailVerified) {
                alert(`Bienvenido ${result.user.displayName} ya estas logeado`)
            }
            else{
                firebase.auth().signOut()
                alert('registrate ')
            }
        })
    }
crearCuentaEmailPass (email, password, nombres){

    firebase
    .auth()
    .createUserWithEmailAndPassword( email, password)
    .then( result => {
            result.user.updateProfile({
                displayName : nombres
            })
            
            const configuration = {
                url : 'http://localhost:5500/'
            }
            
            result.user.sendEmailVerification( configuration )
            .catch( error =>{
                console.error(error)
                console.log(error.message)
            })
            
            firebase.auth().signOut()
            alert(`Bienvenido ${nombres} debes verificarte`)
            
        })
            .catch( error => {
                console.error(error)
                console.log(error.message)
            })
    
    }

    authCuentaGoogle () {
        const provider = new firebase.auth.GoogleAuthProvider()
    
        firebase.auth().signInWithPopup(provider)
        .then(result => {
          //$('#avatar').attr('src', result.user.photoURL)
          //$('.modal').modal('close')
          HideModal(),
          alert(`Bienvenido ${result.user.displayName} !! `)
        })
        .catch(error =>{
          console.error(error)
          alert(`Error al autenticarse con google: ${error} `)
        })
      }
}
