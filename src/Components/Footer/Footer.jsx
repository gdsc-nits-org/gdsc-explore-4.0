import style from "./Footer.module.scss";
import Vector from "../BlueVector/Vector";
import vectorIconLeft from "../../Assets/images/vector-left.png";
import vectorIconRight from "../../Assets/images/vector-right.png";
import Icon from "../Icons/Icon";
import vectorInstaIcon from "../../Assets/images/instagram-icon.png";
import vectorTwitterIcon from "../../Assets/images/twitter-icon.png";
import vectorYoutubeIcon from "../../Assets/images/youtube-icon.png";
import vectorFacebookIcon from "../../Assets/images/facebook-icon.png";
import vectorGDSCIcon from "../../Assets/images/gdsc-icon.png";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <Vector className={style.vector} vectorSrc={vectorIconLeft} />

        <div className={style.iconContainer}>
          <Icon iconSrc={vectorInstaIcon} />
          <Icon iconSrc={vectorTwitterIcon} />
        </div>

        <div className={style.gdscContainer}>
          <Icon iconSrc={vectorGDSCIcon} />
          <h2>GDSC Explore</h2>
          <p>Email us at </p>
          <h2>exploregdsc@gmail.com</h2>
        </div>

        <div className={style.iconContainer}>
          <Icon iconSrc={vectorFacebookIcon} />
          <Icon iconSrc={vectorYoutubeIcon} />
        </div>

        <Vector className={style.vector} vectorSrc={vectorIconRight} />
      </footer>

      <p className={style.copyright}>Copyright © 2024. All Rights Reserved</p>
    </>
  );
};

export default Footer;
