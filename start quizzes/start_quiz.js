// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Select various HTML elements and store references to them in variables
    const startButton = document.getElementById("start-button");
    const quizContent = document.getElementById("quiz-content");
    const quizQuestions = document.querySelectorAll(".question");
    const nextButton = document.getElementById("next-question");
    const prevButton = document.getElementById("prev-question");
    const submitButton = document.getElementById("submit-quiz");
    const quizFeedback = document.getElementById("quiz-feedback");
    const timer = document.getElementById("timer");
    const timeRemainingDisplay = document.getElementById("time-remaining");
    
    // Initialize quiz-related variables
    let currentQuestionIndex = 0;
    let score = 0;
    let timeRemaining = 60; // 1 minutes in seconds
    let timerInterval;
    let quizSubmitted = false; // Variable to track if the quiz has been submitted

    //Function to start the quiz
    function startQuiz() {
        startButton.style.display = "none";
        quizContent.style.display = "block";
        showQuestion(currentQuestionIndex);
        startTimer();
    }

    // Function to start the timer
    function startTimer() {
        timerInterval = setInterval(function () {
            if (!quizSubmitted) {
                timeRemaining--; // Only decrement time if the quiz is not submitted
            }
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                finishQuiz();
            }
            updateTimerDisplay();
        }, 1000);
    }

    // Function to update the timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeRemainingDisplay.textContent = `${minutes <10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    }

    // Set the initial time display to 2 minutes
    updateTimerDisplay()

    // Function to show a specific quiz question
    function showQuestion(index) {
        quizQuestions.forEach((question, i) => {
            if (i === index) {
                question.style.display = "block";
            } else {
                question.style.display = "none";
            }
        });

        if (index === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "inline-block";
        }

        if (index === quizQuestions.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }

        const currentQuestion = quizQuestions[index];
        const options = currentQuestion.querySelector(".options");
        options.style.display = "block";

        // Add event listener for radio buttons
        const radioButtons = options.querySelectorAll("input[type='radio']");
        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener("change", function () {
                // Handle radio button selection here
                // You can access the selected radio button's ID or value
                console.log("Selected: ", this.id); // Example: Logging the selected radio button's ID
            });
        });
    }

    // Function to finish the quiz
    function finishQuiz() {
        quizSubmitted = true; // Set the quizSubmitted variable to true
        quizContent.style.display = "none";
        quizFeedback.style.display = "block";
        quizFeedback.innerHTML = `Quiz completed! Your score is ${score}/${quizQuestions.length}`;
    }
    
    // Array of correct amswers
    const correctAnswers = [
        "q1-a", // Correct answer for question 1
        "q2-c", // Correct answer for question 2
        "q3-b", // Correct answer for question 3
        "q4-a", // Correct answer for question 4
        "q5-a", // Correct answer for question 5
    ];

    // Function to check the user's selected answer
    function checkAnswer() {
        const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);

        if (selectedAnswer) {
            const selectedAnswerId = selectedAnswer.id;
            const correctAnswerId = correctAnswers[currentQuestionIndex];

            if (selectedAnswerId === correctAnswerId) {
                // Correct answer
                score++;
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                finishQuiz();
            }
        } else {
            alert("Please select an option before proceeding.");
        }
    }

    // Add event listeneers to buttons and elements
    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", checkAnswer);
    prevButton.addEventListener("click", () =>
        showQuestion(--currentQuestionIndex)
    );
    submitButton.addEventListener("click", finishQuiz);
});

// Code for mobile navigation menu
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const navBar = document.querySelector(".nav-menu");

openButton.addEventListener("click", () => {
    navBar.classList.add("open")
    navBar.setAttribute("aria-expanded", true)
})

closeButton.addEventListener("click", () => {
    navBar.classList.remove("open");
    navBar.setAttribute("aria-expanded", false);
});