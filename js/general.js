(() => {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
})();

const app = new Apps();
app.consultarTodasApp()

const appxcategoria = new Apps()
appxcategoria.consultarAppxCategoria()
