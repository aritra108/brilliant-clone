import Drag from "../Drag";

const finalBoxes = [
  { id: "final-box-1", text: "1st" },
  { id: "final-box-2", text: "2nd" },
  { id: "final-box-3", text: "3rd" },
  { id: "final-box-4", text: "4th" },
  { id: "final-box-5", text: "5th" },
];

const initialBoxes = [
  {
    id: "initial-box-1",
    imageId: "image-1",
    imageLabel: "Blake",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/Qbk64lDKVy-runner-11.png",
  },
  {
    id: "initial-box-2",
    imageId: "image-2",
    imageLabel: "Pyrrha",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/LGyRi7z1Ze-runner-21.png",
  },
  {
    id: "initial-box-3",
    imageId: "image-3",
    imageLabel: "Ruby",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/odaceGNNt0-runner-31.png",
  },
  {
    id: "initial-box-4",
    imageId: "image-4",
    imageLabel: "Weiss",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/HC30gn3BdV-runner-4-1.png",
  },
  {
    id: "initial-box-5",
    imageId: "image-5",
    imageLabel: "Yang",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/Q6Q6wE9Sqw-runner-52.png",
  },
];

const Lesson5 = () => {
  return (
    <div className="lesson5">
      <p>Five friends competed in a race.</p>

      <div className="list-container">
        <ul>
          <li>Pyrrha finished faster than Blake.</li>
          <li>
            The <strong>smallest</strong> difference in finishing times was
            between Pyrrha and Ruby.
          </li>
          <li>
            The <strong>largest</strong> difference in finishing times was
            between Ruby and Weiss.
          </li>
          <li>
            Yang finished either <strong>1</strong>
            <sup>st</sup> or <strong>3</strong>
            <sup>rd</sup>.
          </li>
        </ul>
      </div>

      <Drag initialBoxes={initialBoxes} finalBoxes={finalBoxes} />
    </div>
  );
};

export default Lesson5;
