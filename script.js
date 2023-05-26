const apiURL = 'https://api.pexels.com/v1';
const APIKey = "ynXusvPujxQx7GGvjETwfOkmxpW53o03osOAQIFeGpYl8ZnL9AgCXvth"

let portrait = document.getElementById('portrait');

function pictures() {

    fetch(apiURL + '/search?query=people', { headers: { Authorization: APIKey } })
        .then((response) => response.json())
        .then((res) => pics(res.photos))
        .catch((error) => console.error(error));
}

function pics(input) {
    for (const photo of input) {
        console.log(input);
        let img = document.createElement('img');
        let card = document.createElement('div');
        card.classList.add('card'); 
        card.classList.add('col-4');
        img.src = photo.src.medium;
        card.appendChild(img);
        portrait.appendChild(card);

    }
}

pictures();


/*
1- Viene dichiarata una costante apiURL che rappresenta l'URL base dell'API di Pexels.

2-  Viene dichiarata una costante APIKey che rappresenta la chiave di autenticazione per l'accesso all'API di Pexels. 
Assicurati di utilizzare una chiave valida fornita da Pexels per eseguire correttamente le richieste all'API.

3- Viene selezionato un elemento HTML con l'ID "portrait" utilizzando document.getElementById('portrait'). 
Questo elemento sarà il contenitore in cui verranno inserite le immagini.

4- Viene definita la funzione pictures(). Questa funzione esegue una richiesta fetch all'API di Pexels 
per ottenere immagini di case.

5- La richiesta fetch viene eseguita utilizzando l'URL dell'API concatenato con l'endpoint "/search" e il parametro di query "query=house". 
La chiave di autenticazione viene inclusa nell'header della richiesta utilizzando {headers: {Authorization: APIKey}}.

6- Viene utilizzato .then() per gestire la risposta dalla richiesta fetch. Il metodo .then() 
prende una funzione di callback che viene eseguita quando la risposta viene ricevuta correttamente.

7- Nella prima funzione di callback, response.json() viene chiamato per estrarre i dati JSON dalla risposta.

8- Nella seconda funzione di callback, pics(res.photos) 
viene chiamato per elaborare i dati delle foto ottenute e visualizzarle nel documento HTML.

9-  Viene utilizzato .catch() per gestire eventuali errori durante la richiesta fetch. Se si verifica un errore, 
verrà stampato un messaggio di errore nella console.

10- La funzione pics(input) viene definita per gestire i dati delle foto ottenuti dalla richiesta fetch. Per ogni foto nell'input, 
viene creato un elemento <img> utilizzando document.createElement('img'). 
L'URL dell'immagine viene assegnato alla proprietà src dell'elemento <img> utilizzando photo.src.medium. 
Infine, l'elemento <img> viene aggiunto come figlio all'elemento con l'ID "portrait" utilizzando portrait.appendChild(img).

11- Infine, viene chiamata la funzione pictures() per avviare il processo di recupero e visualizzazione delle immagini.


*/