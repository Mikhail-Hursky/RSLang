import { combineReducers } from "redux";
import { settingReducer, settingState } from "./settingReducer";
import { userReducer, userState } from "./userReducer";

export interface State {
  setting: settingState;
  user: userState;
}

export const rootReducer = combineReducers({
  setting: settingReducer,
  user: userReducer,
});
