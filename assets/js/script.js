//     

//     {
//         question: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
//         answers: {
//             a: "if i == 5 then",
//             b: "if(i== 5)",
//             c: "if i = 5 then",
//             d: "if i = 5"
//         },
//         correctAnswer: "b"
//     },

//     {
//         questions: "How does a 'for' loop start?",
//         answers: {
//             a: "for(i = 0; i <= 5)",
//             b: "for (i = 0; i <= 5; i++)",
//             c: "for i = 1 to 5",
//             d: "for (i <= 5; i++)"
//         },
//         correctAnswer: "b"
//     },

//     {
//         question: "How can you add a comment in a JavaScript?",
//         answers: {
//             a: "//This is a comment",
//             b: "'This is a comment",
//             c: "< !--This is a comment-- >",
//             d: "#This is a comment"
//         },
//         correctAnswer: "a"
//     }
// ];

const startButton = document.getElementById('start-btn');
const introBox = document.getElementById('intro-box');
const questionContainer = document.getElementById('quiz-box');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
const feedbackYes = document.getElementById('yes')
const feedbackNo = document.getElementById('no')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
answerButtonsElement.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    introBox.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
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
function resetState() {
    //     nextButton.classList.add('hide')
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
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct === true) {

        feedbackYes.classList.remove('hide')
    } else {

        feedbackNo.classList.remove('hide')
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
];

// TO DO:
// FINISH TRANSFERRING ALL QUESTIONS INTO CORRECT FORMAT
// FIX DISPLAY OF CORRECT AND WRONG
// SETUP TIMER
// LINK SUBTRACTING TIME FOR WRONG QUESTIONS
// CALCULATE SCORES
// ADD RESULTS
// SUBMIT SCORES AND INITIALS
// ADD HIGH SCORES
// STORE HIGH SCORES IN LOCAL STORAGE
// CLEAR HIGH SCORES