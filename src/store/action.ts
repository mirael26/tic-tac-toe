import { CellValue, GameStatus, UpdateGameData, ChangePlayer, UpdateGameStatus, ResetGame } from "../types";

export const ActionType = {
  UPDATE_GAME_DATA: "UPDATE_GAME_DATA",
  CHANGE_PLAYER: "CHANGE_PLAYER",
  UPDATE_GAME_STATUS: "UPDATE_GAME_STATUS",
  RESET_GAME: "RESET_GAME", 
} as const;

export const ActionCreator = {
  updateGameData: (gameData: Array<CellValue>): UpdateGameData => ({
    type: ActionType.UPDATE_GAME_DATA,
    payload: gameData
  }),
  changePlayer: (): ChangePlayer => ({
    type: ActionType.CHANGE_PLAYER,
  }),
  updateGameStatus: (gameStatus: GameStatus): UpdateGameStatus => ({
    type: ActionType.UPDATE_GAME_STATUS,
    payload: gameStatus
  }),
  resetGame: (): ResetGame => ({
    type: ActionType.RESET_GAME,
  })
};