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