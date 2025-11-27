import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";

// подключение компонентов к глобальному стору
export const rootReducer = combineReducers({
  user: userReducer,
});
