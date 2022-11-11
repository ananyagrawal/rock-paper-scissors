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

  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  const scoreDiv = document.getElementById('score')
  handsDiv.innerText=playerChoice+' '+computerChoice
  if(score == 0){
    resultDiv.innerText = 'You Drew!'
  } else if(score == 1){
    resultDiv.innerText = 'You Won!'
  } else{
    resultDiv.innerText = 'You Lost!'
  }
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
 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

playGame()