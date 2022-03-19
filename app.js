const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('game-results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
   
    if (randomNumber === 1) {
    computerChoice = 'rock'
    }
    if (randomNumber === 2) {
    computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
    computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults () {
  if(computerChoice === userChoice){
   results ='IT IS A DRAW!'
  }
  if (computerChoice === 'rock' && userChoice === "paper"){
    results = 'YOU WIN!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors"){
    results = 'YOU LOSE ☹'
  }
  if (computerChoice === 'paper' && userChoice === "scissors"){
    results = 'YOU WIN!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    results = 'YOU LOSE ☹'
  }
  if(computerChoice === 'scissors' && userChoice === "rock"){
    results = 'YOU WIN!'
  }
  if(computerChoice === 'scissors' && userChoice === "paper"){
    results = 'YOU LOSE ☹'
  }
  resultsDisplay.innerHTML = results
}


