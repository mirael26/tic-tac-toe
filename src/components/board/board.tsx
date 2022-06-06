import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreator, ActionType } from "../../store/action";

import { State } from "../../types";

import Cell from "../cell/cell";

const getCellId = (evt: React.SyntheticEvent): string | null => {
  const element = evt.target as Element;
  if ((element).classList.contains("cell")) {
    return element.id;
  } 
  if (element.parentElement.classList.contains("cell")) {
    return element.parentElement.id;
  }
  return null;
}

const Board = ():JSX.Element => {

  const cellValues = useSelector((state: State) => state.gameData);
  const currentPlayer = useSelector((state: State) => state.currentPlayer);
  const dispatch = useDispatch();

  const onBoardClick = (evt: React.SyntheticEvent): void => {
    const cellId = getCellId(evt);
    
    if (cellValues[cellId] !== null || cellId === null) {
      return;
    }

    const newGameData = cellValues.slice();
    newGameData[cellId] = currentPlayer;
    dispatch(ActionCreator.updateGameData(newGameData));
    dispatch(ActionCreator.changePlayer());
  }

  return (
    <div className="board" onClick={onBoardClick}>
      {cellValues.map((el, id) => {
        return <Cell key={`cell-${id}`} value={el} cellId={id}/>
      })}
      <img className="board__image" src={require("../../img/board.png")} alt="game board"/>
    </div>
  );
}

export default Board;