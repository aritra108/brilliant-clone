import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementLessonIndex,
  incrementLessonIndex,
  setLessonIndex,
} from "../actions/ActionCreators";
import "./Navigation.css";

const Navigation = () => {
  const lessonIndex = useSelector((state) => state.lessonIndex);
  const dispatch = useDispatch();

  return (
    <div className="navigation">
      <p className="navigation__lessonNo">
        Lesson 1 <ArrowDropDownIcon className="navigation__lessonIcon" />
      </p>

      <h4 className="navigation__lessonTitle">Warmup Puzzles</h4>

      <div className="navigation__nav">
        <div
          className={`navigation__navPrev ${lessonIndex === 1 && "disabled"}`}
          onClick={() => dispatch(decrementLessonIndex())}
        >
          <ChevronLeftIcon className="navigation__navIcon" />
        </div>

        <div className="navigation__navPeriods">
          <div
            className={`navigation__navPeriod ${
              lessonIndex === 1 && "selected"
            }`}
            onClick={() => dispatch(setLessonIndex(1))}
          ></div>
          <div
            className={`navigation__navPeriod ${
              lessonIndex === 2 && "selected"
            }`}
            onClick={() => dispatch(setLessonIndex(2))}
          ></div>
          <div
            className={`navigation__navPeriod ${
              lessonIndex === 3 && "selected"
            }`}
            onClick={() => dispatch(setLessonIndex(3))}
          ></div>
          <div
            className={`navigation__navPeriod ${
              lessonIndex === 4 && "selected"
            }`}
            onClick={() => dispatch(setLessonIndex(4))}
          ></div>
          <div
            className={`navigation__navPeriod ${
              lessonIndex === 5 && "selected"
            }`}
            onClick={() => dispatch(setLessonIndex(5))}
          ></div>
          <div
            className={`navigation__navPeriod ${
              lessonIndex === 6 && "selected"
            }`}
            onClick={() => dispatch(setLessonIndex(6))}
          ></div>
        </div>

        <div
          className={`navigation__navNext ${lessonIndex === 6 && "disabled"}`}
          onClick={() => dispatch(incrementLessonIndex(6))}
        >
          <ChevronRightIcon className="navigation__navIcon" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
