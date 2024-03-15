import {
  About,
  Rules,
  Hero,
  Registration,
  GDSCTeam,
  Speaker,
  Sponsor,
} from "../../Components";

import style from "./Home.module.scss";

import Associations from "../../Assets/Association.json";

const Home = ({ aboutRef, rulesRef, teamRef, registerRef, onLoad }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} registerRef={registerRef} onLoad={onLoad} />
      <About aboutRef={aboutRef} />
      <Speaker />
      <Registration registerRef={registerRef} />
      <Rules rulesRef={rulesRef} />
      <Sponsor title="Past Sponsor" data={Associations} />
      <GDSCTeam teamRef={teamRef} />
    </main>
  );
};

export default Home;
