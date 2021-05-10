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

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess) 
    if (isUnique) {
        this.guessedLetters.push(guess)
}
    if (isUnique && isBadGuess) {
        this.remainingGuesses = this.remainingGuesses - 1
        // this.remainingGuesses--
    }
}

const game1 = new Hangman('cat', 2);
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})

