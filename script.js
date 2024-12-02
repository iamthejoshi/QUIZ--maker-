// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase configuration (Ensure to secure this)

const firebaseConfig = {
    apiKey: "AIzaSyBECV0o9hTB-Ht5HazJ0l7pif7aEDYv3Iw",
    authDomain: "quiz-maker-32ed0.firebaseapp.com",
    databaseURL: "https://quiz-maker-32ed0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quiz-maker-32ed0",
    storageBucket: "quiz-maker-32ed0.firebasestorage.app",
    messagingSenderId: "413118107082",
    appId: "1:413118107082:web:ecc58f4f3b582c7a319333",
    measurementId: "G-R0QKG3SCMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Questions
const questions = [
    { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctAnswer: "Ottawa" },
    { question: "What is the SI unit of temperature?", options: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"], correctAnswer: "Kelvin" },
];

let currentQuestionIndex = 0;
let selectedOption = null;
let timer, timeRemaining = 30;

// Get references to DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");

// Add event listeners for buttons
document.getElementById("start-infinite-quiz").addEventListener("click", startInfiniteQuiz);
document.getElementById("start-one-vs-one").addEventListener("click", startOneVsOneQuiz);

// Start Infinite Quiz
function startInfiniteQuiz() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("infinite-quiz").style.display = "block";

    // Initialize timer element
    const timerElement = document.getElementById("timer");
    displayQuestion();
}

// Display Question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(option, button));
        optionsElement.appendChild(button);
    });

    resultElement.textContent = "";
    submitButton.disabled = true;
    startTimer();
}

// Select Option
function selectOption(option, button) {
    selectedOption = option;
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    button.classList.add("selected");
    submitButton.disabled = false;
}

// Timer
function startTimer() {
    if (timer) clearInterval(timer);
    timeRemaining = 30;
    document.getElementById("timer").textContent = `Time remaining: ${timeRemaining}s`;

    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            document.getElementById("timer").textContent = `Time remaining: ${timeRemaining}s`;
        } else {
            clearInterval(timer);
            checkAnswer();
        }
    }, 1000);
}

// Check Answer
function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    clearInterval(timer);

    if (selectedOption === currentQuestion.correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = `Incorrect! The correct answer is ${currentQuestion.correctAnswer}.`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(displayQuestion, 2000);
    } else {
        resultElement.innerHTML = "Quiz completed! 🎉 <button onclick='location.reload()'>Restart</button>";
    }
}

// Start 1v1 Quiz Mode
function startOneVsOneQuiz() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("one-vs-one").style.display = "block";
}

// Firebase: Generate 1v1 Quiz Link
document.getElementById("generate-link").addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value || `Player_${Math.floor(Math.random() * 1000)}`;
    const uniqueID = Math.random().toString(36).substring(2, 15);
    const quizLink = `${window.location.origin}?id=${uniqueID}&name=${encodeURIComponent(playerName)}`;

    const quizRef = ref(database, 'quizzes/' + uniqueID);
    set(quizRef, {
        creator: playerName,
        participants: []
    });

    document.getElementById("generated-link").textContent = `Share this link: ${quizLink}`;
});

// Firebase: Handle Participant Joining the 1v1 Quiz
const urlParams = new URLSearchParams(window.location.search);
const quizID = urlParams.get("id");
const participantName = urlParams.get("name") || `Guest_${Math.floor(Math.random() * 1000)}`;

if (quizID) {
    const participantsRef = ref(database, `quizzes/${quizID}/participants`);
    push(participantsRef, participantName);
    document.getElementById("quiz-participant").innerHTML = `<p>Welcome, ${participantName}! Waiting for other players...</p>`;
}
