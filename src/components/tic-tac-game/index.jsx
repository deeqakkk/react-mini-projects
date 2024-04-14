// 0 1 2
// 3 4 5
// 6 7 8
import { useEffect, useState } from 'react'
import './style.css'
const Square = ({ value, onClick }) => {
  return (
    <button
      className="square"
      onClick={onClick}
      disabled={value ? true : false}
    >
      {value}
    </button>
  )
}
const TicTacGame = () => {
  const [squares, setSquares] = useState(Array(9).fill(''))
  const [isXTurn, setIsXTurn] = useState(true)
  const [status, setStatus] = useState('')

  function handleClick(getCurrentSquare) {
    let copySquares = [...squares]
    copySquares[getCurrentSquare] = isXTurn ? 'X' : 'O'
    setIsXTurn(!isXTurn)
    setSquares(copySquares)
  }

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i]
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x]
      }
    }
    return null
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== ''))
      setStatus('This is a draw, Please restart the game!')
    else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`)
    } else {
      setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
    }
  }, [squares, isXTurn])

  return (
    <div className="game-container">
      <div className="row">
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>
      <h1>{status}</h1>
    </div>
  )
}

export default TicTacGame
