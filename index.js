const newGameBtn = document.querySelector('#new-game-btn');

//Check if the button was clicked, and if so, prompt the user to input a number and pass it to the game function.
newGameBtn.addEventListener('click', () =>{
    let roundCount = parseInt(prompt('How many games do you want to play?'))
    game(roundCount);
})

//Make the game function, and call the newRound function for as many times as were passed.
function game(roundCount){
    for(let i=0; i<roundCount; i++){
        newRound();
    }
}