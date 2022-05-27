const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores") || []);
const clearList = document.getElementsByClassName("btn");
highScoresList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join("");

function removeAll(){
    document.getElementById("highScoresList").innerHTML = "";
}