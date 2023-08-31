// const mobileMenu = document.querySelector('.mobile-menu');

// const navLinks = document.querySelector('.nav-links');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active')
// })



// list of quizz cards
const quizList = [{
        title: "HTML Basics",
        description: "Test your knowledge of HTML fundamentals"
    },
    {
        title: "CSS Styling",
        description: "Challenge yourself with CSS styling techniques."
    },
    {
        title: "Javascript Basics",
        description: "Test your knowledge of Javascript fundamentals"
    },
    {
        title: "React Basics",
        description: "Sharpen your knowledge on Basic react concepts"
    }
];

const quizListContainer = document.getElementById("quizList");

function createQuizCard(quiz) {
    const quizCard = document.createElement("div");
    quizCard.classList.add("quiz");
    quizCard.innerHTML = `<h3 style="color: #212121;">${quiz.title}</h3>
<p style="color: #909090;">${quiz.description}</p>
<a href="../Start Quiz/quiz-detail.html" class="cta-button">Start Quiz</a>
`;
    return quizCard
}

function loadQuizzes() {
    quizList.forEach(quiz => {
        const quizCard = createQuizCard(quiz);
        quizListContainer.appendChild(quizCard);
    });
}

loadQuizzes()