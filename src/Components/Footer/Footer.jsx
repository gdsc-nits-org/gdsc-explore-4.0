import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import style from "./Footer.module.scss";
import Vector from "../BlueVector/Vector";
import vectorIconLeft from "../../Assets/images/vector-left.png";
import vectorIconRight from "../../Assets/images/vector-right.png";
import Icon from "../Icons/Icon";
import vectorGDSCIcon from "../../Assets/images/gdsc-icon.png";

const Footer = () => {
  return (
    <div className={style.fcontainer}>
      <footer className={style.footer}>
        <Vector className={style.vector} vectorSrc={vectorIconLeft} />

        <div className={style.iconContainer}>
          <Link className={style.icon} target="_blank" to="https://twitter.com/gdscnits">
            <FaXTwitter />
          </Link>
          <Link
            className={style.icon}
            target="_blank"
            to="https://www.linkedin.com/company/gdscnits/mycompany/"
          >
            <FaLinkedinIn />
          </Link>
        </div>

        <div className={style.gdscContainer}>
          <Icon iconSrc={vectorGDSCIcon} />
          <h2>GDSC Explore</h2>
          <p>Email us at </p>
          <a href="mailto:gdsc@nits.ac.in" target="_blank">
            exploregdsc@gmail.com
          </a>
        </div>
        <div className={style.iconMblContainer}>
          <Link className={style.icon} target="_blank" to="https://twitter.com/gdscnits">
            <FaXTwitter />
          </Link>
          <Link
            className={style.icon}
            target="_blank"
            to="https://www.linkedin.com/company/gdscnits/mycompany/"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className={style.icon}
            target="_blank"
            to="https://www.facebook.com/gdscnits/"
          >
            <FaFacebookF />
          </Link>
          <Link
            className={style.icon}
            target="_blank"
            to="https://www.youtube.com/@gdscnits"
          >
            <FaYoutube />
          </Link>
        </div>

        <div className={style.iconContainer}>
          <Link
            className={style.icon}
            target="_blank"
            to="https://www.facebook.com/gdscnits/"
          >
            <FaFacebookF />
          </Link>
          <Link
            className={style.icon}
            target="_blank"
            to="https://www.youtube.com/@gdscnits"
          >
            <FaYoutube />
          </Link>
        </div>

        <Vector className={style.vector} vectorSrc={vectorIconRight} />
      </footer>

      <p className={style.copyright}>Copyright © 2024. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
