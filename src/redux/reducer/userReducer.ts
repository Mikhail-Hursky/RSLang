import { USER_AUTHORIZATION, USER_LOG_OUT, USER_WORDS } from "../actionTypes";

export interface userState {
  message: string | "Authenticated";
  name: string;
  token: string;
  userId: string;
  words: Array<object>;
}

const userStartState: userState = {
  message: "",
  name: "",
  token: "",
  userId: "",
  words: [],
};
const saveState = localStorage.getItem("USER");
const initialState = saveState ? JSON.parse(saveState) : userStartState;

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_AUTHORIZATION:
      state = { ...state, ...action.payload };
      break;
    case USER_WORDS:
      state = { ...state, ...action.payload };
      break;
    case USER_LOG_OUT:
      state = { ...userStartState };
      break;
  }
  localStorage.setItem("USER", JSON.stringify(state));
  return state;
};
