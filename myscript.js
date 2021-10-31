
const gameBoard = (() => {
    const board = Array(9);

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

        return {createBoard};
    }

    console.log(board);
    return {board, createBoard};
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

        } else {
            console.log(e.target);
            console.log(gameBoard.board);
            e.target.textContent = player2.getTeam(); 
            gameBoard.board[(e.target.getAttribute("index"))] = player2.getTeam();
            
        }
    }

    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", makeMove, {once: true});
    })


        
})();




