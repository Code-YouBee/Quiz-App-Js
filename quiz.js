document.addEventListener("DOMContentLoaded", function () {
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedbackText = document.getElementById("feedback-text");
  const scoreContainer = document.getElementById("score-container");
  const nextButton = document.getElementById("next-button");

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Mercury"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.className = "option";
      li.textContent = option;
      li.addEventListener("click", function () {
        checkAnswer(index);
      });
      optionsContainer.appendChild(li);
    });

    feedbackText.textContent = "";
    scoreContainer.textContent = "Score: " + score;
    nextButton.style.display = "none";
  }

  function checkAnswer(optionIndex) {
    if (nextButton.style.display != "none") return;
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedOption = currentQuestion.options[optionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      feedbackText.textContent = "Correct!";
      score++;
      scoreContainer.textContent = "Score: " + score;
    } else {
      feedbackText.textContent =
        "Incorrect. The correct answer is " +
        currentQuestion.correctAnswer +
        ".";
    }

    if (currentQuestionIndex == quizData.length - 1){
        nextButton.textContent = "Finish Quiz"
        nextButton.style.backgroundColor = 'yellowgreen';
    }
    nextButton.style.display = "block";
  }

  nextButton.addEventListener("click", function () {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  });

  function showFinalScore() {
    questionText.textContent = "Quiz Completed";
    optionsContainer.innerHTML = "";
    feedbackText.textContent =
      "Your final score is: " + score + " out of " + quizData.length;
    scoreContainer.textContent = "";
    nextButton.style.display = "none";
  }

  // Load the first question
  loadQuestion();
});
