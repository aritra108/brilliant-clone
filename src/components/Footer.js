import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Next Steps</p>

      <div className="footer__divider"></div>

      <div className="footer__courses">
        <div className="footer__course">
          <img
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92"
            alt="Course Image"
          />
          <div className="footer__courseDescription">
            <h3>Mathematical Fundamentals</h3>
            <p>
              The essential tools for mastering algebra, logic, and number
              theory!
            </p>
          </div>
        </div>

        <div className="footer__course">
          <img
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92"
            alt="Course Image"
          />
          <div className="footer__courseDescription">
            <h3>Computer Science Fundamentals</h3>
            <p>
              Wrap your mind into computational thinking, fom everyday tasks to
              algorithms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
