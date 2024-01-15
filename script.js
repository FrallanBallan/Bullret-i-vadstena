let questions = [
  {
    question: "När inträffade bullret i Vadstena?",
    answers: [
      { text: "2014", correct: false },
      { text: "1559", correct: true },
      { text: "1530", correct: false },
      { text: "2011", correct: false },
    ],
  },
  {
    question: "Vad är det specifika året för Vadstenabullret?",
    answers: [
      { text: "2014", correct: false },
      { text: "1530", correct: false },
      { text: "1559", correct: true },
      { text: "2011", correct: false },
    ],
  },

  {
    question: "Vilket år hände Vadstenabullret?",
    answers: [
      { text: "2014", correct: false },
      { text: "1530", correct: false },
      { text: "2011", correct: false },
      { text: "1559", correct: true },
    ],
  },

  {
    question: "När hörde Vadstena det öronbedövande bullret?",
    answers: [
      { text: "2014", correct: false },
      { text: "1530", correct: false },
      { text: "1559", correct: true },
      { text: "2011", correct: false },
    ],
  },

  {
    question: "I vilket år skrämde Vadstenabullret invånarna?",
    answers: [
      { text: "2014", correct: false },
      { text: "1559", correct: true },
      { text: "1530", correct: false },
      { text: "2011", correct: false },
    ],
  },

  {
    question: "Vad är det korrekta året för händelsen Vadstenabullret?",
    answers: [
      { text: "1559", correct: true },
      { text: "2014", correct: false },
      { text: "1530", correct: false },
      { text: "2011", correct: false },
    ],
  },
];

let questionElement = document.querySelector("#question");
let answerBtn = document.querySelector("#answer-buttons");
let nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "- " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}
function selectAnswer(e) {
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
