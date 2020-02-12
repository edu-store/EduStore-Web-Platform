class Apps {
    constructor () {
        this.db = firebase.firestore();

    }

    crearApp (uid,author, name, description, imageLink, videoLink,) {
        return this.db.collection('apps').add({
            uid: uid,
            author: author,
            name: name,
            description: description,
            imageLink: imageLink,
            videoLink: videoLink,
            date: firebase.firestore.FieldValue.serverTimestamp()

        })
        .then( refDoc => {
            console.log(`Id del post = ${refDoc.id}`)
        })
        .catch(error =>{
            console.error(`Error cerar el post => ${error}`);
        

            
        })
    }

    consultarTodasApp(){
                
        
        this.db.collection('apps').onSnapshot(querySnapshot => {
            const apps = document.querySelector('#apps');

                querySnapshot.forEach( app => {
                    let appHTML = this.obtenerAppTemplate(
                        app.data().author,
                        app.data().name,
                        app.data().subject,
                        app.data().description,
                        app.data().videoLink,
                        app.data().imageLink,
                        Utilidad.obtenerFecha(app.data().date.toDate())
                    )
                    
                    const AppElements = this.createTemplate(appHTML)
                    
                    apps.append(AppElements)

                })
        }) 
    
    }
    obtenerAppTemplate (
    author,
    name,
    subject,
    description,
    videoLink,
    imageLink,
    date
    ) {
        return `
        <article id="AppAlgeo" class="Container__List__resource">
        <figure class="Container__Resource_Img">
          <img
            class="Resource_Img"
            src="${imageLink}"
            alt="Imagen del recurso 1"
          />
        </figure>
        <div class="Container__texts_resource">
          <h1>${name}</h1>
          <p>${subject}</p>
          <div class="rating ">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <div class="rating__count">
            <span>5</span>
            <span>(15, 012)</span>
          </div>
        </div>
      </article>
      `

    }

    consultarAppxCategoria ( category = '4nLuih64QJ1ARnoLfXPO' ) {

        this.db.collection('apps')
            .where('category', '==',category)
            .onSnapshot(querySnapshot => {
            const apps = document.querySelector('#appMasBuscadas');
            apps.innerHTML = ''
            if( querySnapshot.empty){
                apps.append(this.obtenerTemplateAppVacio())
            }
            else{
                querySnapshot.forEach( app => {
                    let appHTML = this.obtenerAppTemplate(
                        app.data().author,
                        app.data().name,
                        app.data().subject,
                        app.data().description,
                        app.data().videoLink,
                        app.data().imageLink,
                        Utilidad.obtenerFecha(app.data().date.toDate())
                    )
                    
                    const AppElements = this.createTemplate(appHTML)
                    
                    apps.append(AppElements)

                })
            }
        }) 
    
    }

    createTemplate(HTMLStrig) {
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLStrig;
    
        return html.body.children[0];
      }
    //fin
}