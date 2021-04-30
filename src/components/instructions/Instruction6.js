import Radio from "../Radio";
import "./Instruction.css";

const options = [
  { id: "radio-1", text: "0" },
  { id: "radio-2", text: "1" },
  { id: "radio-3", text: "2" },
  { id: "radio-4", text: "3" },
];

const Instruction6 = () => {
  return (
    <div>
      <Radio options={options} />
    </div>
  );
};

export default Instruction6;
