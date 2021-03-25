import { combineReducers } from "redux";
import { settingReducer, settingState } from "./settingReducer";

export interface State {
  setting: settingState;
}

export const rootReducer = combineReducers({
  setting: settingReducer
});
