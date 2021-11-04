
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

    const reset = () => {
        
        for(let i = 0; i< board.length; i++) {
            let square = document.getElementsByClassName("square");
            square[i].textContent = "";
            gameBoard.board[i] = "";
            
        }
    }
    createBoard();
    return {board, winConditions, reset};
})();


const playerFactory = (name, team) => {
    const getName  = () => name;
    const getTeam = () => team;

    return {getName, getTeam};
}

const player1 = playerFactory("Player1", "X");
const player2 = playerFactory("Player2","O");


const gameFlow = (() => {
    
    let rounds = 0;
    const state = document.getElementById("turnCheck")
    const restartButton = document.getElementById("restartBtn");

    const turn = () => {
        
        if(state.textContent === "Player 1 turn") {
            state.textContent = "Player 2 turn"
            return true;
        } else {
            state.textContent = "Player 1 turn";
            return false;
        }
    

    }

    const makeMove = (e) => {  
        
        if (turn() === true) {
            e.target.textContent = player1.getTeam(); 
            gameBoard.board[(e.target.getAttribute("index"))] = player1.getTeam();
            gameStatus(player1.getTeam());

        } else {
            e.target.textContent = player2.getTeam(); 
            gameBoard.board[(e.target.getAttribute("index"))] = player2.getTeam();
            gameStatus(player2.getTeam());
            
        }
    }

    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", makeMove, {once: true});
    })

    const gameStatus = (team) => {
        rounds++;

        if(rounds >= 9) {             
            state.textContent = "Game has ended in a tie";
            gameEnded();  
        }

        for(let i = 0; i< gameBoard.winConditions.length; i++) {
            let w = gameBoard.winConditions[i];
            let sum = 0;
            
            for(let j = 0; j< w.length; j++) {
            // Index j of first Array in win cons
                if(gameBoard.board[w[j]] === team) {
                    sum++        
                }
                if(sum === 3) {  
                    state.textContent = (team + " has won");
                    gameEnded();  
                    
                }
            }

        }


    }

    const gameEnded = () => {
        document.querySelectorAll(".square").forEach(square => {
            square.removeEventListener("click", makeMove);
        })

    }
 

    restartButton.addEventListener("click", (e) => {
        gameBoard.reset();
        state.textContent = "Player 1 turn"
        rounds = 0;
        
        document.querySelectorAll(".square").forEach(square => {
            square.addEventListener("click", makeMove, {once: true});
        })
        
    })



})();






