import {
  DECREMENT_LESSON_INDEX,
  INCREMENT_LESSON_INDEX,
  SET_LESSON_INDEX,
} from "../actions/ActionTypes";

const lessonIndexReducer = (lessonIndex = 1, action) => {
  switch (action.type) {
    case INCREMENT_LESSON_INDEX:
      return lessonIndex < action.payload ? lessonIndex + 1 : action.payload;
    case DECREMENT_LESSON_INDEX:
      return lessonIndex > 1 ? lessonIndex - 1 : 1;
    case SET_LESSON_INDEX:
      return action.payload;
    default:
      return lessonIndex;
  }
};

export default lessonIndexReducer;
