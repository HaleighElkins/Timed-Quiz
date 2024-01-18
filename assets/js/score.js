var scoresBtn = document.querySelector("#highscores")

// Clearing the scores

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
document.getElementById("clear").onclick = clearHighscores;



// Scores in order
function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
        return b.score - a.score;
});




}




