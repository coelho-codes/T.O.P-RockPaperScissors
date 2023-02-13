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

const playerSelection = 'Paper';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));