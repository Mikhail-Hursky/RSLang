import { SAVANNAH_BG, SAVANNAH_BG_START, SAVANNAH_SOUND } from "../actionTypes";

export const topBg = (height:any) => ({
  type: SAVANNAH_BG,
  value: height
});

export const botBg = () => ({
  type: SAVANNAH_BG_START
});

export const sound = () => ({
  type: SAVANNAH_SOUND,
});