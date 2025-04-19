document.addEventListener("DOMContentLoaded", function () {
    // Retrieve tables and multiples from localStorage
    const tables = JSON.parse(localStorage.getItem("tables")); // E.g., ['3', '8']
    const multiples = JSON.parse(localStorage.getItem("multiples")); // E.g., ['2', '3']
  
    // Log data for debugging
    console.log("Tables:", tables);
    console.log("Multiples:", multiples);
  
    // Check if data is available
    if (!tables || !multiples) {
      console.error("Practice test interrupted!\nGo back to Home Page.");
      alert("Practice test interrupted!\nGo back to Home Page.");
      window.location.href = "../home/home.html"; // Redirect to test page
      return;
    }
  
    // Clear data from localStorage if needed
    localStorage.removeItem("tables");
    localStorage.removeItem("multiples");
  
    // Select the target elements from your HTML
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const answerElement = document.getElementById("answer");
    const scoreElement = document.getElementById("score");
    const questionNumberElement = document.getElementById("question-number");
    const timerElement = document.getElementById("timer");
  
    // Initialize variables
    let currentQuestionIndex = 0;
    let score = 0;
    const totalQuestions = tables.length * multiples.length; // Total combinations
  
    // Create all question combinations
    const questions = [];
    tables.forEach(table => {
      multiples.forEach(multiple => {
        questions.push({
          table: parseInt(table),
          multiple: parseInt(multiple),
          correctAnswer: parseInt(table) * parseInt(multiple)
        });
      });
    });
  
    // Optional: Shuffle questions to randomize them
    questions.sort(() => Math.random() - 0.5);
  
    // Global timer variable to keep track of the current timer interval
    let timerInterval = null;
    const timerDuration = 30; // seconds
  
    // Function to start the timer for a question
    function startTimer(duration, displayElement) {
      // Clear any previous timer if running
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      let timeRemaining = duration;
      displayElement.innerText = `Timer: ${timeRemaining}s`;
  
      timerInterval = setInterval(() => {
        timeRemaining--;
        displayElement.innerText = `Timer: ${timeRemaining}s`;
  
        if (timeRemaining <= 0) {
          clearInterval(timerInterval);
          timerInterval = null;
          handleTimeOut();
        }
      }, 1000);
    }
  
    // Called when the timer reaches zero
    function handleTimeOut() {
      answerElement.textContent = "Time Over!";
      answerElement.classList.remove("text-success");
      answerElement.classList.add("text-danger");
  
      currentQuestionIndex++;
      setTimeout(() => {
        answerElement.textContent = "";
        loadQuestion();
      }, 1000);
    }
  
    // Load the current question and start its timer
    function loadQuestion() {
      // Clear the timer before loading a new question
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
  
      if (currentQuestionIndex >= questions.length) {
        questionElement.textContent = "Quiz Completed!";
        answerElement.textContent = `Your final score is ${score} out of ${totalQuestions}`;
        answerElement.classList.remove("text-danger", "text-success");
        answerElement.classList.add("text-success");
        optionsElement.innerHTML = ""; // Clear options
        timerElement.innerText = ""; // Clear timer
        return;
      }
  
      const currentQuestion = questions[currentQuestionIndex];
      questionNumberElement.textContent = `Question Number: ${currentQuestionIndex + 1}`;
      questionElement.textContent = `What is ${currentQuestion.table} x ${currentQuestion.multiple}?`;
  
      // Generate random options including the correct answer
      const correctAnswer = currentQuestion.correctAnswer;
      const options = [correctAnswer];
      while (options.length < 5) {
        const randomOption = Math.floor(Math.random() * (correctAnswer + 10)) + 1;
        if (!options.includes(randomOption)) options.push(randomOption);
      }
  
      // Shuffle options
      options.sort(() => Math.random() - 0.5);
  
      // Display options
      optionsElement.innerHTML = ""; // Clear previous options
      options.forEach(option => {
        const button = document.createElement("button");
        button.className = "btn btn-secondary w-100 my-2";
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(parseInt(option), correctAnswer, button));
        const col = document.createElement("div");
        col.className = "col-md-2";
        col.appendChild(button);
        optionsElement.appendChild(col);
      });
  
      // Start the timer for this question
      startTimer(timerDuration, timerElement);
    }
  
    // Check the selected answer
    function checkAnswer(selected, correct, button) {
      // Clear the timer since an answer is chosen
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
  
      if (selected === correct) {
        score++;

        // Change button background colour
        button.classList.remove('btn-secondary');
        button.classList.add('btn-success');

        answerElement.textContent = "Correct!";
        answerElement.classList.remove("text-danger");
        answerElement.classList.add("text-success");
      } else {

        // Change button background colour
        button.classList.remove('btn-secondary');
        button.classList.add('btn-danger');

        answerElement.textContent = "Wrong!";
        answerElement.classList.remove("text-success");
        answerElement.classList.add("text-danger");
      }
  
      scoreElement.textContent = `Score: ${score}`;
      currentQuestionIndex++;
      setTimeout(() => {
        answerElement.textContent = ""; // Clear the feedback
        loadQuestion(); // Load the next question
      }, 1000);
    }
  
    // Start the quiz by loading the first question
    loadQuestion();
  });
  