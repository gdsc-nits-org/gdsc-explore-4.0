import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import styles from "./GDSCTeamCard.module.scss";

const GDSCTeamCard = ({ img, name, role, fb, github, twitter, linkedin }) => {
  return (
    <div className={styles.cardParent}>
      <div className={styles.card}>
        <img src={img} alt="avatar" className={styles["card-img"]} />
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.name}>{role}</h2>
      </div>
      <div className={styles.socialBar}>
        {twitter !== "" ? (
          <Link to={twitter} target="_blank" className={styles.icon}>
            <FaXTwitter />
          </Link>
        ) : null}
        {linkedin !== "" ? (
          <Link to={linkedin} target="_blank" className={styles.icon}>
            <FaLinkedinIn />
          </Link>
        ) : null}
        {fb !== "" ? (
          <Link to={fb} target="_blank" className={styles.icon}>
            <FaFacebookF />
          </Link>
        ) : null}
        {github !== "" ? (
          <Link to={github} className={styles.icon}>
            <FaGithub />
          </Link>
        ) : null}
      </div>
    </div>
  );
};
export default GDSCTeamCard;
