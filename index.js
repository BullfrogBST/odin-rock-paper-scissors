//Get the buttons nodeList and store it in a variable. Also store the gameText into a variable
const buttons = document.querySelectorAll('.button');
const gameText = document.querySelector('#game-text')
//Make a gameStats object with various stats for the game
const gameStats = {
    firstTo: 5,
    wins: 0,
    losses: 0,
    gameWinner: '',
    
    userInput: '',
    computerInput: '',

    gameRunning: false,
    roundEmpty: true,

    gameReset: function(){
        this.wins = 0;
        this.losses = 0;

        this.userInput = 'new-game-btn';
        Object.defineProperty(this, "userInput", { configurable: true, writable: true });

        this.computerInput = '';
        Object.defineProperty(this, "computerInput", { configurable: true, writable: true });
    },

    roundReset: function(){
        this.userInput = 'new-game-btn';
        Object.defineProperty(this, "userInput", { configurable: true, writable: true });

        this.computerInput = '';
        Object.defineProperty(this, "computerInput", { configurable: true, writable: true });
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
        console.log('ooga booga')
        newGame();
    } else{
        //If the button that was pressed was rock, paper, or scissors, then set gameStats.userInput to the userInput, and then freeze the userInput. Call the newRound function
        gameStats.userInput = userInput;
        Object.defineProperty(gameStats, "userInput", { configurable: true, writable: false });
        newRound();
    }
}

//Declare the newGame() function
function newGame(){
//Reset all game stats, display "New Game!" for a certain interval of time, and call the newRound function for as many times as the gameStats.firstTo says.
    gameStats.gameReset();
    gameText.textContent = "New Game!";
    gameStats.gameRunning = true;
    gameStats.roundEmpty = true;

    setTimeout(() =>{
        while(gameStats.wins < 5 && gameStats.losses < 5 && gameStats.gameRunning && gameStats.roundEmpty){
                gameStats.roundReset();
                newRound();
                gameStats.roundEmpty = false;
                console.log('New Round!');
        }
    }, 1250);
}

//Declare the newRound() function
function newRound(){
    //Check who the gameWinner so far is, and update gameStats.gameWinner to the value
    if(gameStats.wins > gameStats.losses){
        gameStats.gameWinner = "You are winning";
    } else if(gameStats.wins < gameStats.losses){
        gameStats.gameWinner = "The computer is winning";
    } else{
        gameStats.gameWinner = "Tie";
    }
    //Display the initial game stats until either rock, paper, or scissors was chosen
    gameText.innerHTML = `${gameStats.gameWinner}<br><br>You: ${gameStats.wins}<br>Computer: ${gameStats.losses}<br><br>Rock, Paper, or Scissors?`
    //Once rock, paper or scissors was chosen, display the user's input on the gameText. Do this by awaiting the newInput() function
    if(gameStats.userInput != 'new-game-btn'){
        console.log(gameStats.userInput)
        gameText.innerHTML = `${gameStats.gameWinner}<br><br>You: ${gameStats.wins}<br>Computer: ${gameStats.losses}<br><br>Your choice: ${gameStats.userInput}`;

        //After waiting for a certain interval of time, declare the computer's input as a random item from an array. Freeze the computerInput property
        const rps = ['Rock', 'Paper', 'Scissors'];
        gameStats.computerInput = rps[Math.floor(Math.random() * 3)];
        Object.defineProperty(gameStats, "computerInput", { configurable: true, writable: false });
        setTimeout(() =>{
            gameText.innerHTML += `<br>Computer's choice: ${gameStats.computerInput}`;
        }, 1250)
        //Check who the winner is, and display it on the game text after a certain interval of time
        
        //Increment the wins or losses value accordingly if it wasn't a tie after a certain amount of time, so the function doesn't get called again for a few seconds
        
        //Unfreeze the userInput value
        
        //If the gameStats.wins or gameStats.losses is greater than firstTo, call the endGame() function  
    }
}

//Declare the endGame() function

//If the user wins, declare so on the screen, and vice versa

//After a certain amount of time, add the text "New Game?" to the gameText