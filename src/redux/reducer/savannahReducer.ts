import { SAVANNAH_BG } from "../actionTypes";

export interface savannahState {
  position: number
}

const initialState: savannahState = {
 position: 100
};

export const savannahReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVANNAH_BG:
      state = { ...state, position:  state.position - 10};
      break;
  }
  return state;
};
