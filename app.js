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
const game1 = new Hangman('cat', 2)
// Display the guesses and remaining guesses
puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses
console.log(game1.status)

window.addEventListener('keypress', function(e) {
    const guess = e.key;
    game1.makeGuess(guess)
    // Now this should be showing to the browser: ***
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
    console.log(game1.status);
})

// 1. Setup new status property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after making a guess is processed.
// 4. Use console.log to print the status.

//  Start the game and see "playing"
//  Make two incorrect guesses to see "failed"
//  Refresh the browser and guess "c", "a", and "t" to see "finished"

