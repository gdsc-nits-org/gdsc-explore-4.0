import styles from "./GDSCTeamCard.module.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const GDSCTeamCard = ({ img, name, fb, github, twitter, linkedin }) => {
  return (
    <>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <img src={img} alt="Person image" className={styles['card-img']} />
          <h1 className={styles.name}>{name}</h1>
        </div>
        <div className={styles.socialBar}>
          <a href={twitter} className={styles.icon}><FaXTwitter /></a>
          <a href={linkedin} className={styles.icon}><FaLinkedinIn /></a>
          <a href={fb} className={styles.icon}><FaFacebookF /></a>
          <a href={github} className={styles.icon}><FaGithub /></a>
        </div>
      </div>
    </>);
}
export default GDSCTeamCard;