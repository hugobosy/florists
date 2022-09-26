import { combineReducers } from "redux";
import { NavigationReducer } from "./Navigation";

export const rootReducer = combineReducers({
  navigation: NavigationReducer
});

export type AppState = ReturnType<typeof rootReducer>