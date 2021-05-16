// 1. Set up the word instance property as an array of lower case letters.
// 2. Set up another instance property to store guessed letters.
// 3. Create a method that gives you the word puzzle back.

// No guess --> ***
// Guessed "c", "b", and "t"? -> c*t


const Hangman = function (word, remainingGuesses) {
    // set up a word instance property as an array of lower cases.
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    // setting up an instance property to store guessed letters.
    this.guessedLetters = []
    // created a status property with the initial value set to "playing"
    this.status = 'playing'

}

// ----------------------------------------------------------

// 1. Setup new status property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after making a guess is processed.
// 4. Use console.log to print the status.

//  Start the game and see "playing"
//  Make two incorrect guesses to see "failed"
//  Refresh the browser and guess "c", "a", and "t" to see "finished"


// Create method for recalculating status to "playing", "finished", or "failed"
Hangman.prototype.calculateStatus = function () {
    let finished = true
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {

        } else {
            finished = false
        }
    })
    if (this.remainingGuesses === 0 ) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}


// We are creating a method that gives us a the word puzzle back.
Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            puzzle = puzzle + letter
        } else {
            puzzle += "*"
        }
    })
    
    return puzzle
}

// Create a method for making a guess. Calling it makeGuess
// 1. Should accept a character for guessing.
// 2. Should add unique guesses to list of guesses.
// 3. Should decrement the guesses left if a unique guess isn't a match.

// This is the first option
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isBadGuess && isUnique) {
            this.remainingGuesses--
            //this.remainingGuesses = this.remainingGuesses - 1 
        }
        this.calculateStatus()
} 

// This is a second option
/*
Hangman.prototype.makeGuess = function(guess){
    var guess = guess.toLowerCase()
    if (!this.guessedLetters.includes(guess) && !this.word.includes(guess)){
        this.guessedLetters.push(guess)
        this.remainingGuesses = this.remainingGuesses - 1 
 
    } else if (this.guessedLetters.includes(guess) || this.word.includes(guess)) {
        this.guessedLetters.push(guess)
        this.remainingGuesses = this.remainingGuesses 
    }
}
*/


// ----------------------------------------------------------








