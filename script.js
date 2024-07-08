let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winnerName = document.querySelector(".winner-message");
let newGame = document.querySelector(".new-game");
let drawMessage = document.querySelector(".draw-message");

let turn = true;
let count = 0;
let winnerDeclared = false;
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(turn){ //player x turn
            box.innerText = "X";
            turn = false;
            count +=1;
        }
        else{  //player y turn
            box.innerText = "O";
            turn = true;
            count +=1;
        }
        box.disabled = true;
        winner();
        if(count === 9 && !winnerDeclared)
        {
            // console.log("draw");
            drawGame();
        }
    })
})

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const winnerMessage = (winner) => {
    disableBtn();
    winnerName.innerText = "Winner is "+winner;
    winnerName.classList.remove("hide");
    newGame.classList.remove("hide");
}

const disableBtn = ()=>{
    for (const box of boxes) {
        box.disabled = true;
    }
}
const resetGame = ()=>{
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
}

const drawGame = ()=>{
    drawMessage.classList.remove("hide");
    newGame.classList.remove("hide");
}

let winner = ()=>{
    for(let pattern of winPattern)
    {
        let val1 = boxes[pattern[0]].innerText; 
        let val2 = boxes[pattern[1]].innerText; 
        let val3 = boxes[pattern[2]].innerText;
        
        if(val1 != "" && val2 != "" && val3 != "")
        {
            if(val1 === val2 && val2 === val3)
            {
                winnerMessage(val1);
                winnerDeclared= true;
                return;   
            }
        }
    }
}

newGame.addEventListener("click" , ()=>{resetGame();})
resetBtn.addEventListener("click" , ()=>{resetGame();})

