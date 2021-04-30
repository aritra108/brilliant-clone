import { useState } from "react";
import "./Radio.css";

const Radio = ({ options }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="radio">
      <form className="radio__form" onChange={(e) => setChecked(true)}>
        {options.map((option) => (
          <label htmlFor={option.id} className="radio__label">
            <input
              type="radio"
              name="radio"
              id={option.id}
              className="radio__input"
            />
            <div className="radio__radio"></div>
            {option.text}
          </label>
        ))}

        <button
          className={`radio__button radio__answerButton ${
            !checked && "disabled"
          }`}
        >
          Submit
        </button>
        <button className="radio__button radio__showButton">
          Show explanation
        </button>
      </form>
    </div>
  );
};

export default Radio;
