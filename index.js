const newGameBtn = document.querySelector('#new-game-btn');

//Check if the button was clicked, and if so, prompt the user to input a number and pass it to the game function.
newGameBtn.addEventListener('click', () =>{
    let roundCount = parseInt(prompt('How many games do you want to play?'))
    game(roundCount);
})

//Make the game function, and call the newRound function for as many times as were passed.
function game(roundCount){
    for(let i=0; i<roundCount; i++){
        newRound(roundCount - i);
    }
    isPlayed = false;
}

//Make the newRound function
function newRound(roundCount){
    //Declare the user's input as a variable.
    let userInput = prompt(`Rock, paper, or scissors? Rounds left: ${roundCount}`);
    userInput = userInput.toLowerCase();

    console.log(userInput)

    //Declare a random index from rock, paper, and scissors as the computer's input.
    let rps = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 4);

    let computerInput = rps[randomIndex];

    //For each possible userInput, check what the computer's input and reurn "You Win!", "You Lose!", or "Tie!" accordingly.
    if(userInput == 'rock'){
        switch(computerInput){
            case 'rock': console.log('Tie!');
            break;
            case 'paper': console.log('You Lose!');
            break;
            case 'scissors': console.log('You Win!');
            break;
        }
    } else if(userInput == 'paper'){
        switch(computerInput){
            case 'rock': console.log('You Win!');
            break;
            case 'paper': console.log('Tie!');
            break;
            case 'scissors': console.log('You Lose!');
            break;
        }
    } else if(userInput == 'scissors'){
        switch(computerInput){
            case 'rock': console.log('You Lose!');
            break;
            case 'paper': console.log('You Win!');
            break;
            case 'scissors': console.log('Tie!');
            break;
        }
    } else{
        console.log('Invalid Input!')
        newRound(roundCount)
    }
}