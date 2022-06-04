import * as React from "react";

import {CellValue} from "../../types";

import Cell from "../cell/cell";

const Cells: Array<CellValue> = [null, 0, 1, null, 1, null, 1, null, null];

const Board = ():JSX.Element => {
  return (
    <div className="board">
      {Cells.map((el, id) => {
        return <Cell key={`cell-${id}`} value={el}/>
      })}
      <img className="board__image" src={require("../../img/board.png")} alt="game board"/>
    </div>
  );
}

export default Board;