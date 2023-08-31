// Start Quiz
const questionDiv = document.querySelector('.question');
const prevButton = document.getElementById('prev-question');
const nextButton = document.getElementById('next-question');
const submitButton = document.getElementById('submit-quiz');
const feedbackDiv = document.getElementById('quiz-feedback');
const quizContainer = document.getElementById('quiz-container');

const questions = [{
        question: "What does HTML stand for?",
        options: [{
                text: "Hyper Text Markup language",
                correct: true
            },
            {
                text: "High Tech Modern Language",
                correct: false
            },
            {
                text: "Home Tool Management Language",
                correct: false
            }
        ]
    },
    {
        question: "Which tag is used to define a paragraph in HTML?",
        options: [{
                text: "<par>",
                correct: false
            },
            {
                text: "<p>",
                correct: true
            },
            {
                text: "<pgh>",
                correct: false
            }
        ]
    }

];

let currentQuestion = 0;
let userAnswers = [];

// Animation


function animateElement(element, animation) {
    element.classList.add('animate__animated', animation);
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', animation);
    });
}

function displayQuestion() {
    const questionData = questions[currentQuestion];
    const optionsHTML = questionData.options.map((option, index) => `
        <li>
            <input type="radio" name="q${currentQuestion}" value="${index}">
            ${option.text}
        </li>
    `).join('');

    const questionHTML = `
        <p>${questionData.question}</p>
        <ul class="options">
            ${optionsHTML}
        </ul>
    `;

    animateElement(questionDiv, 'animate__fadeInUp');

    questionDiv.innerHTML = questionHTML;

    prevButton.style.display = currentQuestion === 0 ? 'none' : 'block';
    nextButton.style.display = currentQuestion === questions.length - 1 ? 'none' : 'block';
    submitButton.style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';

    userAnswers[currentQuestion] = undefined;
}

function displayFeedback(isCorrect) {
    feedbackDiv.style.display = 'block';
    feedbackDiv.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
}

function calculateScore() {
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer !== undefined && questions[index].options[answer].correct) {
            score++;
        }
    });
    return score;
}

prevButton.addEventListener('click', () => {
    currentQuestion--;
    displayQuestion();
});

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);

    if (!selectedOption) {
        alert('Please select an option before proceeding.');
        return;
    }

    userAnswers[currentQuestion] = parseInt(selectedOption.value);
    currentQuestion++;
    displayQuestion();
});

submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);

    if (!selectedOption) {
        alert('Please select an option before submitting.');
        return;
    }

    userAnswers[currentQuestion] = parseInt(selectedOption.value);
    const score = calculateScore();

    quizContainer.style.display = 'none';
    feedbackDiv.style.display = 'block';
    feedbackDiv.textContent = `You scored ${score} out of ${questions.length}!`;
});

// Initialize quiz
displayQuestion();