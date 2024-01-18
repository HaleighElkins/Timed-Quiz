// List of all questions

var questions =  [

{
    prompt: "Who invented the corset?",
    options: ["<Hedley Fishmane>", "<Gytha Weaver>", "<Roxey Ann Caplin>", "<Chancey Crawforde>"],
    answer:"<Rocey Ann Caplin>"
},

{
    prompt: "What year did men start wearing corsets?",
    options: ["<1820>", "<1750>", "<1580>", "<1066>"],
    answer:"<1820>"

},

{
    prompt: "What was the most popular fashion accessory in the Victorian Era?",
    options: ["<Taxidermy Hats>", "<Dresses with insects>", "<Accessories made out of hair>", "<All of the Above>"],
    answer: "<All of the Above>"
},

{
    prompt: "What made Elizabeth I's face white?", 
    options: ["<Lead>", "<Mercury>","<Eggs Shells>","<Alum>"],
    answer: "<Lead>"
},

{
    prompt: "Who was the most popular disgners of the Victorian Era?",
    options: ["<Lady Duff Gordon>", "<Jacques Doucet>", "<Jeanne Paquin and Worth>", "<All of the Above>"],
    answer: "<All of the Above"
}];

// Dom Elements

var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var optionsEl = document.querySelector("#options");
var nameEl = document.querySelector("#name");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var reStartBtn = document.querySelector("#restart");


// Quiz Start and to hide the front page

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestions();
}

console.log("quiz start- landing page");













