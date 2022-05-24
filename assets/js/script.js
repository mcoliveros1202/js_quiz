const startButton = document.getElementById('start-btn');
const introBox = document.getElementById('intro-box');
const questionContainer = document.getElementById('quiz-box');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
const resultsBox = document.getElementById('results')

let shuffledQuestions, currentQuestionIndex


var timerEl = document.getElementById('timer-sec');

function countdown() {
    var timeLeft = 60;
    timeLeft = setTimeout(function () {
        timeLeft--;
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "";
            resultsBox.classList.remove('hide');
            questionContainer.classList.add('hide');
        }
        console.log('timer is working');
    })
}

startButton.addEventListener('click', startGame)
answerButtonsElement.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
})
function startGame() {
    startButton.classList.add('hide');
    introBox.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
    countdown();
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}


// var count = 60;
// var timer = setInterval(function() {
//   console.log(count);
//   count--;
//   if(count === 0) {
//     stopInterval()
//   }
// }, 1000);

// var stopInterval = function() {
//   console.log('time is up!');
//   clearInterval(timer);
// }

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        // SHOW NEXT QUESTIONS
    } else {
        resultsBox.classList.remove('hide')
        questionContainer.classList.add('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [
            { text: 'javascript', correct: false },
            { text: 'js', correct: false },
            { text: 'script', correct: true },
            { text: 'scripting', correct: false }
        ]
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: [
            { text: "alert('Hello World')", correct: true },
            { text: "msgBox('Hello World')", correct: false },
            { text: "alertBox='Hello World'", correct: false },
            { text: "alertBox('Hello World')", correct: false }
        ]

    },
    {
        question: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
        choices: [
            { text: "if i == 5 then", correct: false },
            { text: "if(i== 5)", correct: true },
            { text: "if i = 5 then", correct: false },
            { text: "if i = 5", correct: false }
        ],

    },

    {
        questions: "How does a 'for' loop start?",
        choices: [
            { text: "for(i = 0; i <= 5)", correct: false },
            { text: "for (i = 0; i <= 5; i++)", correct: true },
            { text: "for i = 1 to 5", correct: false },
            { text: "for (i <= 5; i++)", correct: false }
        ]
    },

    {
        question: "How can you add a comment in a JavaScript?",
        choices: [
            { text: "//This is a comment", correct: true },
            { text: "'This is a comment", correct: false },
            { text: "< !--This is a comment-- >", correct: false },
            { text: "#This is a comment", correct: false }
        ],
    }
];


// TO DO:

// FIX DISPLAY OF CORRECT AND WRONG
// SETUP TIMER
// LINK SUBTRACTING TIME FOR WRONG QUESTIONS
// CALCULATE SCORES
// ADD RESULTS
// SUBMIT SCORES AND INITIALS
// ADD HIGH SCORES
// STORE HIGH SCORES IN LOCAL STORAGE
// CLEAR HIGH SCORES