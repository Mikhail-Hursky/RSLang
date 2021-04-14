import { SAVANNAH_BG, SAVANNAH_BG_START, SAVANNAH_SOUND } from "../actionTypes";

export interface savannahState {
  position: number;
  sound: boolean
}

const initialState: savannahState = {
 position: 100,
 sound: true
};

export const savannahReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVANNAH_BG:
      state = { ...state, position:  state.position - action.value};
      break;
    case SAVANNAH_BG_START:
        state = { ...state, position:  100};
      break;
    case SAVANNAH_SOUND:
        state = { ...state, sound: !state.sound};
      break;
  }
  return state;
};
