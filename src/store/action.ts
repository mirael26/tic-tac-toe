import { CellValue, GameStatus, UpdateGameData, ChangePlayer, UpdateGameStatus, ResetGame, Winner } from "../types";

export const ActionType = {
  UPDATE_GAME_DATA: "UPDATE_GAME_DATA",
  CHANGE_PLAYER: "CHANGE_PLAYER",
  UPDATE_GAME_STATUS: "UPDATE_GAME_STATUS",
  RESET_GAME: "RESET_GAME", 
  UPDATE_WINNER: "UPDATE_WINNER"
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
  updateWinner: (winner: Winner) => ({
    type: ActionType.UPDATE_WINNER,
    payload: winner,
  }),
  resetGame: (): ResetGame => ({
    type: ActionType.RESET_GAME,
  })
};