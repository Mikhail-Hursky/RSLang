import { SETTING_MINUS, SETTING_PLUS, WORD_PLUS, WORD_MINUS, SOUND_CHANGE, CARD_PLUS, CARD_MINUS, btnAnswer,btnDelete,btnEasy,btnExample,btnGood,btnHard,btnMeaning,btnPicture,btnRepeate,btnTranscription,btnTranslate } from "../actionTypes";

export interface settingState {
  word: number;
  settingWords: number;
  settingCards: number;
  settingSound:boolean;
  btnRepeate:boolean;
  btnHard:boolean;
  btnGood:boolean;
  btnEasy:boolean;
  btnDelete:boolean;
  btnTranslate:boolean;
  btnMeaning:boolean;
  btnExample:boolean;
  btnTranscription:boolean;
  btnPicture:boolean;
  btnAnswer:boolean;
}

const initialState: settingState = {
  word: 0,
  settingWords: 10,
  settingCards: 20,
  settingSound: true,
  btnRepeate:true,
  btnHard:true,
  btnGood:true,
  btnEasy:true,
  btnDelete:true,
  btnTranslate:true,
  btnMeaning:true,
  btnExample:true,
  btnTranscription:true,
  btnPicture:true,
  btnAnswer:true
};

export const settingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SETTING_PLUS:
      state = { ...state, word: state.word + 1 };
      break;
    case SETTING_MINUS:
      state = { ...state, word: state.word - 1 };
      break;
      case WORD_PLUS:
      state = { ...state, settingWords: state.settingWords + 1 };
      break;
      case WORD_MINUS:
      state = { ...state, settingWords: state.settingWords - 1 };
      break;
      case CARD_PLUS:
      state = { ...state, settingCards: state.settingCards + 1 };
      break;
      case CARD_MINUS:
      state = { ...state, settingCards: state.settingCards - 1 };
      break;
      case SOUND_CHANGE:
      state = { ...state, settingSound: !state.settingSound };
      break;
      case btnTranslate:
      state = { ...state, btnTranslate: !state.btnTranslate };
      break;
      case btnRepeate:
      state = { ...state, btnRepeate: !state.btnRepeate };
      break;
      case btnHard:
      state = { ...state, btnHard: !state.btnHard };
      break;
      case btnEasy:
      state = { ...state, btnEasy: !state.btnEasy };
      break;
      case btnGood:
      state = { ...state, btnGood: !state.btnGood };
      break;
      case btnDelete:
      state = { ...state, btnDelete: !state.btnDelete };
      break;
      case btnHard:
      state = { ...state, btnHard: !state.btnHard };
      break;
      case btnMeaning:
      state = { ...state, btnMeaning: !state.btnMeaning };
      break;
      case btnExample:
      state = { ...state, btnExample: !state.btnExample };
      break;
      case btnTranscription:
      state = { ...state, btnTranscription: !state.btnTranscription };
      break;
      case btnPicture:
      state = { ...state, btnPicture: !state.btnPicture };
      break;
      case btnAnswer:
      state = { ...state, btnAnswer: !state.btnAnswer };
      break;
    default:
      return state;
  }
  return state;
};
