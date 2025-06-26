import Hero from "../../assets/Hero.png";
import SocialLinks from "../SocialLinks";

import "./index.css";

const Home = ({ mode }) => {
  return (
    <div
      className={"d-flex flex-lg-row home-bg-container flex-column"}
      style={{ backgroundColor: `${mode === "light" ? "white" : "#000000"}` }}
    >
      <SocialLinks mode={mode} />
      <div className="d-flex flex-column order-0 align-items-start home-info-container">
        <p className="home-hello">Hello!</p>
        <h2
          className="home-name"
          style={{
            color: `${mode === "light" ? "#000000" : "#ffffff"}`,
          }}
        >
          I'm{" "}
          <span className={`${mode === "light" ? "black-text" : "white-text"}`}>
            Anish
          </span>
        </h2>
        <p
          className={`home-prof ${
            mode === "light" ? "black-text" : "white-text"
          }`}
        >
          UI/UX Designer, Front-End Developer & Thinker. Based in India.
        </p>
        <div className="mt-5">
          <button
            className="btn home-btn-style download-btn me-3"
            type="button"
          >
            Download CV
          </button>
          <button className="btn home-btn-style get-btn" type="button">
            Get in Touch!
          </button>
        </div>
      </div>
      <div className="home-hero-container order-1">
        <div className="home-hero-img-container">
          <div className="home-hero-bg"></div>
          <img className="home-hero-img" src={Hero} alt="hero" />
        </div>
        <p
          className={`email-style ${
            mode === "light"
              ? "black-text black-email-border"
              : "white-text white-email-border"
          }`}
        >
          sinhaanishkumar@outlook.com
        </p>
      </div>
    </div>
  );
};

export default Home;
