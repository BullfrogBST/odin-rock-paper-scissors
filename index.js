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
    //replace the player input with the lowercase version if it's rock, paper, or scissors.
    playerInput = playerInput.replace(/Rock|Paper|Scissors/i, playerInput.toLowerCase())

     playerInput = playerInput.replace(',', '')
    console.log(playerInput)

    //if the input isn't rock, paper, or scissors, then return an error.
    if(playerInput != 'rock' && playerInput != 'paper' && playerInput != 'scissors'){
        console.log('Invalid Input');
    }

    //generate a random input for the computer to choose
    const rps = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random() * 4);
    let compInput = rps[randomIndex];

    console.log(compInput)
}