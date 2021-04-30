import { useDispatch, useSelector } from "react-redux";
import "./CourseContent.css";
import Navigation from "./Navigation";

import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import Lesson3 from "./lessons/Lesson3";
import Lesson4 from "./lessons/Lesson4";
import Lesson5 from "./lessons/Lesson5";
import Lesson6 from "./lessons/Lesson6";

import Instruction1 from "./instructions/Instruction1";
import Instruction2 from "./instructions/Instruction2";
import Instruction3 from "./instructions/Instruction3";
import Instruction4 from "./instructions/Instruction4";
import Instruction5 from "./instructions/Instruction5";
import Instruction6 from "./instructions/Instruction6";

const CourseContent = () => {
  const lessonIndex = useSelector((state) => state.lessonIndex);

  const selectLessonByIndex = () => {
    switch (lessonIndex) {
      case 1:
        return <Lesson1 />;
      case 2:
        return <Lesson2 />;
      case 3:
        return <Lesson3 />;
      case 4:
        return <Lesson4 />;
      case 5:
        return <Lesson5 />;
      case 6:
        return <Lesson6 />;
      default:
        return <h1>No course found!</h1>;
    }
  };

  const selectInstructionByIndex = () => {
    switch (lessonIndex) {
      case 1:
        return <Instruction1 />;
      case 2:
        return <Instruction2 />;
      case 3:
        return <Instruction3 />;
      case 4:
        return <Instruction4 />;
      case 5:
        return <Instruction5 />;
      case 6:
        return <Instruction6 />;
      default:
        return <h1>No instruction found!</h1>;
    }
  };

  return (
    <div className="courseContent">
      <div className="courseContent__left">{selectLessonByIndex()}</div>
      <div className="courseContent__right">
        <Navigation />
        {selectInstructionByIndex()}
      </div>
    </div>
  );
};

export default CourseContent;
