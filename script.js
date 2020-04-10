const question = document.querySelector('#question') //traversing the DOM
let trueButton = document.querySelector("#true-button");
let falseButton = document.querySelector("#false-button");

async function getInfo() {
  try {
    // API Fetching
    const results = await axios.get(`https://opentdb.com/api.php?amount=20&category=12&difficulty=medium&type=boolean`);
    const response = results.data.results;

    // Setting Global Variables
    let currentQuestion = 0; // sets the question at the current question
    let totalCorrect = 0;
    let correctAnswer = response[currentQuestion].correct_answer;

    // DOM Manipulation
    question.innerHTML = response[currentQuestion].question;

    const updateQuestion = () => {
      currentQuestion++;
      if (currentQuestion < 20) {
        question.innerHTML = response[currentQuestion].question;
        correctAnswer = response[currentQuestion].correct_answer;
      } else {
        finalResult();
      }
    }

    // Truth Checks if answer is right or wrong
    const check = (answer) => {
      if (answer === correctAnswer) {
        alert("BRILLIANT !!! YOU ROCK !!!");
        console.log("You got it right!");
        totalCorrect++;
      } else {
        alert("EPIC FAIL !!! YOU SUCK !!!");
        console.log("You got it wrong!");
      }
      updateQuestion();
    }


    let finalResult = () => {
      if (totalCorrect >= 10) {
        alert(`YOU OWNED IT! YOU'RE A F*CKIN' ROCKSTART! You got ${totalCorrect}/20 Correct !!! `);
        console.log("You Won!");
      } else {
        console.log("You Lose!");
        alert(`YOU JUST DON'T HAVE WHAT IT TAKES! TRY AGAIN! You got ${totalCorrect}/20 correct!`);
      }
    }


    // Event Listeners - check and pass through to see if answer is right or wrong
    trueButton.addEventListener('click', function () {
      check('True');
    });
    falseButton.addEventListener('click', function () {
      check('False');
    })

  } catch (error) {
    console.log(error);
  }
}

getInfo(); // call function to pull from the DOM


