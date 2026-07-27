import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee.jsx'
import Placeholder from '../components/Placeholder.jsx'
import styles from './Home.module.css'

const SECTIONS = [
  {
    label: 'About',
    to: '/about/zoe',
    blurb: 'Who I am, and a CV if you want the formal version.',
  },
  {
    label: 'Algorithms Explained',
    to: '/algorithms/decision-making',
    blurb: 'Write-ups on decision making algorithms, NeurIPS work, and more.',
  },
  {
    label: 'Fun',
    to: '/fun/alaska',
    blurb: 'A drive to Alaska, yoga with friends, and other things I like doing.',
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
          <h1 className={`display ${styles.title}`}>Hi, I&rsquo;m Zoe</h1>
          <p className={styles.subtitle}>
            [ your tagline here — one line about what you do ]
          </p>
          <p className={styles.intro}>
            [ Your bio intro goes here. A couple of sentences about who you are, what
            you work on, and what this site is for. Replace this placeholder once
            you&rsquo;ve got copy you like. ]
          </p>
          <Link to="/about/zoe" className="pill" style={{ marginTop: 28 }}>
            More about me
          </Link>
        </div>
      </section>

      <Marquee />

      <section className="band band--bottom band--cream">
        <div className="container">
          <div className={styles.grid}>
            {SECTIONS.map((s) => (
              <Link to={s.to} className={styles.card} key={s.label}>
                <Placeholder label="Photo placeholder" />
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
