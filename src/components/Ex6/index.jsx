import React, { useState, useEffect } from "react";
import "./style.css"
export default function Ex6() {

    const emptyBoard = Array(9).fill("")
    const [board, setBoard] = useState(emptyBoard)
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [winner, setWinner] = useState(null)
    const handleCellClick = (index) => {
        if (winner) {
            console.log("Jogo Finalizado")
        }

        if (board[index] !== "") return null
        setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item))

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    const checkWinner = () => {
        const possibleWaysToWin = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],

            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],

            [board[6], board[4], board[2]],
            [board[0], board[4], board[8]],

        ]

        possibleWaysToWin.forEach(cells => {
            if (cells.every(cell => cell === "O")) {
                setWinner('O venceu')
            }
            if (cells.every(cell => cell === "X")) {
                setWinner('X venceu')
            }
        })

        checkDraw()

    }

    const checkDraw = () => {
        if (board.every(item => item !== "")) {
            setWinner('Empatou')
        }
    }

    useEffect(checkWinner, [board])

    const resetGame = () => {
        setCurrentPlayer("O")
        setBoard(emptyBoard)
        setWinner(null)
    }


    return (
        <main>
            <h1>Exercício 6</h1>
            {winner &&
                <header>
                    {winner === "Empatou" ?
                        <h2 className="winner-message">
                            <span className={winner}>Empatou</span></h2>
                        :
                        <h2 className="winner-message">
                            <span className={winner}>{winner}</span></h2>
                    }
                    <button onClick={resetGame}>Recomeçar jogo</button>
                </header>
            }
            <div className={`board ${winner ? "game-over" : ""}`}>

                {board.map((item, index) => (
                    <div className={`cell ${item}`}
                        onClick={() => handleCellClick(index)}
                        key={index}>{item}
                    </div>
                ))}

            </div>

        </main>
    )
}