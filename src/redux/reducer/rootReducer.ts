import { combineReducers } from "redux";
import { settingReducer, settingState } from "./settingReducer";
import { userReducer, userState } from "./userReducer";
import { savannahReducer, savannahState } from "./savannahReducer";

export interface State {
  setting: settingState;
  user: userState;
  savannah: savannahState;
}

export const rootReducer = combineReducers({
  savannah: savannahReducer,
  setting: settingReducer,
  user: userReducer,
});
