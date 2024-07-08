# Tic-Tac-Toe-Web-
Tic Tac Toe Game
This is a simple implementation of the classic Tic Tac Toe game using JavaScript and HTML/CSS. The game includes the following features:

HTML Structure: Contains a grid of boxes representing the Tic Tac Toe board, buttons for resetting the game and starting a new game, and elements for displaying the winner or a draw message.

CSS Styling: Basic styling to provide a visually appealing game interface.

JavaScript Logic: Manages game mechanics such as turns between players (X and O), checking for win conditions, declaring a winner, handling draws, and resetting the game.

How to Play
Clone or Download the repository to your local machine.

Open the index.html file in a web browser.

Game Rules:

Click on any box in the grid to place an "X" or "O" depending on whose turn it is.
The game alternates turns between "X" and "O".
The game automatically detects if there is a winner based on three-in-a-row matches (horizontal, vertical, or diagonal) or if the game is a draw (all boxes are filled without a winner).
Winning:

If a player completes a line (either horizontally, vertically, or diagonally) with their symbol ("X" or "O"), that player wins.
The winner is displayed in the "Winner Message" area.
Draw:

If all boxes are filled and there is no winner, the game declares a draw.
The draw message is displayed, and players have the option to start a new game.
Buttons:

Reset Button: Resets the game board and allows players to start a new game without resetting the score.
New Game Button: Resets the entire game, including scores and the game board.
Code Explanation
Variables:

boxes: Holds references to each box element in the game grid.
resetBtn, newGame: References to the reset button and new game button respectively.
winnerName, drawMessage: Elements where winner messages and draw messages are displayed.
turn: Tracks whose turn it is ("X" or "O").
count: Tracks the number of moves made in the game.
winnerDeclared: Flags whether a winner has been declared.
Event Listeners:

Each box in the grid has an event listener that triggers when clicked, allowing players to place their symbol ("X" or "O").
Event listeners for the reset button and new game button reset the game board or entire game state accordingly.
Functions:

winner(): Checks for win conditions based on predefined winning patterns (winPattern array).
winnerMessage(winner): Displays the winner's name and disables further game moves.
disableBtn(): Disables all boxes after a winner is declared or the game ends in a draw.
resetGame(): Resets the game state, including clearing box contents, resetting turn tracking, and hiding messages.
drawGame(): Displays the draw message and enables starting a new game.
Further Customization
You can modify the CSS to change the appearance of the game.
Add more features such as keeping track of scores across multiple games, implementing a timer, or adding animations.
Enhance the game logic to include more complex win conditions or additional player options.
Enjoy playing Tic Tac Toe!
