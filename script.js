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

