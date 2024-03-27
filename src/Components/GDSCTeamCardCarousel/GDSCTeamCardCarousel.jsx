import styles from './GDSCTeamCardCarousel.module.scss'
import { useState } from "react";
import data from "../../Assets/GDSCPersons.json";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const MAX_VISIBILITY = 3;

const Carousel = () => {
    const [active, setActive] = useState(2);
    const count = data.length;
    return (
        <div className={styles.carouselCont}>
            <div className={styles.carousel}>
                {active > 0 && <button className={`${styles.nav} ${styles.left}`} onClick={() => setActive(i => i - 1)}>&lt;</button>}
                {data.map((d, i) => (
                    <div className={styles.cardContainer} style={{
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
                                <img src={d.img} alt="Developer" className={styles['card-img']} />
                                <h1 className={styles.name} style={{ color: '#000000' }}>{d.name}</h1>
                            </div>
                            <div className={styles.socialBar}>
                                <a href={d.twitter} className={styles.icon}><FaXTwitter /></a>
                                <a href={d.linkedin} className={styles.icon}><FaLinkedinIn /></a>
                                <a href={d.fb} className={styles.icon}><FaFacebookF /></a>
                                <a href={d.github} className={styles.icon}><FaGithub /></a>
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