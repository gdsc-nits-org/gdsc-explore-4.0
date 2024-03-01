// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from "@iconify/react";
import styles from "./GDSCTeamCard.module.scss";

const GDSCTeamCard = ({ img, name, links, field }) => {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <section className={styles.cardContainer}>
      <div className={styles.card}>
        <img className={styles["card-img"]} src={img} alt={name} />

        <p className={styles.info}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.field}>{field}</p>
        </p>
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Icon
            icon="ic:baseline-facebook"
            className={styles.linkTop}
            onClick={() => openInNewTab(links.facebook)}
          />
          <Icon
            icon="mdi:linkedin"
            className={styles.link}
            onClick={() => openInNewTab(links.linkedin)}
          />
          <Icon
            icon="mdi:github"
            className={styles.link}
            onClick={() => openInNewTab(links.github)}
          />
          <Icon
            icon="mdi:twitter"
            className={styles.link}
            onClick={() => openInNewTab(links.twitter)}
          />
        </div>
      </div>
    </section>
  );
};

export default GDSCTeamCard;
