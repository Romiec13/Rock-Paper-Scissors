const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultsDisplay = document.getElementById ('results')
const possibleChoices = document.querySelectorAll('a')
let userChoice
let computerChoice
let results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResults()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
   
    if (randomNumber === 1) {
    computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
    computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
    computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults () {
  if(computerChoice === userChoice){
   results ='IT IS A DRAW!'
  }
  if (computerChoice === 'Rock' && userChoice === "Paper"){
    results = 'YOU WIN ㋡'
  }
  if (computerChoice === 'Rock' && userChoice === "Scissors"){
    results = 'YOU LOSE ☹'
  }
  if (computerChoice === 'Paper' && userChoice === "Scissors"){
    results = 'YOU WIN ㋡'
  }
  if (computerChoice === 'Paper' && userChoice === "Rock") {
    results = 'YOU LOSE ☹'
  }
  if(computerChoice === 'Scissors' && userChoice === "Rock"){
    results = 'YOU WIN ㋡'
  }
  if(computerChoice === 'Scissors' && userChoice === "Paper"){
    results = 'YOU LOSE ☹'
  }
resultsDisplay.innerHTML = results
}


