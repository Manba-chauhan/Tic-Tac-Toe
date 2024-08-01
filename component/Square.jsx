"use client";
import { Button } from "@mui/material";
import React from "react";

const Square = ({ value, onSquareClick, isWinningSquare, isDraw }) => {
  return (
    <Button
      variant="outlined"
      onClick={onSquareClick}
      sx={{
        height: { xs: 60, sm: 100, md: 150 },
        color: "white",
        fontSize: "30px",
        bgcolor: isWinningSquare
          ? "green"
          : isDraw
          ? "red"
          : "goldenrod",
        borderColor: "white",
        borderWidth: "1px",
        "&:hover": {
          bgcolor: "white",
          color: isWinningSquare ? "green" : isDraw ? "red" : "goldenrod",
          borderColor: isWinningSquare
            ? "green"
            : isDraw
            ? "goldenrod"
            : "blueviolet",
        },
      }}
      fullWidth
    >
      {value}
    </Button>
  );
};

export default Square;
