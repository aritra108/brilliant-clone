import "./Overview.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router";

const Overview = () => {
  const history = useHistory();

  return (
    <div className="overview">
      <div className="overview__back">
        <ArrowBackIosIcon className="overview__backIcon" />
        <a href="#">Back to all courses</a>
      </div>

      <div className="overview__content">
        <div className="overview__left">
          <h1>Logic</h1>
          <h3>
            Stretch your analytic muscles with knights, knaves, logic gates and
            more!
          </h3>
          <p>
            The beginning of our introductory math journey is Logic. Through
            these challenging problem solving exercises, you'll construct the
            critical thinking skills that are the basis for mathematical
            reasoning.
          </p>
          <p>
            You'll use limited information to make predictions – eliminating the
            impossible to uncover the truth. This course builds up to some truly
            mind-bending challenges!
            <a href="#">Read More</a>
          </p>
          <a href="#">View prerequisites and next steps</a>
        </div>

        <div className="overview__right">
          <img
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254"
            alt="Course Logo"
          />

          <div className="overview__rightStats">
            <div className="overview__rightStat">
              <h4>37</h4>
              <p>Interactive Quizzes</p>
            </div>
            <div className="overview__rightStat">
              <h4>265+</h4>
              <p>Concepts and exercises</p>
            </div>
          </div>

          <button onClick={() => history.push("/puzzles")}>Start Course</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
