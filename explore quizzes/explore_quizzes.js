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

const quizList = [{
    title: "HTML Basics",
    description: "Test your knowledge of HTML fundamentals",
    quizLink: "../start quizzes/frontend_html_start_quiz.html"
},
{
    title: "CSS Styling",
    description: "Challenge yourself with CSS styling techniques.",
    quizLink: "css_quiz.html"
},
{
    title: "Javascript Basics",
    description: "Test your knowledge of Javascript fundamentals",
    quizLink: "javascript_quiz.html"
},
{
    title: "React Basics",
    description: "Sharpen your knowledge on Basic react concepts",
    quizLink: "react_quiz.html"
}
];

const quizListContainer = document.getElementById("quizList");

function createQuizCard(quiz) {
const quizCard = document.createElement("div");
quizCard.classList.add("quiz");
quizCard.innerHTML = `<h3 style="color: #212121;">${quiz.title}</h3>
<p style="color: #909090;">${quiz.description}</p>
<a href="${quiz.quizLink}" class="cta-button">Start Quiz</a>
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