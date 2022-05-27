const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 60;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "javascript",
        choice2: "js",
        choice3: "script",
        choice4: "scripting",
        answer: 3

    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "alert('Hello World')",
        choice2: "msgBox('Hello World')",
        choice3: "alertBox='Hello World'",
        choice4: "alertBox('Hello World')",
        answer: 1

    },
    {
        question: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
        choice1: "if i == 5 then",
        choice2: "if(i== 5)",
        choice3: "if i = 5 then",
        choice4: "if i = 5",
        answer: 2
    },
    {
        question: "How does a 'for' loop start?",
        choice1: "for(i = 0; i <= 5)",
        choice2: "for (i = 0; i <= 5; i++)",
        choice3: "for i = 1 to 5",
        choice4: "for (i <= 5; i++)",
        answer: 2

    },
    {
        question: "How can you add a comment in a JavaScript?",
        choice1: "//This is a comment",
        choice2: "'This is a comment",
        choice3: "< !--This is a comment-- >",
        choice4: "#This is a comment",
        answer: 1
    }
];

// CONSTANTS
const INCORRECT_BONUS = -15;
const MAX_QUESTIONS = 5

// START QUIZ
startGame = () => {
    questionCounter = 0;
    score = 60;
    availableQuestions = [...questions];
    getNewQuestion();
};

// NEXT QUESTION 
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //got to the end page
        return window.location.assign();
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

// DISPLAY FOR CORRECT OR INCORRECT ANSWER SELECTION
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if(classToApply === "incorrect") {
                decrementScore(INCORRECT_BONUS);
            }


        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

decrementScore = num => {
    score = --num;
    scoreText.innerText = score;
};

// START THE QUIZ!
startGame();