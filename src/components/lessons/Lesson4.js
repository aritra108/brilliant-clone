import Drag from "../Drag";

const finalBoxes = [
  { id: "final-box-1", text: "1" },
  { id: "final-box-2", text: "2" },
  { id: "final-box-3", text: "3" },
  { id: "final-box-4", text: "4" },
];

const initialBoxes = [
  {
    id: "initial-box-1",
    imageId: "image-1",
    imageLabel: "Ace",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/d0bJPuBGB9-black-ace.png",
  },
  {
    id: "initial-box-2",
    imageId: "image-2",
    imageLabel: "King",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/PZCNroQ2XB-black-king.png",
  },
  {
    id: "initial-box-3",
    imageId: "image-3",
    imageLabel: "Queen",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/Y43G7ol9AD-black-queen.png",
  },
  {
    id: "initial-box-4",
    imageId: "image-4",
    imageLabel: "Jack",
    imageUrl:
      "https://ds055uzetaobb.cloudfront.net/uploads/rcij15XKXP-black-jack.png",
  },
];

const Lesson4 = () => {
  return (
    <div className="lesson4">
      <p>Arrange the cards to make the following true:</p>

      <ul>
        <li>The king is in one of the two middle spaces.</li>
        <li>The queen is left of the jack and right of the ace.</li>
        <li>The ace is directly next to the queen.</li>
      </ul>

      <p>(Note: Left and right are from the player's perspective).</p>

      <Drag initialBoxes={initialBoxes} finalBoxes={finalBoxes} />
    </div>
  );
};

export default Lesson4;
