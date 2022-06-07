import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";

import { Combinations } from "../../consts";
import { ActionCreator } from "../../store/action";
import { CellValue, State } from "../../types";

import Cell from "../cell/cell";

type Combinations = keyof typeof Combinations;

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

const isBoardFull = (gameData: Array<CellValue>): boolean => {
  return gameData.filter(cell => cell === null).length === 0;
}

const findCombination = (gameData: Array<CellValue>): null | Combinations => {
  const result = Object.keys(Combinations).find((combination) => {
    const [a, b, c] = Combinations[combination];
    if ((gameData[a] === 0 || gameData[a] === 1)
      && gameData[a] === gameData[b]
      && gameData[a] === gameData[c]) {
      return true;
    }
    return false;
  }) as Combinations;
  return result === undefined ? null : result;
}

const Board = ():JSX.Element => {

  const [winCombination, setWinCombination] = useState<Combinations | null>(null);
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const cellValues = useSelector((state: State) => state.gameData);
  const currentPlayer = useSelector((state: State) => state.currentPlayer);
  const dispatch = useDispatch();

  useEffect(
    () => {
      const combination = findCombination(cellValues);
      if (combination) {
        setTimeout(() => {
          dispatch(ActionCreator.updateWinner(Number(!currentPlayer) as 0 | 1));
          dispatch(ActionCreator.updateGameStatus('gameover'));
        }, 4000);
        setDisabled(true);
        setWinCombination(combination);
        return;
      }
      if (isBoardFull(cellValues)) {
        setTimeout(() => {
          dispatch(ActionCreator.updateWinner('drawn'));
          dispatch(ActionCreator.updateGameStatus('gameover'));
        }, 2000);
      }
    },
    [cellValues]
  );

  const onBoardClick = (evt: React.SyntheticEvent): void => {
    if (isDisabled) {
      return;
    }
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