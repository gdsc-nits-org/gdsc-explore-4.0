import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import styles from "./GDSCTeamCard.module.scss";

const GDSCTeamCard = ({ img, name, role, fb, github, twitter, linkedin }) => {
  return (
    <div className={styles.cardParent}>
      <div className={styles.card}>
        <img src={img} alt="Person image" className={styles['card-img']} />
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.name}>{role}</h2>
      </div>
      <div className={styles.socialBar}>
        {twitter !== "" ? <a href={twitter} className={styles.icon}><FaXTwitter /></a> : null}
        {linkedin !== "" ? <a href={linkedin} className={styles.icon}><FaLinkedinIn /></a> : null}
        {fb !== "" ? <a href={fb} className={styles.icon}><FaFacebookF /></a> : null}
        {github !== "" ? <a href={github} className={styles.icon}><FaGithub /></a> : null}
      </div>
    </div>);
}
export default GDSCTeamCard;
