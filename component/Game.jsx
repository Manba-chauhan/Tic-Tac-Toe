"use client";
import React, { useState } from "react";
import Board from "./Board";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

const Game = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);
  const [movecount, setMoveCount] = useState(0);
  const [draw, setDraw] = useState(false);
  const [winningSquares, setWinningSquares] = useState([]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return { winner: null, line: [] };
  };

  const handleClick = (index) => {
    const newSquares = square.slice();
    const { winner } = calculateWinner(newSquares);
    if (winner || newSquares[index]) {
      return;
    }
    newSquares[index] = isXnext ? "X" : "O";
    setSquare(newSquares);
    setIsXnext(!isXnext);
    setMoveCount(movecount + 1);
    if (movecount + 1 === 9 && !winner) {
      setDraw(true);
    }
    const result = calculateWinner(newSquares);
    if (result.winner) {
      setWinningSquares(result.line);
    }
  };

  const reloadGame = () => {
    setSquare(Array(9).fill(null));
    setIsXnext(true);
    setMoveCount(0);
    setDraw(false);
    setWinningSquares([]);
  };

  const { winner } = calculateWinner(square);
  let status
  if (winner) {
    status = "Winner: " + winner;
  } else if (draw) {
    status = "It's a tie!";
  } else {
    status = "Next player: " + (isXnext ? "X" : "O");
  }

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "40px", md: "45px" },
              textAlign: "center",
              color: "blueviolet",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Tic-Tac-Toe Game
          </Typography>

          <br />
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "40px", md: "45px" },
              textAlign: "center",
              color: winner ? "green" : draw ? "red" : "green",
              fontWeight: 600,
            }}
          >
            {winner
              ? "Game Over Winner is : " + winner
              : draw
              ? "Game Over: It's a tie!"
              : (isXnext ? "Cross" : "Circle") + " turns"}
          </Typography>
          <br />
          {winner || draw ? (
            <Button
              variant="contained"
              color="success"
              sx={{
                textAlign: "center",
                width: { xs: "80%", sm: "60%", md: "30%" },
                mb: 4,
              }}
              onClick={reloadGame}
            >
              Reset The Draw Game
            </Button>
          ) : null}
        </Box>
        <Box>
          <Board
            square={square}
            onClick={handleClick}
            winningSquares={winningSquares}
            isDraw={draw}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Game;
