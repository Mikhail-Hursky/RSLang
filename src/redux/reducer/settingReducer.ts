import { SETTING_MINUS, SETTING_PLUS } from "../actionTypes";

export interface settingState {
  word: number;
}

const initialState: settingState = {
  word: 0,
};

export const settingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SETTING_PLUS:
      state = { ...state, word: state.word + 1 };
      break;
    case SETTING_MINUS:
      state = { ...state, word: state.word - 1 };
      break;
    default:
      return state;
  }
  return state;
};
