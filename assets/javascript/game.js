// cpu can guess anything in this array.
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// intializing variables to hold the number of wins, losses, guesses, and previous guesses
var wins = 0;
var losses = 0;
var guessesLeft = 8;
//logging current guesses, I believe our two best options we can choose an array or hashmap
//going to choose an array since we're going to limit guesses and don't need to overcomplicate things.
var prevGuess = [];
var cpuChoice;

//cpu guesses anything in alphabet[random#]
cpuChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//for debugging
console.log(cpuChoice);

// after completing the MVP, had a lot of repetitive code.
// we can make functions for resetting and displaying the score instead of repeating ourselves.

function displayScore() {
  document.getElementById("displayWins").innerHTML = wins;
  document.getElementById("displayLosses").innerHTML = losses;
  document.getElementById("displayGuess").innerHTML = guessesLeft;
  document.getElementById("displayPrevGuess").innerHTML = prevGuess.join(", ");
}

function resetGame() {
  prevGuess = [];
  guessesLeft = 8;
  //tried to make this a function, but it wouldn't work. we only used it twice anyway.
  cpuChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  //for debugging
  console.log(cpuChoice);
}
//whenever a user presses a key,
document.onkeyup = function(event) {
  // register userguess as that key.
  var userGuess = event.key;
  // for debugging
  console.log(userGuess);

  // initially tried to just do "if event == [alphabet]" but it didnt work
  // found this cool way on to verify if in the alphabet
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // if user guess == cpu choice, add a win
    if (userGuess === cpuChoice) {
      wins++;
      alert("nice, you guessed correctly!");
      displayScore();
      //reset
      resetGame();
      alert("press any key to restart the game...");
    }
    //else, subtract guesses left and push it into the guessed array.
    else {
      guessesLeft--;
      prevGuess.push(userGuess);
      displayScore();
    }
  }

  //when out of guesses, add a loss, show the correct answer, and reset the score.
  if (guessesLeft <= 0) {
    losses++;
    alert("sorry chief, you lost; the correct answer was " + cpuChoice);
    document.getElementById("displayLosses").innerHTML = losses;
    //reset
    resetGame();
    alert("press any key to restart the game...");
  }
};
