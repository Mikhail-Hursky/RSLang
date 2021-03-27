import { USER_AUTHORIZATION } from "../actionTypes";
import { userState } from "../reducer/userReducer";

export const authorization = (user: userState) => ({
  type: USER_AUTHORIZATION,
  payload: user,
});
