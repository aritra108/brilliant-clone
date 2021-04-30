import { combineReducers } from "redux";
import lessonIndexReducer from "./lessonIndex";

const reducer = combineReducers({
  lessonIndex: lessonIndexReducer,
});

export default reducer;
