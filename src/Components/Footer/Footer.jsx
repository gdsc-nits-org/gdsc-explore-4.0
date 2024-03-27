import style from "./Footer.module.scss";
import Vector from "../BlueVector/Vector";
import vectorIconLeft from "../../Assets/images/vector-left.png";
import vectorIconRight from "../../Assets/images/vector-right.png";
import Icon from "../Icons/Icon";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import vectorGDSCIcon from "../../Assets/images/gdsc-icon.png";

const Footer = () => {
  return (
    <div className={style.fcontainer}>
      <footer className={style.footer}>
        <Vector className={style.vector} vectorSrc={vectorIconLeft} />

        <div className={style.iconContainer}>
          <a className={style.icon} href="#">
            <FaXTwitter />
          </a>
          <a className={style.icon} href="#">
            <FaLinkedinIn />
          </a>
        </div>

        <div className={style.gdscContainer}>
          <Icon iconSrc={vectorGDSCIcon} />
          <h2>GDSC Explore</h2>
          <p>Email us at </p>
          <a href="mailto:gdsc@nits.ac.in">exploregdsc@gmail.com</a>
        </div>
        <div className={style.iconMblContainer}>
          <a className={style.icon} href="#">
            <FaXTwitter />
          </a>
          <a className={style.icon} href="#">
            <FaLinkedinIn />
          </a>
          <a className={style.icon} href="#">
            <FaFacebookF />
          </a>
          <a className={style.icon} href="#">
            <FaYoutube />
          </a>
        </div>

        <div className={style.iconContainer}>
          <a className={style.icon} href="#">
            <FaFacebookF />
          </a>
          <a className={style.icon} href="#">
            <FaYoutube />
          </a>
        </div>

        <Vector className={style.vector} vectorSrc={vectorIconRight} />
      </footer>

      <p className={style.copyright}>Copyright © 2024. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
