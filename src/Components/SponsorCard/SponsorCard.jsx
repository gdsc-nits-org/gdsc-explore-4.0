import styles from "./SponsorCard.module.scss";

const SponsorCard = ({ key, logo }) => {
  return (
    <div key={key} className={styles.cardHolder}>
      <div className={styles.card} style={{ backgroundImage: `url(${logo})` }}></div>
    </div>
  );
};

export default SponsorCard;
