// listen for key presses on the browser
// Creating an event listener

// display the puzzle to the browser instead of the console.
// Display the guesses left to the browser instead of the console.
// Separate the Hangman definition from the rest of the app code (use app.js)
/*
window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    console.log(guess);
})
*/

// option 2

// Test
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 4)
// Display the guesses and remaining guesses
puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses


window.addEventListener('keypress', function(e) {
    const guess = e.key;
    game1.makeGuess(guess)
    // Now this should be showing to the browser: ***
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
  
})