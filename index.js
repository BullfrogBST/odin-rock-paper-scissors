//Get the buttons nodeList and store it in a variable. Also store the gameText into a variable
const buttons = document.querySelectorAll('.button');
const gameText = document.querySelector('#game-text')
//Make a gameStats object with various stats for the game
const gameStats = {
    firstTo: 5,
    wins: 0,
    losses: 0,
    winner: '',
    
    userInput: '',

    gameRunning: false,
    roundEmpty: true,

    reset: function(){
        this.wins = 0;
        this.losses = 0;
        this.userInput = '';
    }
}
//Add an event listener for the buttons, and check which button was pressed. Call the newInput() function.
buttons.forEach(button =>{
    button.addEventListener('click', (e) =>{
        newInput(e.target.getAttribute('id'));
    })
})
//Declare the newInput() function
function newInput(userInput){
//If the button that was pressed was the new game button, call the newGame() function
    if(userInput == 'new-game-btn'){
        newGame();
    } else{
        //If the button that was pressed was rock, paper, or scissors, then set gameStats.userInput to the userInput, and then freeze the userInput
        gameStats.userInput = userInput;
        Object.defineProperty(gameStats, "userInput", { configurable: false, writable: false });
    }
}
//Declare the newGame() function
function newGame(){
//Reset all game stats, display "New Game!" for a certain interval of time, and call the newRound function for as many times as the gameStats.firstTo says.
    gameStats.reset();
    gameText.textContent = "New Game!";
    gameStats.gameRunning = true;

    setTimeout(() =>{
        console.log(gameStats.wins)
        console.log(gameStats.losses)
        while(gameStats.wins < 5 && gameStats.losses < 5 && gameStats.gameRunning && gameStats.roundEmpty){
                newRound();
                gameStats.roundEmpty = false;
                console.log('New Round!')
        }
    }, 1250);
}

//Declare the newRound() function
function newRound(){
    console.log('debug')
}
//Display the initial game stats until either rock, paper, or scissors was chosen

//Once rock, paper or scissors was chosen, display the user's input on the gameText

//After waiting for a certain interval of time, declare the computer's input as a random item from an array

//Check who the winner is, and display it on the game text after a certain interval of time

//Increment the wins or losses value accordingly if it wasn't a tie after a certain amount of time, so the function doesn't get called again for a few seconds

//Check who the winner so far is, and update gameStats.winner to the value

//Unfreeze the userInput value