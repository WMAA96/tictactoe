
const gameBoard = (() => {
    const board = [
        "X", "O", "O",
        "O", "O", "O",
        "O", "O", "O",
    ];

    const createBoard = () => {
        const currentBoard = document.getElementById("gameBoard");
        for (let i = 0; i < board.length; i++) {
            
            let square = document.createElement("div");          
            square.textContent = board[i];
            currentBoard.appendChild(square).className = "square";

        }

        return {createBoard};
    }

    console.log(board);
    return {board, createBoard};
})();


const playerFactory = (name, team) => {
    const getName = () => console.log(name);

    const getTeam = () => team;

    return {getName, getTeam};
}
const player1 = playerFactory("Player1", "X");
const player2 = playerFactory("Player2","O");


const gameFlow = (() => {
    gameBoard.createBoard();

    const makeMove = () => console.log(player1.getTeam());
    

    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", makeMove, {once: true});
    })


        
})();




