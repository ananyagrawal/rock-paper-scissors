// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random()*3)
    return choice[randomNumber]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  if(playerChoice == computerChoice)
  return 0
  else if(playerChoice=='Rock'){
    if(computerChoice=='Paper')
    return -1
    if(computerChoice=='Scissors')
    return 1
  }
  else if(playerChoice=='Paper'){
    if(computerChoice=='Rock')
    return 1
    if(computerChoice=='Scissors')
    return -1
  }
  else if(playerChoice=='Scissors'){
    if(computerChoice=='Rock')
    return -1
    if(computerChoice=='Paper')
    return 1
  }
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
let playerScore=0
let computerScore=0
function showResult(score, playerChoice, computerChoice) {
  
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  const scoreDiv = document.getElementById('score')
  let result = ''
  if(score == 0){
    result = 'You Drew!'
  } else if(score == 1){
    result = 'You Won!'
    playerScore++
  } else{
    result = 'You Lost!'
    computerScore++
  }
  scoreDiv.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`
  handsDiv.innerText=`Player: ${playerChoice} vs Computer: ${computerChoice}`
  resultDiv.innerText = `${result}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  const score = getResult(playerChoice, computerChoice)
  console.log({score})
  showResult(score,playerChoice,computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsbtn')

  // * an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  rpsButtons.forEach(rpsButton =>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 

  // click listener to the end game button that runs the endGame() function on click
  const endGameButton = document.getElementById('resetGameBtn')
  endGameButton.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  const scoreDiv = document.getElementById('score')
  handsDiv.innerText = ''
  resultDiv.innerText = ''
  playerScore=0
  computerScore=0
  scoreDiv.innerText = `Player Score: 0 Computer Score: 0`
}

playGame()