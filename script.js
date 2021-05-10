// DOM Content Loaded event listener
window.addEventListener("DOMContentLoaded", () => {
    // Capture DOM elements from page to store as vars
    let displayResults = document.getElementById("displayResults")
    let resetBtn = document.getElementById("reset")
    let gameboard = document.getElementById("gameboard")
    let displayTurn = document.getElementById("displayTurn")

    // Create or declare all game logic variables and conditions
    let turnNum = 0
    let playerX = []
    let playerO = []

    // FUNCTION: boxClick() --> add event listener on user click of game tile
    //// check for X or O turn and display message in displayTurn box accordingly
    //// check and see if there have been x9 turns but no winner; call tied game

    // FUNCTION: gameOver() --> once we have had more than four moves
    //// check and see if there is a winner on every turn
    //// if player has won, run stopGame()
    ////// send message to displayResults div and displayTurn div

    // FUNCTION: stopGame() --> doesn't allow for further game play once game won

    // FUNCTION: resetGameboard() --> add event listener to #reset button on click
    //// loops through gameboard; resets all variables

})
    
