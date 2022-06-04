import { ActionType } from "./store/action";

// data

export type CellValue = null | 1 | 0;

export type GameStatus = 'play' | 'gameover';

// state

export interface State {
  gameData: Array<CellValue>,
  currentPlayer: 1 | 0,
  gameStatus: GameStatus,
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

export type Action = UpdateGameData | ChangePlayer | UpdateGameStatus;