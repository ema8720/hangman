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
// Display the puzzle to the browser instead of the console.
// Display the guesses left to the browser instead of the console.
// Separate the Hangman definition from the rest of the app code.









