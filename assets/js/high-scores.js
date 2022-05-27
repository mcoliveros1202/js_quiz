const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores") || []);
const clearList = document.getElementById("clear-btn");

highScoresList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join("");

clearList.addEventListener("click", clearScoresList);

function clearScoresList(){
    localStorage.clear();
    document.getElementById("highScoresList").innerHTML = "";
};

