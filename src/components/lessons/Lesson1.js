import Drag from "../Drag";

const finalBoxes = [
  { id: "final-box-1", text: "Youngest" },
  { id: "final-box-2", text: "" },
  { id: "final-box-3", text: "Oldest" },
];

const initialBoxes = [
  {
    id: "initial-box-1",
    imageId: "image-1",
    imageLabel: "Joseph",
    imageUrl: "https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png",
  },
  {
    id: "initial-box-2",
    imageId: "image-2",
    imageLabel: "Kevin",
    imageUrl: "https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png",
  },
  {
    id: "initial-box-3",
    imageId: "image-3",
    imageLabel: "Nicholas",
    imageUrl: "https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png",
  },
];

const Lesson1 = () => {
  return (
    <div className="lesson1">
      <p>
        Joseph, Kevin, and Nicholas are 3 brothers, and the following statements
        about them are all true:
      </p>
      <ul>
        <li>Joseph is not the youngest.</li>
        <li>Kevin is the oldest.</li>
        <li>Nicholas is not the oldest.</li>
      </ul>
      <Drag initialBoxes={initialBoxes} finalBoxes={finalBoxes} />
    </div>
  );
};

export default Lesson1;
