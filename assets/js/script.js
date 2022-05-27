// const startButton = document.getElementById('start-btn');
// const introBox = document.getElementById('intro-box');
// const questionContainer = document.getElementById('quiz-box');
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-btn')
// const resultsBox = document.getElementById('results')
// const submit = document.getElementById('submit')
// const backButton = document.getElementById('back-btn')
// const clearButton = document.getElementById('clear-btn')

// let shuffledQuestions, currentQuestionIndex


// var timerEl = document.getElementById('timer-sec');

// function startTimer(duration, display) {
//     var timer = duration, seconds;
//     setInterval(function () {

//         seconds = parseInt(timer % 60, 10);


//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
    
//     function myStopFunction() {
//         clearTimer(timer);
//     }
//     document.querySelectorAll('correct: false').addEventListener('click', function () {
//         sec -= 15;
//         document.getElementById('timer').innerHTML = '00:' + sec;
//     });
// }



// startButton.addEventListener('click', startGame)
// answerButtonsElement.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion();

// })
// function timerTrigger() {
//     var time = 60,
//         display = document.querySelector('#timer');
//     startTimer(time, display);
// };
// function startGame() {
//     startButton.classList.add('hide');
//     introBox.classList.add('hide');
//     shuffledQuestions = questions.sort(() => Math.random() - .5);
//     currentQuestionIndex = 0;
//     questionContainer.classList.remove('hide');
//     setNextQuestion();

//     timerTrigger();
//     startTimer();
// }

// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.choices.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('answer-btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     });
// }

// function resetState() {
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         // SHOW NEXT QUESTIONS
//     } else {
//         resultsBox.classList.remove('hide')
//         questionContainer.classList.add('hide') 
//     }
// }

// // could be deleted?
// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//         // subtract 15 seconds?
//     }
// }
// // reset colors
// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// var questions = [
//     {
//         question: "Inside which HTML element do we put the JavaScript?",
//         choices: [
//             { text1: 'javascript', correct: false },
//             { text2: 'js', correct: false },
//             { text3: 'script', correct: true },
//             { text4: 'scripting', correct: false }
//         ]
//     },

//     {
//         question: "How do you write 'Hello World' in an alert box?",
//         choices: [
//             { text1: "alert('Hello World')", correct: true },
//             { text2: "msgBox('Hello World')", correct: false },
//             { text3: "alertBox='Hello World'", correct: false },
//             { text4: "alertBox('Hello World')", correct: false }
//         ]

//     },
//     {
//         question: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
//         choices: [
//             { text1: "if i == 5 then", correct: false },
//             { text2: "if(i== 5)", correct: true },
//             { text3: "if i = 5 then", correct: false },
//             { text4: "if i = 5", correct: false }
//         ],

//     },

//     {
//         questions: "How does a 'for' loop start?",
//         choices: [
//             { text1: "for(i = 0; i <= 5)", correct: false },
//             { text2: "for (i = 0; i <= 5; i++)", correct: true },
//             { text3: "for i = 1 to 5", correct: false },
//             { text4: "for (i <= 5; i++)", correct: false }
//         ]
//     },

//     {
//         question: "How can you add a comment in a JavaScript?",
//         choices: [
//             { text1: "//This is a comment", correct: true },
//             { text2: "'This is a comment", correct: false },
//             { text3: "< !--This is a comment-- >", correct: false },
//             { text4: "#This is a comment", correct: false }
//         ],
//     }
// ];


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