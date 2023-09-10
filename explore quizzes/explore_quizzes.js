// For mobile Navbar - Targeting elements in the HTML document
const openButton = document.querySelector("#open"); // Selects an element with the ID 'open'
const closeButton = document.querySelector("#close"); // Selects an element with the ID 'close'
const navBar = document.querySelector(".nav-menu"); // Selects an element with the class 'nav-menu'

// Event listener for opening the mobile navigation menu
openButton.addEventListener("click", () => {
    // When the 'open' button is clicked, add the class 'open' to the navigation menu
    navBar.classList.add("open")
    // Set the 'aria-expanded' attribute to 'true' for accessibility
    navBar.setAttribute("aria-expanded", true)
})

// Event listener for closing the mobile navigation menu
closeButton.addEventListener("click", () => {
    // When the 'close' button is clicked, remove the class 'open' from the navigation menu
    navBar.classList.remove("open");
    // Set the 'aria-expanded' attribute to 'false' for accessibilty
    navBar.setAttribute("aria-expanded", false);
});

// An array For selection of different courses
const quizList = [{
        title: "HTML Basics",
        description: "Test your knowledge of HTML fundamentals",
        quizLink: "../start quizzes/frontend_html_start_quiz.html"
    },
    {
        title: "CSS Styling",
        description: "Challenge yourself with CSS styling techniques.",
        quizLink: "../start quizzes/frontend_css_start_quiz.html"
    },
    {
        title: "Javascript Basics",
        description: "Test your knowledge of Javascript fundamentals",
        quizLink: "../start quizzes/frontend_javascript_quiz.html"
    },
    {
        title: "React Basics",
        description: "Sharpen your knowledge on Basic react concepts",
        quizLink: "../start quizzes/frontend_react_start_quiz.html"
    }
];
// Get the container where quiz cards will be added
const quizListContainer = document.getElementById("quizList");

// Function to create a quiz card based on a quiz object
function createQuizCard(quiz) {
    // Create a div element to represent the quiz card
    const quizCard = document.createElement("div");
    // Add the class 'quiz' to the quiz card div
    quizCard.classList.add("quiz");
    // Set the inner HTML of the quiz card with information  from the quiz object 
    quizCard.innerHTML = `<h3 style="color: #212121;">${quiz.title}</h3>
<p style="color: #909090;">${quiz.description}</p>
<a href="${quiz.quizLink}" class="cta-button">Start Quiz</a>
`;

// Return the created quiz card element
    return quizCard
}

// Function to load and display quizzes on the webpage
function loadQuizzes() {
    // Iterate over the quizList array
    quizList.forEach(quiz => {
        // Create a quiz card for each quiz object
        const quizCard = createQuizCard(quiz);
        // Append the quiz card to the quizListContainer in the HTML
        quizListContainer.appendChild(quizCard);
    });
}

// Call the loadQuizzes function to display quizzes on the webpage
loadQuizzes()