import { Action, State } from "../types";
import { ActionType } from "./action";


const initialState: State = {
  gameData: [null, 0, 1, null, 1, null, 1, null, null],
  currentPlayer: 1,
  gameStatus: 'play',
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.UPDATE_GAME_DATA:
      return {...state, gameData: action.payload};
    case ActionType.CHANGE_PLAYER:
      return {...state, currentPlayer: Number(!state.currentPlayer) as 0 | 1};
    case ActionType.UPDATE_GAME_STATUS:
      return {...state, gameStatus: action.payload};
    default:
      return state;
  }
};

export {reducer};