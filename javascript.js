const body = document.querySelector("body");
const div = document.createElement("div");

const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";

const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";

const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";

const resultsDiv = document.querySelector(".results");

body.appendChild(div);
div.appendChild(buttonRock);
div.appendChild(buttonPaper);
div.appendChild(buttonScissors);

let playerSelection = "rock";

buttonRock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);



});

buttonPaper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});

buttonScissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});




function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            return "Rock".toLowerCase();
            break;
        case 2:
            return "Paper".toLowerCase();
            break;
        case 3:
            return "Scissors".toLowerCase();
            break;            
    }
    

}

function playRound(playerSelection, computerSelection) {
    // your code here!

    console.log("Player: %s, Computer: %s", playerSelection.toLowerCase(), computerSelection);

    let p = document.createElement("p");
    resultsDiv.appendChild(p);

    let numCompSelection = 0;
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        p.textContent = "You Win! Rock beats Scissors!";
    } 
        
    else if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        p.textContent = "You Lose! Paper beats Rock!";
    }
        
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        p.textContent = "You Lose! Scissors beats Paper!";
    }
        
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        p.textContent = "You Win! Paper beats Rock!";
    }
        
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        p.textContent = "You Win! Scissors beats Paper!";
    }
        
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        p.textContent = "You Lose! Rock beats Scissors!";
    }
    else {
        p.textContent = "You Tied!";

    }
       
    

}











