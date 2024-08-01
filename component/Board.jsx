"use client";
import React from "react";
import Square from "./Square";
import { Box, Container, Grid } from "@mui/material";

const Board = ({ square, onClick, winningSquares, isDraw }) => {
  return (
    <Box>
      <Container>
        <Box>
          <Grid container >
            {square.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Square
                  value={item}
                  onSquareClick={() => onClick(index)}
                  isWinningSquare={winningSquares.includes(index)}
                  isDraw={isDraw}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Board;
