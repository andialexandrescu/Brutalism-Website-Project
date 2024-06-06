/* register.html */
function display_date_time()
{
    document.getElementById("date_text").innerHTML = new Date();
}

// generare quiz content + schimbare proprietati atribute la raspunsuri corecte (culori, folosind math.random()), ultima intrebare a bonus question (punctaj mai mare + afiseaza la final daca user-ul a stiut raspunsul la ea)
const questions = [ // fiecare obiect are atributele question, choices, correct si answers
    {question: "When did Brutalist architecture emerge?", choices: [{text: "1950s", correct: true}, {text: "1960s", correct: false}, {text:"1970s", correct:false}, {text:"1980s", correct:false}]}, 
    {question: "What materials are featured in the style but are not predominant?", choices: [{text:"steel, glass, brick", correct:true}, {text:"concrete, timber", correct:false}, {text:"iron", correct:false}, {text:"terracota", correct:false}]},
    {question: "What inspired Brutalist architects in their design approach?", choices: [{text:"post-war avant-garde art", correct:true}, {text:"rococo art", correct:false}, {text:"focus on sustainability and adaptable spaces", correct:false}, {text:"bauhaus movement", correct:false}]},
    {question: "Why did Brutalism gain popularity for institutional buildings globally?", choices: [{text:"aesthetics and durability", correct:false}, {text:"influential arhitects", correct:false}, {text:"political reasons", correct:false}, {text:"all answers", correct:true}]},
    {question: "What are some key characteristics of Brutalist architecture in terms of appearance and construction?", 
    choices: [{text:"repetitive angular geometries, varied textures and materials, a sense of mass and scale, and a focus on utility over design aesthetics", correct:true}, 
    {text:"use of intricate carvings, decorative columns, and elaborate cornices, showcasing a rich and detailed design aesthetic", correct:false}, 
    {text:"breaks away from traditional architectural styles by embracing asymmetry, fragmentation, and a mix of architectural motifs", correct:false}, 
    {text:"clean lines, open floor plans, it often features a minimalist aesthetic", correct:false}]}
];

let qIndex = 0; // indexul intrebarii curente
//let time;
let score = 0;

const questionElement = document.getElementById('question_text');
const choicesContainer = document.getElementById('choices_container');
const submitButton = document.getElementById('submit_answer');

function start_quiz()
{
    qIndex = 0;
    score = 0;
    submitButton.innerHTML = "Submit answer";
    create_question();
}

function create_question() // crearea efectiva a elementelor html pt a afisa intrebarile din quiz; intrebare curenta
{
    reset_question(); // se resteaza intrebarea anterioara
    // afisare fiecarei intrebari pe rand
    //time = questions.length * 10;
    let currentQ = questions[qIndex];
    questionElement.innerHTML = qIndex + 1 + ". " + currentQ.question; // extragerea proprietatii de question a obiectului currentQ

    currentQ.choices.forEach(answer => { // se itereaza pentru fiecare varianta de raspuns care e de fapt un tuplu
        const button = document.createElement("button");
        button.innerHTML = answer.text; // prima val a tuplului
        button.classList.add("button_opt"); // se adauga succesiv pentru orice buton care face parte din optiunile de raspunsuri
        choicesContainer.appendChild(button); // trebuie adaugat in div
        if(answer.correct) // nevid
        {
            button.dataset.correct = answer.correct; // se adauga true sau false la dataset
        }
        button.addEventListener("click", select_answer); // apeleaza functia definita mai jos
    });
}

function reset_question()
{
    submitButton.style.display = "none"; // se ascunde butonul de submit la inceputul fiecarei noi intrebari
    while(choicesContainer.firstChild) // daca butoanele adaugate exista in intrebarea anterioara, vor fi sterse
    {
        choicesContainer.removeChild(choicesContainer.firstChild); // stergere succesiva a primului copil
    }
}

function select_answer(e) // parametrul e un event
{
    const selectedBtn = e.target; // se adauga butonul curent selectat din target
    const isValid = selectedBtn.dataset.correct === "true"; // daca proprietatea correct din dataset-ul butonului este true (strict equality check)
    // parte de debugging
    console.log('Selected button:', selectedBtn);
    console.log('Data correct:', selectedBtn.dataset.correct);
    console.log('Is valid:', isValid);

    if(isValid)
    {
        score++; // incrementare scor gradual
        console.log('Current score:', score);
        selectedBtn.classList.add("correct");
    } else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(choicesContainer.children).forEach(button =>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    submitButton.style.display = "block";
}

function display_score()
{
    reset_question();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // backticks neaparat
    submitButton.innerHTML = "Play again";
    submitButton.style.display = "block"; // nu mai e hidden
}

function check_status(){
    qIndex++; // global
    if(qIndex < questions.length) // cat timp exista intrebari ele vor fi afisate succesiv
    {
        create_question();
    } else
    {
        display_score();
    }
}

submitButton.addEventListener("click", () => {
    if(qIndex < questions.length) // redirectionare pentru a vedea daca sa afiseze scorul sau sa continue cu intrebarile (daca mai exista elemente in questions)
    {
        check_status();
    } else
    {
        start_quiz();
    }
});

start_quiz();