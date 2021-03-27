import { USER_AUTHORIZATION } from "../actionTypes";

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
      console.log(action.payload);
      state = { ...state, ...action.payload };
      console.log(state);
      break;
  }
  return state;
};
