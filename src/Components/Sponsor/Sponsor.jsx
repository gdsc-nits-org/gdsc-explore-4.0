import SponsorCard from "../SponsorCard/SponsorCard";
import styles from "./Sponsor.module.scss";

const Sponsor = ({ title }) => {
  return (
    // <section className={styles.sponsor}>
    //   <h1 className={styles["sponsor-heading"]}>{title || "Sponsors"}</h1>
    //   {data.map((tier, idx) => (
    //     <Fragment key={idx}>
    //       <div className={styles["sponsor-list"]}>
    //         {tier.map((d) => (
    //           <SponsorCard key={d.id} logo={d.logo} name={d.name} />
    //         ))}
    //       </div>
    //       {idx !== data.length - 1 && (
    //         <div key={idx} className={styles["tier-break"]}></div>
    //       )}
    //     </Fragment>
    //   ))}
    // </section>
    <div className={styles.mainCont}>
      <div className={styles["sponsor-heading"]}>{title}</div>
      <div className={styles.Marquee}>
        <div className={styles["Marquee-content"]}>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="TASKADE LOGO" logo="/assets/sponsors/taskade.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="DOT XYZ LOGO" logo="/assets/sponsors/xyz.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard
              name="INTERVIEW BUDDY LOGO"
              logo="/assets/sponsors/interviewbuddy.png"
            />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="TASKADE LOGO" logo="/assets/sponsors/taskade.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="DOT XYZ LOGO" logo="/assets/sponsors/xyz.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard
              name="INTERVIEW BUDDY LOGO"
              logo="/assets/sponsors/interviewbuddy.png"
            />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="TASKADE LOGO" logo="/assets/sponsors/taskade.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="DOT XYZ LOGO" logo="/assets/sponsors/xyz.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard
              name="INTERVIEW BUDDY LOGO"
              logo="/assets/sponsors/interviewbuddy.png"
            />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="TASKADE LOGO" logo="/assets/sponsors/taskade.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard name="DOT XYZ LOGO" logo="/assets/sponsors/xyz.png" />
          </div>
          <div className={styles["Marquee-tag"]}>
            <SponsorCard
              name="INTERVIEW BUDDY LOGO"
              logo="/assets/sponsors/interviewbuddy.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
