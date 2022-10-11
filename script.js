var Ti=document.querySelector("#Time");
var contador=document.querySelector("#numero");
var highscore=document.querySelector("#highscore");
var scorelist=document.querySelector("#score-list");
var questionsSec=document.querySelector("#questionsSec");
var contenedorPreg=document.querySelector(".contenedor-preg");
var createInput=document.createElement("input");
var Submit=document.createElement("button");


var wrong=10;
var timeCount=100;
var Score=0;
var finalScore=0;
var list=0;
var iswinner=false;
var questionOn=0;
var allScore=[];

//Array preguntas, opcione y respuesta
var listQuestions=[
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store _______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];
//Contador
function startTimer() {
    var time;
        time = setInterval(function () {
            timeCount--;
            contador.textContent=timeCount;
        if(questionOn===listQuestions.length){
            clearInterval(time);
            contador.textContent="0";
            Viewhighscore();  
        }else{
            startGame(questionOn);
        }
        if(timeCount===0){
            clearInterval(time);
            Viewhighscore();

        }
        },1000);  
        
}
//Inicio del Quiz
function start(){
    //Titulo
    questionsSec.innerHTML ="";
    var createH1=document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Coding Quiz Challenge";
    questionsSec.appendChild(createH1);
    //Parrafo de inicio 
    var createp1=document.createElement("p");
    createp1.setAttribute("id", "createp1");
    createp1.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answer will penalize your score/time by ten seconds!";
    createp1.setAttribute("style", "color:black; font-size:1.5em; justify-content:center;margin:20px auto; align-text:center;");
    questionsSec.appendChild(createp1);

    //Boton para iniciar quiz
    var startquiz=document.createElement("button");
    startquiz.setAttribute("id", "startquiz");
    startquiz.textContent = "Start Quiz";
    questionsSec.appendChild(startquiz);

    startquiz.addEventListener("click", function(event) {
        event.preventDefault();
        startTimer();
        startGame(questionOn);
    });
    //Botton para ver highscore
        highscore.addEventListener("click", function(event) {
        event.preventDefault();
        showLi();
    });
}