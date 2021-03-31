import { SAVANNAH_BG, SAVANNAH_BG_START, SAVANNAH_SOUND } from "../actionTypes";

export const topBg = () => ({
  type: SAVANNAH_BG,
});

export const botBg = () => ({
  type: SAVANNAH_BG_START,
});

export const sound = () => ({
  type: SAVANNAH_SOUND,
});