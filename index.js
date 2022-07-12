const buttons = document.querySelectorAll('.rps-button');
const newGameBtn = document.querySelector('#new-game-btn')
const gameText = document.querySelector('#game-text');

let roundCount = 5
//Check if the button was clicked, and if so, start the game.
newGameBtn.addEventListener('click', () =>{
    game(roundCount);
})

//Check if the clear button was clicked, and if so, clear the content of gameText.
clearBtn.addEventListener('click', () =>{
    gameText.innerHTML = ''
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
    //Declare the user's input based on what button they clicked.
    gameText.innerHTML += "<br><br>Rock, paper, or scissors?";
    userInput = userInput.toLowerCase();

    console.log(userInput)

    //Declare a random index from rock, paper, and scissors as the computer's input.
    let rps = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);

    let computerInput = rps[randomIndex];

    //For each possible userInput, check what the computer's input and reurn "You Win!", "You Lose!", or "Tie!" accordingly.
    if(userInput == 'rock'){
        switch(computerInput){
            case 'rock': gameText.innerHTML = 'Tie!';
            break;
            case 'paper': gameText.innerHTML = 'You Lose!';
            break;
            case 'scissors': gameText.innerHTML = 'You Win!';
            break;
        }
    } else if(userInput == 'paper'){
        switch(computerInput){
            case 'rock': gameText.innerHTML = 'You Win!';
            break;
            case 'paper': gameText.innerHTML = 'Tie!';
            break;
            case 'scissors': gameText.innerHTML = 'You Lose!';
            break;
        }
    } else if(userInput == 'scissors'){
        switch(computerInput){
            case 'rock': gameText.innerHTML = 'You Lose!';
            break;
            case 'paper': gameText.innerHTML = 'You Win!';
            break;
            case 'scissors': gameText.innerHTML = 'Tie!';
            break;
        }
    } else{
        gameText.innerHTML += '<br><br>Invalid Input!';
        newRound(roundCount)
    }
}