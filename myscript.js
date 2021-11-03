
const gameBoard = (() => {
    const board = Array(9);

    const winConditions =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    const createBoard = () => {
        const turn = document.getElementById("turnCheck")
        turn.textContent = "Player 1 turn";
        const currentBoard = document.getElementById("gameBoard");
        for (let i = 0; i < board.length; i++) {
            
            let square = document.createElement("div");          
            square.textContent = board[i];
            square.setAttribute("index",[i]);
            currentBoard.appendChild(square).className = "square";

        }

        
    }

    console.log(board);
    return {board, winConditions, createBoard};
})();


const playerFactory = (name, team) => {
    const getName  = () => name;
    const getTeam = () => team;

    return {getName, getTeam};
}

const player1 = playerFactory("Player1", "X");
const player2 = playerFactory("Player2","O");


const gameFlow = (() => {
    gameBoard.createBoard();


    const turn = () => {
        const turn = document.getElementById("turnCheck")
        if(turn.textContent === "Player 1 turn") {
            turn.textContent = "Player 2 turn"
            return true;
        } else {
            turn.textContent = "Player 1 turn";
            return false;
        }
    

    }

    const makeMove = (e) => {  
        if (turn() === true) {
            e.target.textContent = player1.getTeam(); 
            gameBoard.board[(e.target.getAttribute("index"))] = player1.getTeam();
            gameStatus();

        } else {
            e.target.textContent = player2.getTeam(); 
            gameBoard.board[(e.target.getAttribute("index"))] = player2.getTeam();
            gameStatus();
            
        }
    }

    const gameStatus = () => {

        for(let i = 0; i< gameBoard.winConditions.length; i++) {
            let w = gameBoard.winConditions[i];
            let sum = 0;
            
            for(let j = 0; j< w.length; j++) {
                let a = ([w]);
                let b = ([j]);
                let wtf = ([w[j]]);
                if(gameBoard.board[w[j]] === player1.getTeam()) {
                    sum++
                    console.log("sigh");
                }
                if(sum === 3) {
                    console.log("gameover?");
                }
            }
            
            
  
        }
    }
        
 

    

    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", makeMove, {once: true});
    })


        
})();




