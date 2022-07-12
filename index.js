const rpsButtons = document.querySelectorAll('button');
const newGameBtn = document.querySelector('#new-game-btn')
const gameText = document.querySelector('#game-text');

let roundCount = 5
//Check if the button was clicked, and if so, start the game.
newGameBtn.addEventListener('click', () =>{
    game(roundCount);
})

//Make the game function, and call the newRound function for as many times as were passed.
function game(roundCount){
    gameText.innerHTML = "New Game!";
    setTimeout(() =>{
        for(let i=0; i<roundCount; i++){
            newRound(roundCount - i);
        }
    }, 500)
    isPlayed = false;
}

//Make the newRound function
function newRound(roundCount){
    console.log(rpsButtons)
    //Update the gameText to include a prompt
    gameText.innerHTML = "New Game!<br><br>Rock, paper, or scissors?";
    
    //Declare the user's input based on what button they clicked.
    rpsButtons.forEach((button) =>{
        button.addEventListener('click', (e) =>{
            let userInput = e.target.getAttribute('id');
            console.log(userInput);
            
            //Declare a random index from rock, paper, and scissors as the computer's input.
            let rps = ['Rock', 'Paper', 'Scissors'];
            
            
            let randomIndex = Math.floor(Math.random() * 3);
            
            let computerInput = rps[randomIndex];

            //For each possible userInput, check what the computer's input and reurn "You Win!", "You Lose!", or "Tie!" accordingly.
            if(userInput == 'Rock'){
                switch(computerInput){
                    case 'Rock': gameText.innerHTML = 'Tie!';
                    break;
                    case 'Paper': gameText.innerHTML = 'You Lose!';
                    break;
                    case 'scissors': gameText.innerHTML = 'You Win!';
                    break;
                }
            } else if(userInput == 'Paper'){
                switch(computerInput){
                    case 'Rock': gameText.innerHTML = 'You Win!';
                    break;
                    case 'Paper': gameText.innerHTML = 'Tie!';
                    break;
                    case 'Scissors': gameText.innerHTML = 'You Lose!';
                    break;
                }
            } else if(userInput == 'Scissors'){
                switch(computerInput){
                    case 'Rock': gameText.innerHTML = 'You Lose!';
                    break;
                    case 'Paper': gameText.innerHTML = 'You Win!';
                    break;
                    case 'Scissors': gameText.innerHTML = 'Tie!';
                    break;
                }
            } else{
                gameText.innerHTML += '<br><br>Invalid Input!';
                newRound(roundCount)
            }
       })
    })
}