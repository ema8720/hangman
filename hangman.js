// 1. Set up the word instance property as an array of lower case letters.
// 2. Set up another instance property to store guessed letters.
// 3. Create a method that gives you the word puzzle back.

// No guess --> ***
// Guessed "c", "b", and "t"? -> c*t


const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c']
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

const game1 = new Hangman('cat', 2);
console.log(game1.getPuzzle());

const game2 = new Hangman('New Jersey', 4);
console.log(game2.getPuzzle());