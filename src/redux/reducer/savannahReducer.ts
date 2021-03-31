import { SAVANNAH_BG, SAVANNAH_BG_START } from "../actionTypes";

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
    case SAVANNAH_BG_START:
        state = { ...state, position:  100};
      break;
  }
  return state;
};
