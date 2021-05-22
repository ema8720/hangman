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
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.StatusMessage


window.addEventListener('keypress', function(e) {
    const guess = e.key;
    game1.makeGuess(guess)
    // Now this should be showing to the browser: ***
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.StatusMessage

})

// 1. Setup new status property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after making a guess is processed.
// 4. Use console.log to print the status.

//  Start the game and see "playing"
//  Make two incorrect guesses to see "failed"
//  Refresh the browser and guess "c", "a", and "t" to see "finished"

// HTTP (Hypertext Transfer Protocol)
// Request -- What do we want to do.
// Response -- What was actually done. 

const request = new XMLHttpRequest()


request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200 ) {
        console.log(e.target.status);
        const data = JSON.parse(e.target.responseText)
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log("An error has taken place");
    }
}) 

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()