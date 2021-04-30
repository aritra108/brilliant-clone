import { LinearProgress } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import "./RowCard.css";

const RowCard = ({ image, title, excerpt, progress, locked, link }) => {
  return (
    <Link to={link ? link : "#"}>
      <div className="rowCard">
        <div
          className="rowCard__image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={`rowCard__imageOverlay ${locked && "show"}`}>
            <LockIcon className="rowCard__lockIcon" />
            <p className="rowCard__premiumText">
              Included with Brilliant Premium
            </p>
          </div>
        </div>

        <h5 className="rowCard__title">{title}</h5>

        <small className="rowCard__excerpt">{excerpt}</small>

        <LinearProgress
          variant="determinate"
          value={progress}
          className="rowCard__progress"
        />
      </div>
    </Link>
  );
};

export default RowCard;
