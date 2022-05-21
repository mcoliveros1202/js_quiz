var startButton = document.getElementById("startButton")
function startQuiz () {
    var startScreenEl = document.getElementById("quiz-start");

    startScreenEl.setAttribute("class", "hide");
    console.log("test")
}

startButton.onclick = startQuiz;