async function getInfo() {
  try {
    const results = await axios.get(`https://opentdb.com/api.php?amount=20&category=12&difficulty=medium&type=boolean`);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

getInfo();

// PSEUDOCODE:

// A trivia game where user goes through 20 music trivia questions

// For each question, user clicks true or false button/block


// If answer is 'true', user is alerted 'You Rock!'
function trueAnswer() {
  document.getElementById('question').innerHTML = 'YOU ROCK !!!';
}

// Else, answer is wrong 'false' , user is alerted 'You Suck!'

function falseAnswer() {
  document.getElementById('question').innerHTML = 'YOU SUCK !!!';
}

// After 20 questions answered, If user answers more than 10 questions correct, alert user 'You Owned It! You're a F*ckin Rockstar!"


//  If not, alert "You just don't have what it takes! Try again!"



// NOW ADD DATA TO THE DOM ? ...


// EVENT LISTENER TAKES PLACE IN THE DOM -- button click


