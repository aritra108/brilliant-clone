import { useDispatch } from "react-redux";
import "./Instruction.css";
import { incrementLessonIndex } from "../../actions/ActionCreators";

const Instruction3 = () => {
  const dispatch = useDispatch();

  return (
    <div className="instruction">
      <button
        className="instruction__button"
        onClick={() => dispatch(incrementLessonIndex(6))}
      >
        Continue
      </button>
    </div>
  );
};

export default Instruction3;
