// DOM Content Loaded event listener
window.addEventListener("DOMContentLoaded", () => {
    // Capture DOM elements from page to store as vars
    let displayResults = document.getElementById("displayResults")
    let resetBtn = document.getElementById("reset")
    let gameboard = document.getElementById("gameboard")
    let displayTurn = document.getElementById("displayTurn")
    // set intial turn message
    displayTurn.innerText = "Player X goes first."

    // Create or declare all game logic variables and conditions
    let turnNum = 0
    let playerX = []
    let playerO = []

    let winCombo = [
        ["topL", "topM", "topR"],
        ["midL", "midM", "midR"],
        ["botL", "botM", "botR"],
        ["topL", "midM", "botR"],
        ["topR", "midM", "botL"],
        ["topR", "midR", "botR"],
        ["topM", "midM", "botM"],
        ["topL", "midL", "botL"]
    ]

    // FUNCTION: boxClick() --> triggers game tile play
    function boxClick(event) {
        let tileCheck = event.target

        //// if box already played, alert user to find a new game tile to play
        if (tileCheck.classList.contains("playedX") || tileCheck.classList.contains("playedO")) {
            displayTurn.innerText = "Tile already played. Click again."
        } else {
            //// check for X or O turn and display message in displayTurn box accordingly
            if (turnNum % 2 === 0) {
                // LOGIC FOR PLAYER X's TURN

                // add the playedX class to target div
                tileCheck.classList.add("playedX")

                // update innerText of target div to say X
                tileCheck.innerText = "X"

                // update the text for player's turn to be played next (O's turn)
                displayTurn.innerText = "Player O's turn."

                // update turnNum by 1
                turnNum++

                // push to array played tile #id
                playerX.push(tileCheck.id)
            } else {
                // LOGIC FOR PLAYER O's TURN
                tileCheck.classList.add("playedO")
                tileCheck.innerText = "O"
                displayTurn.innerText = "Player X's turn."
                turnNum++

                // push play id
                playerO.push(tileCheck.id)
            }
            //// if greater than 4 turns then check to see if game has been won
            if (turnNum >= 4) {
                gameOver()
            }

            //// check and see if there have been x9 turns but no winner; call tied game
            if (turnNum === 9) {
                displayResults.innerText = "GAME TIED"
                displayTurn.innerText = "PLAY AGAIN"
            }
        }
    }
    // add event listener on user click of game tile
    gameboard.addEventListener("click", boxClick)

    // FUNCTION: gameOver() --> checks if winner of game
    function gameOver() {
        // loop through all possible win combos (winCombo array)
        for (let i = 0; i < winCombo.length; i++) {
          // console.log(`Current array: ${winCombo[i]}`)
      
          // if user has had any matches for x or O so far AKA declare count for x and O
          let winFoundX = 0
          let winFoundO = 0
      
          // loop through individual win combo
          for (let y = 0; y < winCombo[i].length; y++) {
            //console.log(`Current id: ${winCombo[i][y]}`)
            if (playerX.includes(winCombo[i][y])){
              winFoundX++
              if (winFoundX === 3) {
                displayResults.innerText = "X has won the game!"
                stopGame()
              }
            }
      
            if (playerO.includes(winCombo[i][y])) {
              winFoundO++
              if (winFoundO === 3) {
                displayResults.innerText = "O has won the game!"
                stopGame()
              }
            }
          }
        }
      }

    //// check and see if there is a winner on every turn
    //// if player has won, run stopGame()
    ////// send message to displayResults div and displayTurn div

    // FUNCTION: stopGame() --> doesn't allow for further game play once game won
    function stopGame() {
        gameboard.removeEventListener("click", boxClick)
    }

    // FUNCTION: resetGameboard() --> add event listener to #reset button on click
    //// loops through gameboard; resets all variables

})
    
