//Get the buttons nodeList and store it in a variable. Also store the gameText into a variable
const buttons = document.querySelectorAll('.button');
const gameText = document.querySelector('#game-text')
//Make a gameStats object with various stats for the game
const gameStats = {
    firstTo: 5,
    wins: 0,
    losses: 0,
    gameWinner: '',
    roundWinner: '',
    
    userInput: '',
    computerInput: '',

    gameRunning: false,
    roundEmpty: true,

    gameReset: function(){
        this.wins = 0;
        this.losses = 0;

        Object.defineProperty(this, "userInput", { configurable: true, writable: true });
        this.userInput = 'new-game-btn';

        Object.defineProperty(this, "computerInput", { configurable: true, writable: true });
        this.computerInput = '';
    },

    roundReset: function(){
        Object.defineProperty(this, "userInput", { configurable: true, writable: true });
        this.userInput = 'new-game-btn';

        Object.defineProperty(this, "computerInput", { configurable: true, writable: true });
        this.computerInput = '';
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
    } else if(gameStats.roundEmpty){
        //If the button that was pressed was rock, paper, or scissors, then set gameStats.userInput to the userInput, and then freeze the userInput. Call the newRound function
        gameStats.userInput = userInput;
        Object.defineProperty(gameStats, "userInput", { configurable: true, writable: false });
        gameStats.roundEmpty = false;
        newRound();
    }
}

//Declare the newGame() function
function newGame(){
//Reset all game stats, display "New Game!" for a certain interval of time, and call the checkNewRound() function
    gameStats.gameReset();
    gameText.textContent = "New Game!";
    gameStats.gameRunning = true;
    gameStats.roundEmpty = true;

    setTimeout(() =>{
        if(gameStats.wins < 5 && gameStats.losses < 5 && gameStats.gameRunning && gameStats.roundEmpty){
            newRound();
        }
    }, 1250);
}


//Declare the newRound() function
function newRound(){
    //Check who the gameWinner so far is, and update gameStats.gameWinner to the value
    if(gameStats.wins > gameStats.losses){
        gameStats.gameWinner = "The player is winning!";
    } else if(gameStats.wins < gameStats.losses){
        gameStats.gameWinner = "The computer is winning!";
    } else{
        gameStats.gameWinner = "Tie";
    }
    //Display the initial game stats until either rock, paper, or scissors was chosen
    gameText.innerHTML = `${gameStats.gameWinner}<br><br>You: ${gameStats.wins}<br>Computer: ${gameStats.losses}<br><br>Rock, Paper, or Scissors?`
    //Once rock, paper or scissors was chosen, display the user's input on the gameText. Do this by awaiting the newInput() function
    if(gameStats.userInput != 'new-game-btn'){
        gameText.innerHTML = `${gameStats.gameWinner}<br><br>You: ${gameStats.wins}<br>Computer: ${gameStats.losses}<br><br>Your choice: ${gameStats.userInput}`;
        
        //After waiting for a certain interval of time, declare the computer's input as a random item from an array. Freeze the computerInput property
        const rps = ['Rock', 'Paper', 'Scissors'];
        gameStats.computerInput = rps[Math.floor(Math.random() * 3)];
        Object.defineProperty(gameStats, "computerInput", { configurable: true, writable: false });
        setTimeout(() =>{
            gameText.innerHTML += `<br>Computer's choice: ${gameStats.computerInput}`;
            
            //Call the checkWinner() function
            checkWinner();
            //Increment the wins or losses value accordingly if it wasn't a tie after a certain amount of time, so the function doesn't get called again for a few seconds
            if(gameStats.roundWinner == 'Player'){
                gameStats.wins++;
            } else if(gameStats.roundWinner == 'Computer'){
                gameStats.losses++;
            }
            //Set roundEmpty to true and call checkNewRound() after a certain interval of time
            setTimeout(() =>{
                checkNewRound();
            }, 1250)
        }, 1250)
    }
}

//Declare the checkWinner() function
function checkWinner(){
    //Check who the winner is, and display it on the gameText
    if(gameStats.userInput == 'Rock'){
        switch(gameStats.computerInput){
            case "Rock": gameText.innerHTML += "<br><br>Tie!";
            gameStats.roundWinner = 'Tie'
            break;
            case "Paper": gameText.innerHTML += "<br><br>Computer +1!";
            gameStats.roundWinner = 'Computer';
            break;
            case "Scissors": gameText.innerHTML += "<br><br>Player +1!";
            gameStats.roundWinner = 'Player';
            break;
        }
    } else if(gameStats.userInput == 'Paper'){
        switch(gameStats.computerInput){
            case "Rock": gameText.innerHTML += "<br><br>Player +1!";
            gameStats.roundWinner = 'Player';
            break;
            case "Paper": gameText.innerHTML += "<br><br>Tie!";
            gameStats.roundWinner = 'Tie'
            break;
            case "Scissors": gameText.innerHTML += "<br><br>Computer +1!";
            gameStats.roundWinner = 'Computer';
            break;
        }
    } else if(gameStats.userInput == 'Scissors'){
        switch(gameStats.computerInput){
            case "Rock": gameText.innerHTML += "<br><br>Computer +1!";
            gameStats.roundWinner = 'Computer';
            break;
            case "Paper": gameText.innerHTML += "<br><br>Player +1!";
            gameStats.roundWinner = 'Player';
            break;
            case "Scissors": gameText.innerHTML += "<br><br>Tie!";
            gameStats.roundWinner = 'Tie'
            break;
        }
    }
}

//Declare the checkNewRound function
function checkNewRound(){
    //if the wins and losses are less than five, start a new round. If not, call the endGame() function.
    if(gameStats.wins < gameStats.firstTo && gameStats.losses < gameStats.firstTo){
        gameStats.roundReset();
        gameStats.roundEmpty = true;
        newRound();
    } else{
        endGame();
    }
}

//Declare the endGame() function
function endGame(){
    //If the user wins, declare so on the screen, and vice versa
    if(gameStats.wins == gameStats.firstTo){
        gameText.innerHTML = "Player Wins!"
    } else{
        gameText.innerHTML = "Computer Wins!"
    }

    //Set gameRunning to false
    gameStats.gameRunning = false;

    //After a certain amount of time, add the text "New Game?" to the gameText
    setTimeout(()=>{
        gameText.innerHTML += "<br><br>New Game?"
    }, 1250)
}
