import {
  DECREMENT_LESSON_INDEX,
  INCREMENT_LESSON_INDEX,
  SET_LESSON_INDEX,
} from "./ActionTypes";

export const incrementLessonIndex = (maxCapacity) => {
  return {
    type: INCREMENT_LESSON_INDEX,
    payload: maxCapacity,
  };
};

export const decrementLessonIndex = () => {
  return {
    type: DECREMENT_LESSON_INDEX,
  };
};

export const setLessonIndex = (value) => {
  return {
    type: SET_LESSON_INDEX,
    payload: value,
  };
};
