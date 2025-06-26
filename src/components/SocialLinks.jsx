import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoTelegram } from "react-icons/bi";
import KooBlack from "../assets/KooBlack.svg";

const SocialLinks = ({ mode }) => {
  return (
    <ul
      className={`home-soc-links-con list-unstyled d-flex flex-row flex-lg-column justify-content-lg-end order-3 order-lg-0 m-0 py-lg-0 pt-2 pb-4 ${
        mode === "light" ? "light-mode-icons" : "dark-mode-icons"
      }`}
    >
      <li>
        <FaFacebookF />
      </li>
      <li>
        <ImInstagram />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <TbBrandGithubFilled />
      </li>
      <li>
        <FaLinkedinIn />
      </li>
      <li>
        <BiLogoTelegram />
      </li>
      <li>
        <img src={KooBlack} alt="Koo" />
      </li>
    </ul>
  );
};

export default SocialLinks;
