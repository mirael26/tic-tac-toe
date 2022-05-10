import * as React from "react";

import Board from "../board/board";

const Game = ():JSX.Element => {
  return (
    <div className="game">
      <h1 className="game__heading">Tic-tac-toe</h1>
      <Board />
    </div>
  );
}

export default Game;