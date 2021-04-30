import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import RowCard from "./RowCard";
import "./Section.css";

const Section = ({ index, title, excerpt, cards }) => {
  const [countCards, setCountCards] = useState(cards.length);
  const [expand, setExpand] = useState(false);

  return (
    <div className="section">
      <div className="section__header">
        <div className="section__headerIndex">{index}</div>
        <div>
          <h4 className="section__headerTitle">{title}</h4>
          <p className="section__headerExcerpt">
            {excerpt}{" "}
            {expand && <span onClick={() => setExpand(false)}>Collapse</span>}
          </p>
        </div>
      </div>

      <div className={`section__row ${expand && "expand"}`}>
        <div
          className={`section__rowExpand ${
            (expand || countCards <= 3) && "hide"
          }`}
          onClick={() => setExpand(true)}
        >
          <ExpandMoreIcon className="section__expandIcon" />
        </div>

        {cards.map((card) => (
          <RowCard
            key={card.index}
            title={card.title}
            excerpt={card.excerpt}
            image={card.image}
            progress={card.progress}
            locked={card.locked}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
