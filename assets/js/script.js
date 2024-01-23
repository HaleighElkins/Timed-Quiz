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
var feedbackEl = document.querySelector("#feedback");


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

// Loop for Questions

function getQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    var promtEl = document.getElementById("question-words");
    promtEl.textContent = currentQuestion.prompt;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(function(choice, i){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick;
        optionsEl.appendChild(choiceBtn);
    });
}


// check for right or wrong questions
 function questionClick() {
    if (this.vaule !== questions[currentQuestionIndex].index){
        time -=10;
        if (time <0){
            time = 0;
        }
    timerEl.textContent = time;
    // feedback?
    feedbackEl.textContent = 'Wrong! The correct answer is: ${questions[currentQuestionIndex].answer}.';
    // Check above if it works
    feedbackEl.syle.color ="red";
    } else { 
        feedbackEl.textContent = "Correct!"
        feedbackEl.style.color = "green"
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questionClick.length){
        quizEnd();
    } else {
        getQuestions();
    }

// Quiz End

// Quiz Ending when user answers all questions

function quizEnd() {
    clearInterval(timerEl);
    var endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}

// Quiz End when the timer reaches 0

function clockTick() {
    time --;
    timerEl.textContent - time;
    if (time <= 0) {
        quizEnd();
    }
}

















 }












