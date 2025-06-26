import SocialLinks from "../SocialLinks";
import Hand from "../../assets/Hand.png";

import "./index.css";

const About = ({ mode }) => {
  return (
    <div
      className={
        "d-flex flex-column flex-lg-row about-bg-container position-relative"
      }
      style={{ backgroundColor: `${mode === "light" ? "white" : "#000000"}` }}
    >
      <div className="hand-container">
        <img src={Hand} alt="hand" className="hand-img mb-4" />
        <div className="position-absolute about-social-icons ">
          <SocialLinks mode={mode} />
        </div>
      </div>

      <div className="about-info-container order-first order-lg-0">
        <div className="about-heading d-flex flex-row">
          <h2
            className="text-start"
            style={{ color: `${mode === "light" ? "#000000" : "white"}` }}
          >
            T<span>his is it. ;)</span>
          </h2>
          <hr />
        </div>
        <div>
          <p
            className="about-para text-start"
            style={{ color: `${mode === "light" ? "#000000" : "white"}` }}
          >
            Anish Kr. Sinha is an Indian{" "}
            <span> UI/UX Designer & Front End Developer </span>with a passion
            for designing beautiful and fuctional user experiences. Typically,
            he’s Driven & permanently Curious. He’s obsessed with designing
            things and even more obsessed with designing cool & clean stuff for
            the web and mobile. He has been in the business of creating since he
            hung his first painting on the wall when he was 11. <br /> He holds
            a bachelor
            <span>degree in Computer Applications.</span> During his graduation,
            he has been actively involved in the web design community for the
            last 3 years. he has designed websites for small businesses, events,
            nonprofits and more. Currently he’s based in Bihar, India. Where
            he’s working as an independent creative.
            <br />
            <br /> His interests, however, extend beyond the web and he loves
            helping people with branding and print design. He even loves
            designing
            <span>3D floor plan.</span>
            <br /> <br /> When he’s not designing, he’s probably hanging out
            with his girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </p>
          <hr className="about-underline" />
        </div>
      </div>
      <div className="about-yellow-blob"></div>
      <div className="position-absolute about-email">
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

export default About;
