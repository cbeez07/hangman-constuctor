function Letter() {
    this.character = character;
    this.guessed = false;
    this.guessedLetter = function () {
        if (this.guessed === false) {
            console.log('_');
        } else {
            console.log(this.character);
        }
    };
    this.userGuess = function () {}
}