import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Moon from "../../assets/Moon.svg";
import Sun from "../../assets/Sun.svg";
import LogoWhite from "../../assets/LogoWhite.svg";

import "./index.css";

const NavBar = ({ mode, toggleMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        mode === "light" ? "light" : "dark"
      } navbar-style py-2 px-2 py-md-3 px-md-5`}
      style={{ backgroundColor: `${mode === "light" ? "white" : "#000000"}` }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between w-100 flex-nowrap">
          <Link
            className="navbar-brand navbar-logo d-flex flex-row justify-content-center align-items-center"
            href="/"
          >
            <img src={`${mode === "light" ? Logo : LogoWhite}`} alt="logo" />
            <p className="m-0 ms-2">ANISH KUMAR SINHA</p>
          </Link>

          <div className="d-flex align-items-center d-lg-none">
            <button
              className="navbar-toggler custom-toggler-size"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              className="btn theme-mode-btn my-2 ms-2 mb-3"
              type="button"
              onClick={toggleMode}
            >
              <img
                className="theme-img"
                src={`${mode === "light" ? Moon : Sun}`}
                alt="moon"
              />
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto align-items-lg-center">
            <Link
              className="nav-link active each-option"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link active each-option" to="/about">
              About
            </Link>
            <a className="nav-link active each-option" href="/">
              Resume
            </a>
            <a className="nav-link active each-option" href="/">
              Skills
            </a>
            <a className="nav-link active each-option" href="/">
              Projects
            </a>
            <a className="nav-link active each-option" href="/">
              Contact
            </a>

            <button
              className="btn theme-mode-btn d-none d-lg-inline my-2 mb-3 ms-lg-3"
              type="button"
              onClick={toggleMode}
            >
              <img
                className="theme-img"
                src={`${mode === "light" ? Moon : Sun}`}
                alt="moon"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
