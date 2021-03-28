import { USER_AUTHORIZATION, USER_LOG_OUT } from "../actionTypes";

export interface userState {
  message: string | "Authenticated";
  name: string;
  token: string;
  userId: string;
}

const initialState: userState = {
  message: "",
  name: "",
  token: "",
  userId: "",
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_AUTHORIZATION:
      state = { ...state, ...action.payload };
      break;
    case USER_LOG_OUT:
      state = { ...initialState };
      break;
  }
  return state;
};
