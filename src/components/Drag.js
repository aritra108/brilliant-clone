import "./Drag.css";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { useEffect, useState } from "react";

const Drag = ({ initialBoxes, finalBoxes }) => {
  const [grabbing, setGrabbing] = useState(false);
  const [count, setCount] = useState(initialBoxes.length);
  const [margin, setMargin] = useState(null);
  const [height, setHeight] = useState(null);

  // Set the margin of the boxes
  useEffect(() => {
    switch (count) {
      case 3:
        setMargin("0 0.9rem");
        setHeight("11.5rem");
        break;
      case 4:
        setMargin("0 0.6rem");
        setHeight("10.5rem");
        break;
      case 5:
        setMargin("0 0.3rem");
        setHeight("9rem");
        break;
      default:
        setMargin("0 1rem");
        setHeight("11.5rem");
    }
  }, []);

  /**** Drag Functions on Drag Image ****/
  const dragStarted = (e) => {
    const image = e.target;
    const dragImage = image.parentElement;
    const box = dragImage.parentElement;

    // Hide the original drag image
    setTimeout(() => (dragImage.style.display = "none"), 0);

    if (box.classList.contains("drag__initialBox")) {
      dragStartedFromInitial(e, dragImage, box);
    } else {
      dragStartedFromFinal(e, dragImage, box);
    }
  };

  const dragStartedFromInitial = (e, dragImage) => {
    // Change the cursor style to grabbing
    setGrabbing(true);

    // Set the data to the id of the drag image
    e.dataTransfer.setData("text", dragImage.id);
  };

  const dragStartedFromFinal = (e, dragImage, finalBox) => {
    // Change the border style of the final box
    finalBox.classList.remove("solid-border");

    // Restore the text
    setTimeout(() => {
      const text = document.querySelector("#" + finalBox.id + ">p");
      text.style.display = "block";
    }, 0);

    // Change the cursor style to grabbing
    setGrabbing(true);

    // Set the data as the id of the drag image
    e.dataTransfer.setData("text", dragImage.id);
  };

  const dragEnded = (e) => {
    // Restore the display property of the drag image
    const dragImage = e.target.parentElement;
    dragImage.style.display = "flex";
  };

  /**** Common Drag Functions on Drag targets ****/
  const allowDrop = (e) => e.preventDefault();

  /**** Drag Functions on Initial Box ****/
  const dropAtInitial = (e) => {
    e.preventDefault();
    const initialBox = e.target;

    // Get the ID of the drag image and append it to initial box
    const data = e.dataTransfer.getData("text");
    const dragImage = document.getElementById(data);
    initialBox.appendChild(dragImage);
  };

  /**** Drag Functions on Final Box ****/
  const enterFinal = (e) => {
    const finalBox = e.target;

    // Change the border style
    finalBox.classList.add("dashed-border");
  };

  const dropAtFinal = (e) => {
    e.preventDefault();

    // Check if the target drop container is the final box or the text
    const finalBox = e.target.classList.contains("drag__finalBoxText")
      ? e.target.parentElement
      : e.target;

    // Hide the text in the final box
    const text = document.querySelector("#" + finalBox.id + ">p");
    text.style.display = "none";

    // Get the ID of the drag image and append it to final box
    const data = e.dataTransfer.getData("text");
    const dragImage = document.getElementById(data);
    finalBox.appendChild(dragImage);

    // Change the border style of the final box
    finalBox.classList.add("solid-border");
  };

  const leaveFinal = (e) => {
    const finalBox = e.target;

    // Change the border style
    finalBox.classList.remove("dashed-border");
  };

  return (
    <div className="drag">
      <div className="drag__instruction">
        <p className="drag__instructionText">
          Drag the characters into the dotted boxes.
        </p>
        <p className="drag__instructionReset">
          Reset
          <RotateLeftIcon />
        </p>
      </div>

      <div className="drag__finalBoxes">
        {finalBoxes.map((finalBox) => (
          <div
            id={finalBox.id}
            className="drag__finalBox"
            style={{ margin: margin, height: height }}
            onDragEnter={enterFinal}
            onDragOver={allowDrop}
            onDrop={dropAtFinal}
            onDragLeave={leaveFinal}
          >
            <p className="drag__finalBoxText">{finalBox.text}</p>
          </div>
        ))}
      </div>

      <div className="drag__initialBoxes">
        {initialBoxes.map((initialBox) => (
          <div
            id={initialBox.id}
            className="drag__initialBox"
            style={{ margin: margin, height: height }}
            onDragOver={allowDrop}
            onDrop={dropAtInitial}
          >
            <div
              id={initialBox.imageId}
              className={`drag__image ${grabbing && "grabbing"}`}
              onDragStart={dragStarted}
              onDragEnd={dragEnded}
            >
              <p>{initialBox.imageLabel}</p>
              <img src={initialBox.imageUrl} />
            </div>
          </div>
        ))}
      </div>

      <div className="drag__buttons">
        <button className="drag__button drag__showButton">
          Show explanation
        </button>
        <button className="drag__button drag__answerButton">
          Check Answer
        </button>
      </div>
    </div>
  );
};

export default Drag;
