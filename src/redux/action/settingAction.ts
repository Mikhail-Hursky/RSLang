import {
  SETTING_MINUS,
  SETTING_PLUS,
  WORD_PLUS,
  WORD_MINUS,
  SOUND_CHANGE,
  CARD_PLUS,
  CARD_MINUS,
  btnAnswer,
  btnDelete,
  btnEasy,
  btnExample,
  btnGood,
  btnHard,
  btnMeaning,
  btnPicture,
  btnRepeate,
  btnTranscription,
  btnTranslate,
} from '../actionTypes';

export const counterPlus = () => ({
  type: SETTING_PLUS,
});
export const counterMinus = () => ({
  type: SETTING_MINUS,
});

export const wordPlus = () => ({
  type: WORD_PLUS,
});

export const wordMinus = () => ({
  type: WORD_MINUS,
});

export const setSound = () => ({
  type: SOUND_CHANGE,
});

export const cardPlus = () => ({
  type: CARD_PLUS,
});

export const cardMinus = () => ({
  type: CARD_MINUS,
});

export const buttonRepeate = () => ({
  type: btnRepeate,
});

export const buttonHard = () => ({
  type: btnHard,
});

export const buttonGood = () => ({
  type: btnGood,
});

export const buttonEasy = () => ({
  type: btnEasy,
});

export const buttonDelete = () => ({
  type: btnDelete,
});

export const buttonTranslate = () => ({
  type: btnTranslate,
});

export const buttonMeaning = () => ({
  type: btnMeaning,
});

export const buttonExample = () => ({
  type: btnExample,
});

export const buttonTranscription = () => ({
  type: btnTranscription,
});

export const buttonPicture = () => ({
  type: btnPicture,
});

export const buttonAnswer = () => ({
  type: btnAnswer,
});
