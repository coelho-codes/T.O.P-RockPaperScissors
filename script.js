function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return 'Oops... Something went wrong.'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === 'rock' && computerSelection === 'rock') {
        return `That's a tie! ${playerSelection} ties with ${computerSelection}.`;
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return `You lost! ${playerSelection} loses to ${computerSelection}.`;
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else if(playerSelection === 'paper' && computerSelection === 'paper') {
        return `That's a tie! ${playerSelection} ties with ${computerSelection}.`;
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lost! ${playerSelection} loses to ${computerSelection}.`;
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lost! ${playerSelection} loses to ${computerSelection}.`;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `That's a tie! ${playerSelection} ties with ${computerSelection}.`;
    }
}

let computerSelection = getComputerChoice();

const container = document.querySelector('#results-container');
const rockBtn = document.getElementById('rock');    
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const result = document.createElement('p');
result.classList.add('result');
result.style.color = '#FAFAFA';

let playerScore = 0;
let computerScore = 0;
let score = document.createElement('p');
score.style.color = '#FAFAFA';
container.appendChild(score);

rockBtn.addEventListener('click', function() {
    result.textContent = playRound('rock', computerSelection);
    if(result.textContent.includes('won')) {
        playerScore++;
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if(result.textContent.includes('lost')) {
        computerScore++;
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else {
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
    container.appendChild(result);
})

paperBtn.addEventListener('click', function() {
    result.textContent = playRound('paper', computerSelection);
    if(result.textContent.includes('won')) {
        playerScore++;
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if(result.textContent.includes('lost')) {
        computerScore++;
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else {
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
    container.appendChild(result);
})

scissors.addEventListener('click', function() {
    result.textContent = playRound('scissors', computerSelection);
    if(result.textContent.includes('won')) {
        playerScore++;
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if(result.textContent.includes('lost')) {
        computerScore++;
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else {
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
    container.appendChild(result);
})