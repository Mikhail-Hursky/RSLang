import { USER_AUTHORIZATION, USER_LOG_OUT } from "../actionTypes";
import { userState } from "../reducer/userReducer";

export const authorization = (user: userState) => ({
  type: USER_AUTHORIZATION,
  payload: user,
});

export const logOut = () => ({
  type: USER_LOG_OUT,
});
