function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            return "Rock".toLowerCase();
            break;
        case 2:
            return "Paper".toLowerCase();
            break;
        case 1:
            return "Scissors".toLowerCase();
            break;            
    }
    

}

function playRound(playerSelection, computerSelection) {
    // your code here!

    console.log("Player: %s, Computer: %s", playerSelection.toLowerCase(), computerSelection);

    let numCompSelection = 0;
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")
        return "You Win! Rock beats Scissors!"
    else if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper")
        return "You Lose! Paper beats Rock!"
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")
        return "You Lose! Scissors beats Paper!"
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock")
        return "You Win! Paper beats Rock!"
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
        return "You Win! Scissors beats Paper!"
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")
        return "You Lose! Rock beats Scissors!"
    else
        return "You Tied!"

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));