// Objets ****************************************************
const quiz = [
    {
        "number": 1,
        "question": "Combien existe t-il de types de techniques en peinture ?",
        "answers": ["3", "5", "10", "Beaucoup plus"],
        "correct_answer": "Beaucoup plus"
    },

    {
        "number": 2,
        "question": " Combien existe t-il de types de pastel différents ?",
        "answers": ["1", "2", "3", "4"],
        "correct_answer": 2
    },

    {
        "number": 3,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },

    {
        "number": 4,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },

    {
        "number": 5,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },

    {
        "number": 6,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },

    {
        "number": 7,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },

    {
        "number": 8,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },

    {
        "number": 9,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },

    {
        "number": 10,
        "question": " Quel est l'avantage le plus surprenant en dessin traditionnel ?",
        "answers": ["Le prix du matériel", "La vente", "la relaxation", "les trois réponses"],
        "correct_answer": "La vente"
    },
];

const player = {

    life : 3,
    score : 0
};


// Variables ***************************************************
let elt_life = document.querySelector(".life p");
let elt_score = document.querySelector(".score p");
let elt_nb_Q = document.querySelector(".nb_question p");
let elt_screen_game = document.querySelector("main");
let elt_screen = document.querySelector(".container > section");
let btn_prev_next = document.getElementById("change_question").children;


let elt_form = document.createElement("form");
elt_form.action = "#";
elt_form.method = "get";
elt_form.id = "form_answer";

let n_question = 1;
let btn_radio;
let btn_label;
let guess = false;
let id_answer = 0;
let game_over = false;




// Function *****************************************************
// Game
function afficher_Q_A(n, item) {

        let new_question = document.createElement("h2");
        new_question.innerText = item.question;

        if(item.number == n){
            elt_screen_game.appendChild(new_question);
        }

};

function afficher_answer(n, item, answer) {
    id_answer++
    let btn_answer = document.createElement("input");
    btn_answer.id = "option" + id_answer;
    btn_answer.className = "btn-check";
    btn_answer.name = "options";
    btn_answer.type = "radio";
    btn_answer.value = answer;

    let label_radio = document.createElement("label");
    label_radio.setAttribute("for", "option" + id_answer);
    label_radio.classList.add("btn", "btn-secondary", "radio");
    label_radio.innerText = answer;

    // btn_radio = [];
    // btn_radio.push(btn_answer);

    btn_label = [];
    btn_label.push(label_radio);

    if(item.number == n){
        elt_form.appendChild(btn_answer);
        elt_form.appendChild(label_radio);
        elt_screen_game.appendChild(elt_form);
    }
    
};


function check_answer(item){
    for(let input of btn_label){
        input.addEventListener("click", () =>{
            
            if(item.correct_answer == input.innerText){
                // Good answer ! Mettre le bg en vert
                input.classList.add("good_answer");

                // Ajouter 10 points au score du joueur
                player.score += 10;
            }else {
                // Wrong answer ! Mettre le bg en rouge
                input.classList.add("wrong_answer");

                // Mauvaisréponse, enlever une vie au joueur
                player.life -= 1;

                if(player.life == 0){
                    // afficher game over
                    game_over = true;
                    Game_over();
                }
            }

            // Afficher vie + score + numéro question
            afficher_header();
        });
    }
};

function afficher_header(){

    // Actualiser les valeurs
    elt_life.innerText = player.life;
    elt_score.innerText = player.score;
    elt_nb_Q.innerText = n_question + " / 10";
};

function game(){

    for(let item of quiz) {
        // Afficher la question
        afficher_Q_A(n_question, item);
        for(let answer of item.answers){
            // Afficher les réponses
            afficher_answer(n_question, item, answer);
            check_answer(item);
            afficher_header();
        }
    };
}


// Screen Game over
function Game_over() {
    elt_screen.innerHTML = "";
    
    let elt_section_end = document.createElement("section");
    elt_section_end.id = "end";
    
    if(game_over) {

        let elt_titre_end = document.createElement("h1");
        elt_titre_end.innerText = "Game Over";

        // Ajouter le titre dans l'écran de fin partie
        elt_section_end.appendChild(elt_titre_end);

    }else {
        // Fin de partie, afficher ecran score
        let elt_star_end = document.createElement("img");
        elt_star_end.src = "./images/star_score.png";

        let elt_star2_end = document.createElement("img");
        elt_star2_end.src = "./images/star2.png";

        let elt_p_end = document.createElement("p");
        elt_p_end.innerText = player.score;

        let elt_btn_rejouer_end = document.createElement("button");
        elt_btn_rejouer_end.id = "rejouer";
        elt_btn_rejouer_end.type = "submit";
        elt_btn_rejouer_end.innerText = "Rejouer";

        // Ajouter les éléments dans lasection qui affichera l'écran de fin de partie
        elt_section_end.appendChild(elt_star_end);
        elt_section_end.appendChild(elt_star2_end);
        elt_section_end.appendChild(elt_p_end);
        elt_section_end.appendChild(elt_btn_rejouer_end);
    }

    
    // Afficher l'ecran dans le dom
    elt_screen.appendChild(elt_section_end);
    elt_screen.id = "fd_screen";
};

// Lancement du jeu , ecran home
game();
// Boucle du jeu ****************************************************
// Au clic des boutons prev et next
for(let out of btn_prev_next){
    out.addEventListener("click", ()=> {
        elt_screen_game.innerHTML = "";
        elt_form.innerHTML ="";

        // Changement de question - réponse
        if(out.id == "next"){
            n_question += 1;
        }else {
            if(n_question > 1){
                n_question -= 1;
            }
        }

        game();

        // Afficher Ecran fin de partie *************************************
        if(n_question > 10){
            n_question = 10;
            game_over = false;
            Game_over();
        };
    })
};


