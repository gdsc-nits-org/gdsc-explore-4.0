import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn , FaFacebookF , FaGithub } from "react-icons/fa";


import data from "../../Assets/GDSCPersons.json";
import GDSCTeamCard from "../GDSCTeamCard/GDSCTeamCard"
import styles from './GDSCTeamCardCarousel.module.scss'


const CARDS = 8;
const MAX_VISIBILITY = 3;

const Carousel = () => {
    const [active, setActive] = useState(2);
    const count = data.length;
    return (
        <div className={styles.carouselCont}>
            <div className={styles.carousel}>
                {active > 0 && <button className={`${styles.nav} ${styles.left}`} onClick={() => setActive(i => i - 1)}>&lt;</button>}
                {data.map((d, i) => (
                    <div
className={styles.cardContainer} style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointer-events': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                        zIndex: `${i === active ? 5 : 0}`,
                    }}>
                        <div className={styles.cardParent}>
                            <div className={styles.card}>
                                <img src={d.img} alt="Person image" className={styles['card-img']} />
                                <h1 className={styles.name} style={{ color: '#000000' }}>{d.name}</h1>
                                <h2 className={styles.name} style={{ color: '#000000' }}>{d.role}</h2>
                            </div>
                            <div className={styles.socialBar}>
                                {d.twitter !== "" ? <a href={d.twitter} className={styles.icon}><FaXTwitter /></a> : null}
                                {d.linkedin !== "" ? <a href={d.linkedin} className={styles.icon}><FaLinkedinIn /></a> : null}
                                {d.fb !== "" ? <a href={d.fb} className={styles.icon}><FaFacebookF /></a> : null}
                                {d.github !== "" ? <a href={d.github} className={styles.icon}><FaGithub /></a> : null}
                            </div>
                        </div>
                    </div>
                ))}
                {active < count - 1 && <button className={`${styles.nav} ${styles.right}`} onClick={() => setActive(i => i + 1)}>&gt;</button>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={`${styles.bubbleCont}`}>
                    {data.map((d, i) => (
                        <div className={i === active ? `${styles.active}` : `${styles.inactive}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const GDSCTeamCardCarousel = () => {
    return (
        <div className={styles.Events}>
            <Carousel />
        </div>
    );
}
export default GDSCTeamCardCarousel;