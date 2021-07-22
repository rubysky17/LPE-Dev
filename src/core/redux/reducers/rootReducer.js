import { combineReducers } from "redux";
import { CourseReducer } from "./CourseReducer";
import { QuestionReducer } from "./QuestionReducer";

export const rootReducer = combineReducers({
  CourseReducer,
  QuestionReducer,
});
