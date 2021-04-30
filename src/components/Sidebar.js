import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/practice-logic">
        <p className="sidebar__back">
          <ArrowBackIosIcon className="sidebar__backIcon" />
          <small className="sidebar__backText">Back</small>
        </p>
      </Link>
      <p className="sidebar__title">Logic</p>
    </div>
  );
};

export default Sidebar;
