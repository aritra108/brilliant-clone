import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <img
            src="https://lever-client-logos.s3-us-west-2.amazonaws.com/b3943d3b-d47e-4ac8-873d-0b6502f03bf2-1587418670025.png"
            className="header__logo"
          />
          <div className="header__nav">
            <a href="#">Today</a>
            <a href="#" className="selected">
              Courses
            </a>
            <a href="#">Practices</a>
          </div>
        </div>

        <div className="header__right">
          <button className="header__button">Log in</button>
          <button className="header__button header__signUp">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
