const quizData = [
  {
    question: "What is the capital city of Jordan?",
    a: "Beirut",
    b: "Amman",
    c: "Damascus",
    d: "Cairo",
    correct: "b", // ✅ Amman
  },
  {
    question: "Which famous Roman site is located in downtown Amman?",
    a: "Petra",
    b: "Jerash",
    c: "Citadel",
    d: "Roman Theater",
    correct: "d", // ✅ Roman Theater
  },
  {
    question: "Which district in Amman is known for nightlife and cafes?",
    a: "Jabal Amman",
    b: "Jabal Al-Weibdeh",
    c: "Abdoun",
    d: "Downtown",
    correct: "c", // ✅ Abdoun
  },
  {
    question: "What is the currency used in Amman?",
    a: "US Dollar",
    b: "Euro",
    c: "Jordanian Dinar",
    d: "Saudi Riyal",
    correct: "c", // ✅ Jordanian Dinar
  },
  {
    question: "What is Rainbow Street known for?",
    a: "Luxury hotels",
    b: "Street food, culture & views",
    c: "Industrial business",
    d: "Government buildings",
    correct: "b", // ✅ Street food, culture & views
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You scored ${score}/${quizData.length} about Amman, Jordan 🇯🇴</h2>
        <button onclick="location.reload()">Try Again</button>
      `;
    }
  }
});
