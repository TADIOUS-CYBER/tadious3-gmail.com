
const questions = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Home Tool Markup Language",
            "Hyperlink Text Management Language"
        ],
        answer: 0
    },
    {
        question: "2. Which language styles a website?",
        options: [
            "SQL",
            "CSS",
            "HTML",
            "MySQL"
        ],
        answer: 1
    },
    {
        question: "3. Which language adds interactivity to a website?",
        options: [
            "CSS",
            "HTML",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    }
];

const questionsContainer = document.getElementById("questions");
const quizForm = document.getElementById("quizForm");
const result = document.getElementById("result");
const progress = document.getElementById("progress");
const submitButton = document.getElementById("submitButton");

// Display the questions
function displayQuestions() {
    progress.textContent = `Total questions: ${questions.length}`;

    questions.forEach((q, index) => {
        const section = document.createElement("section");
        section.className = "question";

        const heading = document.createElement("p");
        heading.textContent = q.question;
        section.appendChild(heading);

        q.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.className = "option";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = optionIndex;

            label.appendChild(input);
            label.appendChild(
                document.createTextNode(" " + option)
            );

            section.appendChild(label);
        });

        questionsContainer.appendChild(section);
    });
}

// Mark the answers and calculate the score
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selected && Number(selected.value) === q.answer) {
            score++;
        }
    });

    result.textContent =
        `Your score: ${score} out of ${questions.length}`;

    submitButton.disabled = true;

    document.querySelectorAll(
        'input[type="radio"]'
    ).forEach(input => {
        input.disabled = true;
    });
});

displayQuestions();
