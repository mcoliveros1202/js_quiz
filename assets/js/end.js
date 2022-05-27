const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("final-score")
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_HIGH_SCORES = 5;
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
finalScore.innerText = mostRecentScore;

initials.addEventListener("keyup", () => {
    console.log(initials.value);
    saveScoreBtn.disabled = !initials.value;
})

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random()*100),
        name: initials.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/Users/maggieoliveros/Desktop/module_work/js_quiz/high-scores.html");
}