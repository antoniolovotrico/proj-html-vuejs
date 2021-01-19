// 0 - Analizzare le immagini ricevute, selezionare solo quelle idonee allo screenshot del progetto ricevuto e caricarle nella cartella img. 

// 1 - Analizzare lo screenshot ricevuto e riprodurre il layout base del sito in html. 

// 2 - Una volta invividuate le macro-sezioni iniziare a lavorare su ognuna di essa dalla navbar al footer(Navbar e Footer devono essere riempite dalle opzioni data in un istanza vueJs che dinamicamente li passerà all'html).

// 3 - Inizializzare quindi una nuova istanza vue fornendo in data le opzioni necessarie ed eventuali metodi. 

// 4 - Procedere per sezioni fino alla fine del progetto e eseguise commit ad ogni sezione completata. 

// 5 - Una volta completato il progetto inizia la fase di perfezionamento del codice css al fine di una visualizzazione il più fedele possibile all'originale. 

// 6 - eseguire refactoring e migliorare i commenti.

let app = new Vue ({
    el:"#app",
    data:{
        menu:[
            {voice:"home"},
            {voice:"pages"},
            {voice:"courses"},
            {voice:"features"},
            {voice:"blog"},
            {voice:"shop"},
        ]
    }
})