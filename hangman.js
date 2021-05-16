class Hangman {
    constructor(word, remainingGuesses) {
           // set up a word instance property as an array of lower cases.
      this.word = word.toLowerCase().split('')
      this.remainingGuesses = remainingGuesses
      // setting up an instance property to store guessed letters.
      this.guessedLetters = []
      // created a status property with the initial value set to "playing"
      this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))  
        if (this.remainingGuesses === 0 ) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    getStatusMessage() {
        if (this.status === 'playing') {
            return   `Guesses left: ${this.remainingGuesses}`
        }  else if (this.status === 'failed') {
          return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return `Great work you guessed the word!`
        }  
    }
   getPuzzle() {
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
   makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    

    // this is disabling new guesses unless is playing.
    if (this.status !== 'playing') {
        return 
    }
    
    if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isBadGuess && isUnique) {
            this.remainingGuesses--
            //this.remainingGuesses = this.remainingGuesses - 1 
        }
        this.calculateStatus()
   }
}

