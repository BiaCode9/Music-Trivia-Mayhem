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

    // Truth Checks
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


    // const
    // if (answer === correctAnswer) {

    // } else {

    // }



    // Event Listeners - check and pass through to see if right or wrong
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

getInfo();


// button.addEventListener("click", () => {
//   if (event.button.innerHtml === 'correct_answer') {
//     console.log("You Rock!");
//   } else if (event.button.innerHtml === 'incorrect_answers') { 
//     console.log("You Suck!");
//   }

// }



  // increment through the array for every question 
  // check to see if the answer is the same for what the button given is giving back === make the comparison with if else 

  // nextQuestion() {


  // }


  // PSEUDOCODE:

  // A trivia game where user goes through 20 music trivia questions

  // For each question, user clicks true or false button/block



  // If answer is 'true', user is alerted 'You Rock!'
  // function trueAnswer() {
  //   document.getElementById('question').innerHTML = 'YOU ROCK !!!';
  // }

  // Else, answer is wrong 'false' , user is alerted 'You Suck!'

  // function falseAnswer() {
  //   document.getElementById('question').innerHTML = 'YOU SUCK !!!';
  // }


  //Write a method that receives the array of 'results' objects as a paramter


  // Call the method


  // When user clicks true or false button, pass teh answer to the api and fetch the information ?? AKA create a function to append to the DOM/buttons


  // if/else or switch case for true or false? 


  // .get request ???




  // After 20 questions answered, If user answers more than 10 questions correct, alert user 'You Owned It! You're a F*ckin Rockstar!"


  //  If not, alert "You just don't have what it takes! Try again!"



  // ADD DATA TO THE DOM ? ...


  // EVENT LISTENER TAKES PLACE IN THE DOM -- button click

  // Need autorefresh after question is answered?
