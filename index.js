const newGameBtn = document.querySelector('#new-game-btn');

newGameBtn.addEventListener('click', () =>{
    game(parseInt(prompt('How many games do you want to play?')), null, null)
})

//Start a round as many times as inputted.
function game(rounds, wins, roundsLeft){
    for(let i=1; i<rounds; i++){
        if(roundsLeft == null){
            roundsLeft = rounds;
        }
        playRound(rounds);
    }
}

//playRound function
function playRound(rounds){
    let roundsLeft = rounds;
    let wins = 0;

    let playerInput = prompt("Rock, Paper, or Scissors?");
    console.log(playerInput)
}