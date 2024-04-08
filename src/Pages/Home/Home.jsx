import { About, Hero, Registration, GDSCTeam, FAQ, Sponsor } from "../../Components";
import sponsors from "../../Assets/Sponsors.json";
import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef, teamRef, registerRef, onLoad }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} registerRef={registerRef} onLoad={onLoad} />
      <About aboutRef={aboutRef} />
      <Registration registerRef={registerRef} />
      <Sponsor title="Sponsors" data={sponsors} />
      <FAQ />
      <GDSCTeam teamRef={teamRef} />
    </main>
  );
};

export default Home;
