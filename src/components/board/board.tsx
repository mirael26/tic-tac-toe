import * as React from "react";
import Cell from "../cell/cell";

const Board = ():JSX.Element => {
  return (
    <div className="board">
      <Cell />
      <img className="board__image" src={require("../../img/board.png")} alt="game board"/>
    </div>
  );
}

export default Board;