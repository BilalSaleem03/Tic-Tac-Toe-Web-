# Tic-Tac-Toe-Web-
# Tic-Tac-Toe Game README

## Description

This project is a simple Tic-Tac-Toe game implemented in JavaScript. Two players take turns clicking on the boxes to place their markers ("X" or "O"). The game checks for a winner after each turn and announces the result. The game can be reset at any time, and a new game can be started after a win or a draw.

## Features

- Two-player game with alternating turns.
- Displays the winner or announces a draw.
- Provides buttons to reset the game or start a new game.
- Disables boxes once they are clicked.

## Files

- `index.html`: Contains the structure of the web page.
- `styles.css`: Contains the styling for the web page.
- `script.js`: Contains the JavaScript code to handle the game logic and update the UI.

## Getting Started

### Prerequisites

To run this project, you'll need:

- A modern web browser

### Installation

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.

### Usage

1. Open the web page in your browser.
2. Players take turns clicking on the boxes to place their markers ("X" or "O").
3. The game will check for a winner after each turn.
4. The result will be displayed, and the game can be reset or a new game started using the provided buttons.

### JavaScript Code Explanation

#### Elements Selection

The script selects various elements from the DOM for manipulation.

```javascript
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winnerName = document.querySelector(".winner-message");
let newGame = document.querySelector(".new-game");
let drawMessage = document.querySelector(".draw-message");

let turn = true;
let count = 0;
let winnerDeclared = false;
```

#### Box Click Event

The script handles the event when a box is clicked by a player.

```javascript
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) { // player X's turn
            box.innerText = "X";
            turn = false;
            count += 1;
        } else { // player O's turn
            box.innerText = "O";
            turn = true;
            count += 1;
        }
        box.disabled = true;
        winner();
        if (count === 9 && !winnerDeclared) {
            drawGame();
        }
    });
});
```

#### Win Patterns

The script defines the patterns that constitute a win.

```javascript
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
```

#### Winner Message

The script displays the winner message and disables the boxes when a player wins.

```javascript
const winnerMessage = (winner) => {
    disableBtn();
    winnerName.innerText = "Winner is " + winner;
    winnerName.classList.remove("hide");
    newGame.classList.remove("hide");
};

const disableBtn = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};
```

#### Reset Game

The script handles the game reset functionality.

```javascript
const resetGame = () => {
    for (const box of boxes) {
        box.disabled = false;
        turn = true;
        box.innerText = "";
        winnerDeclared = false;
        count = 0;
    }
    winnerName.classList.add("hide");
    newGame.classList.add("hide");
    drawMessage.classList.add("hide");
};
```

#### Draw Game

The script handles the scenario when the game ends in a draw.

```javascript
const drawGame = () => {
    drawMessage.classList.remove("hide");
    newGame.classList.remove("hide");
};
```

#### Check for Winner

The script checks for a winner after each turn.

```javascript
let winner = () => {
    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                winnerMessage(val1);
                winnerDeclared = true;
                return;
            }
        }
    }
};
```

#### Event Listeners for Reset and New Game

The script adds event listeners to the reset and new game buttons.

```javascript
newGame.addEventListener("click", () => { resetGame(); });
resetBtn.addEventListener("click", () => { resetGame(); });
```

