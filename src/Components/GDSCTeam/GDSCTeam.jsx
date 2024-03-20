import GDSCTeamCard from "../GDSCTeamCard/GDSCTeamCard";
import GDSCTeamCardCarousel from "../GDSCTeamCardCarousel/GDSCTeamCardCarousel";
import Fade from "../Fade/Fade";
import data from "../../Assets/GDSCPersons.json";

import styles from "./GDSCTeam.module.scss";

const Team = ({ teamRef }) => {
  return (
    <section className={styles.team} ref={teamRef}>
      <Fade type="bottom">
        <h1 className={styles["team-heading"]}>
          OUR<span className={styles.small}></span> DEVELOPERS
        </h1>
      </Fade>
      <div className={styles.teamCont}>
        <Fade type="bottom">
          <div className={styles["team-list"]}>
            {data.map((d) => (
              <GDSCTeamCard key={d.name} img={d.img} name={d.name} fb={d.fb} linkedin={d.linkedin} twitter={d.twitter} github={d.github} role={d.role} />
            ))}
          </div>
        </Fade>
        <Fade type="bottom">
          <div className={styles["team-list-mobile"]}>
            <GDSCTeamCardCarousel />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Team;
