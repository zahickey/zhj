import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee.jsx'
import Placeholder from '../components/Placeholder.jsx'
import profilePhoto from '../assets/images/profile_image.jpeg'
import torresDelPaine from '../assets/images/torres-del-paine.jpg'
import styles from './Home.module.css'

const SECTIONS = [
  {
    label: 'About',
    to: '/about/zoe',
    blurb: 'An overview of my academic and work history.',
    image: torresDelPaine,
  },
]

function Home() {
  return (
    <>
      <section className="band band--top band--gradient-mint">
        <div className="container">
          <hr className="hairline" />
          <div style={{ margin: '28px 0 18px', display: 'flex', justifyContent: 'space-between' }}>
            <span className="eyebrow">Welcome</span>
            <span className="eyebrow">Portfolio &amp; notes</span>
          </div>
          <div className={styles.heroRow}>
            <div className={styles.heroText}>
              <h1 className={`display ${styles.title}`}>Hi, I&rsquo;m Zoe</h1>
              {/*<p className={styles.subtitle}>
                Always excited to learn new things!
              </p>*/}
              <p className={styles.intro}>
                Welcome to my personal website! I&rsquo;m a researcher who is always interested in learning new things!
                I like making videos to explain concepts I enjoy and picking up new hobbies/ adventures.
                This website is simply a collection of some of my favorite work, experiences and memories :)
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <Link to="/about/zoe" className="pill">
                  More about me
                </Link>
                <a
                  href="https://www.linkedin.com/in/zoe-hickey-ju%C3%A1rez/"
                  target="_blank"
                  rel="noreferrer"
                  className="pill"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <img src={profilePhoto} alt="Zoe" className={styles.photo} />
          </div>
        </div>
      </section>

      <Marquee />

      <section className="band band--bottom band--cream">
        <div className="container">
          <div className={styles.grid}>
            {SECTIONS.map((s) => (
              <Link to={s.to} className={styles.card} key={s.label}>
                {s.image ? (
                  <img src={s.image} alt="" className={styles.cardPhoto} />
                ) : (
                  <Placeholder label="Photo placeholder" />
                )}
                <h3 className={`display ${styles.cardTitle}`}>{s.label}</h3>
                <p className={styles.cardBlurb}>{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
