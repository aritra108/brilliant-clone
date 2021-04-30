import Radio from "../Radio";
import "./Instruction.css";

const options = [
  { id: "radio-1", text: "Black" },
  { id: "radio-2", text: "White" },
  { id: "radio-3", text: "There isn't information to be certain." },
];

const Instruction2 = () => {
  return (
    <div className="instruction">
      <Radio options={options} />
    </div>
  );
};

export default Instruction2;
