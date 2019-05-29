import { combineReducers } from "redux";
import { personReducer } from "./personReducers";
import { wishReducer } from "./wishReducer";

export const reducers = combineReducers({
  persons: personReducer,
  wishes: wishReducer,
});
