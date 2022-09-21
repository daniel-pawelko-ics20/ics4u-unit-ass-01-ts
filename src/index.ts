/**
 * Rock Paper Scissors
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2020-09-20
 */

// Importing promptSync to allow user input
import promptSync from 'prompt-sync'

// Defining variables
const prompt = promptSync()
const logic: number[][] = [
  [1, 3], // rock > scissors
  [2, 1], // paper > scissors
  [3, 2] // scissors > paper
]
const numToWord = ['Rock', 'Paper', 'Scissors']
let selectionUP
let selection

// Getting user input
do {
  console.log('\nPlease select 1, 2, or 3')
  selectionUP = prompt('[1] Rock, [2] Paper, [3] Scissors: ') // UP: Un Parsed
  selection = parseInt(selectionUP)
} while (isNaN(selection) || selection <= 0 || selection >= 4)

// Computer selecting random number
const randomNum = Math.floor(Math.random() * 3) + 1

// Looping through logic array
for (let i: number = 0; i < logic.length; i++) {
  if (selection === randomNum) {
    // If user input and computer is the same than it is a tie
    console.log('Tie :|')
    break
  } else if (logic[i].includes(selection) && logic[i].includes(randomNum)) {
    if (logic[i][0] === selection) {
      // If user won
      console.log(
        `You won! ${numToWord[selection - 1]} beats ${numToWord[randomNum - 1]}`
      )
    } else {
      // If user lost
      console.log(
        `You Lost :( ${numToWord[randomNum - 1]} beats ${
          numToWord[selection - 1]
        }`
      )
    }
    break
  }
}

// Done
console.log('\nDone.')
