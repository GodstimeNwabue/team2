// // Instructions and information

// const InstructionsText = "Instructions:\n\n1. Read each question carefully before answering.\n2. You have 10 minutes to complete the quiz.\n3. Click the 'Start' button when you're ready to begin."

// const instructionsContainer = document.getElementById('instructions');
// instructionsContainer.textContent = InstructionsText;

// const startButton = document.getElementById('start-button');
// startButton.style.display = 'block'; // display the button after instructions

// startButton.addEventListener('click', function(){
//     //Hide instructions and start button
//     instructionsContainer.style.display = 'none';
//     startButton.style.display = 'none'

//     // Start the quiz logic here
//     startQuiz();
// })

// function startQuiz() {
//     // You can add your quiz logic here to load questions and start the timer
//     alert('Quiz started!'); // Replace this with your actual quiz logic
// }

// Add your JavaScript code here
const instructionsText = "Instructions:\n\n1. Read each question carefully before answering.\n2. You have 10 minutes to complete the quiz.\n3. Click the 'Start' button when you're ready to begin.";

// const instructionsContainer = document.getElementById('instructions');
// instructionsContainer.textContent = instructionsText;

const startButton = document.getElementById('start-button');
const quizContainer = document.getElementById('quiz-container')
startButton.addEventListener('click', function () {
    quizContainer.style.display = 'none'
    quizContainer.style.display = 'block'

    // Start the quiz logic here
    startQuiz();
});

function startQuiz() {
    // You can add your quiz logic here to load questions and start the timer
    alert('Quiz started!'); // Replace this with your actual quiz logic
}

// Add jacascript code to show the quiz container when the "Start" bitton is clicked

