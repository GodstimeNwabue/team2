document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const quizContent = document.getElementById("quiz-content");
    const quizQuestions = document.querySelectorAll(".question");
    const nextButton = document.getElementById("next-question");
    const prevButton = document.getElementById("prev-question");
    const submitButton = document.getElementById("submit-quiz");
    const quizFeedback = document.getElementById("quiz-feedback");
    const timer = document.getElementById("timer");
    const timeRemainingDisplay = document.getElementById("time-remaining");

    let currentQuestionIndex = 0;
    let score = 0;
    let timeRemaining = 600; // 10 minutes in seconds
    let timerInterval;
    let quizSubmitted = false; // Variable to track if the quiz has been submitted

    function startQuiz() {
        startButton.style.display = "none";
        quizContent.style.display = "block";
        showQuestion(currentQuestionIndex);
        startTimer();
    }

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

    function updateTimerDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeRemainingDisplay.textContent = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    }

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

    function finishQuiz() {
        quizSubmitted = true; // Set the quizSubmitted variable to true
        quizContent.style.display = "none";
        quizFeedback.style.display = "block";
        quizFeedback.innerHTML = `Quiz completed! Your score is ${score}/${quizQuestions.length}`;
    }

    function checkAnswer() {
        const selectedAnswer = document.querySelector(
            `input[name="q${currentQuestionIndex + 1}"]:checked`
        );
        if (selectedAnswer) {
            // Handle the user's selection here if needed
            // You can access the selected radio button's value using 'selectedAnswer.value'
            // Example: console.log("Selected answer:", selectedAnswer.value);

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

    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", checkAnswer);
    prevButton.addEventListener("click", () =>
        showQuestion(--currentQuestionIndex)
    );
    submitButton.addEventListener("click", finishQuiz);
});

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
