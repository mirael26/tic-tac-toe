import * as React from "react";
import { useSelector } from "react-redux";

import { State } from "../../types";

import Board from "../board/board";
import Result from "../result/result";

const Game = ():JSX.Element => {
  const gameStatus = useSelector((state: State) => state.gameStatus)

  return (
    <div className="game">
      <h1 className="game__heading">Tic-tac-toe</h1>
      {gameStatus === 'play'
        ? <Board />
        : <Result />}
    </div>
  );
}

export default Game;