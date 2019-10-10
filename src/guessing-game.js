class GuessingGame {
  constructor() {
    this.currentGuess = 0;
  }

  setRange(min, max) {
    this.rangeOfNumber = {
      min,
      max
    }
  }

  guess() {
    this.currentGuess = Math.round((this.rangeOfNumber.min + this.rangeOfNumber.max) / 2);
    return this.currentGuess;
  }

  lower() {
    this.rangeOfNumber.max = this.currentGuess;
  }

  greater() {
    this.rangeOfNumber.min = this.currentGuess;
  }
}

module.exports = GuessingGame;
