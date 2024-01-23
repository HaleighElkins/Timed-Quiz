// List of all questions

var questions = [

    {
        prompt: "Who invented the corset?",
        options: ["<Hedley Fishmane>", "<Gytha Weaver>", "<Roxey Ann Caplin>", "<Chancey Crawforde>"],
        answer: "<Rocey Ann Caplin>"
    },

    {
        prompt: "What year did men start wearing corsets?",
        options: ["<1820>", "<1750>", "<1580>", "<1066>"],
        answer: "<1820>"

    },

    {
        prompt: "What was the most popular fashion accessory in the Victorian Era?",
        options: ["<Taxidermy Hats>", "<Dresses with insects>", "<Accessories made out of hair>", "<All of the Above>"],
        answer: "<All of the Above>"
    },

    {
        prompt: "What made Elizabeth I's face white?",
        options: ["<Lead>", "<Mercury>", "<Eggs Shells>", "<Alum>"],
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
var choicesEl = document.querySelector("#options");
var nameEl = document.querySelector("#name");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit-score");
var reStartBtn = document.querySelector("#restart");
var feedbackEl = document.querySelector("#feedback");


// Quiz Start and to hide the front page

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function clockTick() {
    if (time <= 0) {
        quizEnd()
    } else {
        time--
        timerEl.textContent = time;
    }

    console.log("Clock Tick Check")
}

function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestions();
}

// Button for starting quiz

startBtn.onclick = quizStart;



// Loop for Questions

function getQuestions() {
    if (currentQuestionIndex > 4) {
        console.log ("Game Ending")
        quizEnd()
    } else {

        var currentQuestion = questions[currentQuestionIndex];
        var promtEl = document.getElementById("questions-words");
        promtEl.textContent = currentQuestion.prompt;
        choicesEl.innerHTML = "";
        currentQuestion.options.forEach(function (choice, i) {
            var choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choice);
            choiceBtn.textContent = i + 1 + ". " + choice;
            choiceBtn.onclick = questionClick;
            choicesEl.appendChild(choiceBtn);
        });
    }
}



// check for right or wrong questions
function questionClick() {
    if (this.vaule !== questions[currentQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
            timerEl.textContent = time;
            feedbackEl.textContent = 'Wrong!';
            // Check above if it works
            // feedbackEl.syle.color = "red"
            
        } else {
            feedbackEl.textContent = "Correct!";
            feedbackEl.style.color = "green";
        }
        feedbackEl.setAttribute("class", "feedback");
        setTimeout(function () {
            feedbackEl.setAttribute("class", "feedback hide");
        }, 2000);
        currentQuestionIndex++;
        if (currentQuestionIndex > 4) {
            console.log ("Check End Game")
            quizEnd();
        } else {
            getQuestions();
        }
    }


// Quiz End

// Quiz Ending when user answers all questions

function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");


}

// Saving the Score

function saveHighscore() {
    var name = nameEl.vaule();
    if (name !== "") {
        var highscores =
            JSON.parse(window.localStorage.getItem("highscore")) || [];
        var newScore = {
            score: time,
            name: name
        };
        highscore.push(newScore);
        window.localStorage.setItem("highscore", JSON.stringify(highscores));
    }
}

// Saving users score after pressing Enter
function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
}
nameEl.onkeyup = checkForEnter;

// Button for saving highscores

submitBtn.onclick = saveHighscore;



