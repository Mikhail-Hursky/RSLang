import { Api } from "../../api/Api";
import {
  SET_USER_WORDS,
  USER_AUTHORIZATION,
  USER_LOG_OUT,
  USER_WORDS,
} from "../actionTypes";
import { userState } from "../reducer/userReducer";

export const authorization = (user: userState) => ({
  type: USER_AUTHORIZATION,
  payload: user,
});

export const getUserWords = (user: userState) => ({
  type: USER_WORDS,
  payload: user,
});

export const logOut = () => ({
  type: USER_LOG_OUT,
});

export const setUserWords = (token: string, userId: string) => {
  return async (dispatch: any) => {
    const res = await Api.getAllUserWord(token, userId);
    res.status === 200 && dispatch({ type: SET_USER_WORDS, payload: res.data });
  };
};
