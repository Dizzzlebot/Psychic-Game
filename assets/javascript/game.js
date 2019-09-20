// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = " ";
var userGuess = " ";
var computerGuess = " ";

//var userChoiceText = document.getElementById("wins");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("Guesses-left");
var guessesSoFarText = document.getElementById("Guesses-so-far");

// Create variables that hold references to the places in the HTML where we want to display things.
print();

// var Guess what letter i'm thinking = guess a letter;
// var winsText = you win;
// var lossesText = you lose;
// var guessesSoFar = you guessed right;
// var guessesleft = no more guesses;
function print() {
    console.log("You chose: " + userGuess);
    console.log("The computer chose: " + computerGuess);
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesSoFarText.textContent = guessesSoFar;
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number


    if ((userGuess === computerGuess)) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = " ";

        print();
    } else if (userGuess !== computerGuess && guessesLeft > 0) {
        guessesLeft--;
        guessesSoFar += (userGuess + " ");
        print();
    } else {
        losses++;
        guessesLeft = 9;
        guessesSoFarText = " ";
        print();

        // Hide the directions
        // directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.

        console.log("You chose: " + userGuess);
        console.log("The computer chose: " + computerGuess);
        winsText.textContent = wins;
        lossesText.textContent = losses;
        guessesLeftText.textContent = guessesLeft;
        guessesSoFarText.textContent = "";
    }
}
