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
        qualIndex :[false,false,false],
        quality:[
            {   
                hide: false,
                title: "Multiple Platforms Supported for teaching & Studying",
                overview: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a shor time, you can always access our knowledge base from any device."
            },
            {   
                hide: false,
                title: "Multiple Course Partecipation at the Same Time",
                overview: "Learn to start building a webpage from scratch. You decide your own pace, course and speed."
            },
            {   
                hide: false,
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
        ],
        courses:[
            {   
                picture: "./assets/img/section4_01.jpg",
                title: "Learning to write as a professional Author",
                author: "BLanche Fields",
                authorImg:"./assets/img/section4_001.jpeg",
                students:"50",
                lessons:"20",
                price:"$40.00"
            },
            {   
                picture: "./assets/img/section4_02.jpg",
                title: "Customer-centric Info-Tech Strategies",
                author: "Maggie Strickland",
                authorImg:"./assets/img/section4_002.jpeg",
                students:"769",
                lessons:"24",
                price:"Free"
            },
            {   
                picture: "./assets/img/section4_03.jpg",
                title: "Open Programming Courses for Everyone: Python",
                author: "Maggie Strickland",
                authorImg:"./assets/img/section4_002.jpeg",
                students:"62",
                lessons:"17",
                price:"$19.00"
            },
            {   
                picture: "./assets/img/section4_04.jpg",
                title: "Academic Listening and Note-taking",
                author: "BLanche Fields",
                authorImg:"./assets/img/section4_001.jpeg",
                students:"67",
                lessons:"14",
                price:"$26.00"
            },
            {   
                picture: "./assets/img/section4_05.jpg",
                title: "Master jQuery in a Short Period of Time",
                author: "BLanche Fields",
                authorImg:"./assets/img/section4_001.jpeg",
                students:"51",
                lessons:"6",
                price:"$39.00"
            },
            {   
                picture: "./assets/img/section4_06.jpg",
                title: "Learning to write as a professional Author",
                author: "BLanche Fields",
                authorImg:"./assets/img/section4_001.jpeg",
                students:"50",
                lessons:"20",
                price:"$59.00"
            }
        ],
    },
    methods:{
        showFunc:function(i){
            // this.qualIndex = i;
            // this.visib = false;
            // this.popi = true;
            // console.log(this.qualIndex);

            this.$set(this.qualIndex,i,true)
            
        },
        hideFunc:function(i){
            // this.qualIndex = i;
            // this.visib = true;
            // this.popi = false;

            this.$set(this.qualIndex,i,false)
            console.log(this.qualIndex[i]);
        }
        

    },

})