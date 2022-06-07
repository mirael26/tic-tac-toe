import { Action, State } from "../types";
import { ActionType } from "./action";


const initialState: State = {
  gameData: [null, null, null, null, null, null, null, null, null],
  currentPlayer: 1,
  gameStatus: 'play',
  winner: null,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.UPDATE_GAME_DATA:
      return {...state, gameData: action.payload};
    case ActionType.CHANGE_PLAYER:
      return {...state, currentPlayer: Number(!state.currentPlayer) as 0 | 1};
    case ActionType.UPDATE_GAME_STATUS:
      return {...state, gameStatus: action.payload};
    case ActionType.UPDATE_WINNER:
      return {...state, winner: action.payload};
    case ActionType.RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export {reducer};