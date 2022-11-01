function getComputerChoice () {
    let num = Math.floor(Math.random() * 2);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    let decision;
    let winner;
    let loser;
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
            decision = "Win";
            winner = playerSelection;
            loser = computerSelection;
    } else if (playerSelection == computerSelection) {
        return "You Tie!"
    } else {
        decision = "Lose";
        winner = computerSelection;
        loser = playerSelection;
    }
    winner = winner.charAt(0).toUpperCase() + winner.slice(1, winner.length).toLowerCase();
    loser = loser.charAt(0).toUpperCase() + loser.slice(1, loser.length).toLowerCase();
    return "You " + decision + "! " + winner + " beats " + loser
}

function game () {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

console.log(game());
