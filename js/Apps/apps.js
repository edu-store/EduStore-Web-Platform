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
                
        try {
            this.db.collection('apps').onSnapshot(querySnapshot => {
                const apps = document.querySelector('#apps');
    
                    querySnapshot.forEach( app => {
                        let appHTML = this.obtenerAppTemplate(
                            app.id,
                            app.data().author,
                            app.data().name,
                            app.data().subject,
                            app.data().description,
                            app.data().videoLink,
                            app.data().imageLink,
                            Utilidad.obtenerFecha(app.data().date.toDate())
                        )
                        
                        const AppElements = this.createTemplate(appHTML)
                        
                        this.addEventClick(AppElements)
                        
                        apps.append(AppElements)
                    })
            }) 
            
        } catch (error) {
            console.log(error)
        }
        
    }


    addEventClick(elements) {
        elements.addEventListener('click', () =>{
            modal_app.style.animation = 'animationIn 1s forwards';
            overlay_app.classList.add('active');
            const id = elements.dataset.id;
            const data = this.consultarAppxid(id)
            console.log(data)
        })
    }
    

    obtenerAppTemplate (
    id,
    author,
    name,
    subject,
    description,
    videoLink,
    imageLink,
    date
    ) {
        return `
        <article data-id="${id}" class="Container__List__resource">
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
          <!-- <div class="rating ">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <div class="rating__count">
            <span>5</span>
            <span>(15, 012)</span>
          </div>
          -->
        </div>
      </article>
      `

    }

    consultarAppxCategoria ( category = '4nLuih64QJ1ARnoLfXPO' ) {

        this.db.collection('apps')
            .where('category', '==',category)
            .onSnapshot(querySnapshot => {
            const apps = document.querySelector('#appMasBuscadas');
                       
                querySnapshot.forEach( app => {
                    let appHTML = this.obtenerAppTemplate(
                        app.id,
                        app.data().author,
                        app.data().name,
                        app.data().subject,
                        app.data().description,
                        app.data().videoLink,
                        app.data().imageLink,
                        Utilidad.obtenerFecha(app.data().date.toDate())
                    )
                    
                    const AppElements = this.createTemplate(appHTML)
                    
                    this.addEventClick(AppElements)

                    apps.append(AppElements)

                })
        }) 
    
    }

    consultarAppxid (id) {

            const title_app = document.querySelector('#title_app');
            const subtitle_app = document.querySelector('#subtitle_app');
            const description_app = document.querySelector('#description_app');
            const img_link_app = document.querySelector('#img_link_app');
        

            let ref = this.db.collection('apps').doc(id)
            ref.get().then(respDoc => {
            
            modal_app.style.animation = 'animationIn 1s forwards';
            overlay_app.classList.add('active');
              title_app.textContent = respDoc.data().name;
              subtitle_app.textContent = respDoc.data().subject;
              description_app.textContent = respDoc.data().description;
              img_link_app.setAttribute("src",respDoc.data().imageLink);
            })
         
    }


    createTemplate(HTMLStrig) {
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLStrig;
    
        return html.body.children[0];
      }
    //fin
}