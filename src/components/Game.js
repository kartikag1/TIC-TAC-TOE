import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";
const styles = {
  width: "200px",
  margin: "20px auto",
};
const resultStyles = {
  textAlign: "center",
  fontStyle: "italic",
  fontWeight: "bold",
};
const buttonStyles = {
  margin: "auto",
  display: "block",
};
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  const renderMoves = () => (
    <button style={buttonStyles} onClick={() => setBoard(Array(9).fill(null))}>
      RESTART GAME
    </button>
  );
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p style={resultStyles}>
          {winner
            ? "Winner: " + winner
            : "Player Move : " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
        <p style={resultStyles}>~KARTIK AGARWAL~</p>
      </div>
    </>
  );
};

export default Game;
