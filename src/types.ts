import { ActionType } from "./store/action";
import { Combinations } from "./consts";

// data

export type CellValue = null | 1 | 0;
export type GameStatus = 'play' | 'gameover';
export type Winner = null | 1 | 0 | 'drawn';

export type CombinationsType = keyof typeof Combinations;

// state

export interface State {
  gameData: Array<CellValue>,
  currentPlayer: 1 | 0,
  gameStatus: GameStatus,
  winner: Winner
};

// actions

export interface UpdateGameData {
  type: typeof ActionType.UPDATE_GAME_DATA,
  payload: Array<CellValue>
}

export interface ChangePlayer {
  type: typeof ActionType.CHANGE_PLAYER,
}

export interface UpdateGameStatus {
  type: typeof ActionType.UPDATE_GAME_STATUS,
  payload: GameStatus
}

export interface UpdateWinner {
  type: typeof ActionType.UPDATE_WINNER,
  payload: Winner
}

export interface ResetGame {
  type: typeof ActionType.RESET_GAME,
}

export type Action = UpdateGameData | ChangePlayer | UpdateGameStatus | ResetGame | UpdateWinner;