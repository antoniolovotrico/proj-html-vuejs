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
        gogi:[false,false,false],
        visib: true,
        popi : false,
        menu:[
            {voice:"home"},
            {voice:"pages"},
            {voice:"courses"},
            {voice:"features"},
            {voice:"blog"},
            {voice:"shop"},
        ],
        skill:[
            {
                title: "Idea Discussion",
                picture: "./assets/img/section2_01.png",
                overview: "Get teamed up with the specialists who work and teach coding for years at famous universities."
            },
            {   
                title: "Web Development",
                picture: "./assets/img/section2_02.png",
                overview: "Learn to start building a webpage from scratch. You decide your own pace, course and speed."
            },
            {   
                title: "System Administration",
                picture: "./assets/img/section2_03.png",
                overview: "Learners are encouraged to study the mechanism and structure of system administration."
            },
            {   
                title: "Graphic Design",
                picture: "./assets/img/section2_04.png",
                overview: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness."
            }   
        ],
        qualIndex : "0",
        quality:[
            {   
                hide: true,
                title: "Multiple Platforms Supported for teaching & Studying",
                overview: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a shor time, you can always access our knowledge base from any device."
            },
            {   
                hide: true,
                title: "Multiple Course Partecipation at the Same Time",
                overview: "Learn to start building a webpage from scratch. You decide your own pace, course and speed."
            },
            {   
                hide: true,
                title: "Track Study Progress & Deliver Prompt Feedback",
                overview: "Learners are encouraged to study the mechanism and structure of system administration."
            }
        ],
        dataSection:[
            {
                num:"1.926",
                desc:"finished session",
            },
            {
                num:"3.092+",
                desc:"enrolled leaners",
            },
            {
                num:"200",
                desc:"online instructors",
            },
            {
                num:"100%",
                desc:"satisfaction rate",
            }
        ]
    },
    methods:{
        showFunc:function(i){
            // this.qualIndex = i;
            // this.visib = false;
            // this.popi = true;
            // console.log(this.qualIndex);

            this.$set(this.gogi,i,true)
            
        },
        hideFunc:function(i){
            // this.qualIndex = i;
            // this.visib = true;
            // this.popi = false;

            this.$set(this.gogi,i,false)
            
        }
        

    },

})