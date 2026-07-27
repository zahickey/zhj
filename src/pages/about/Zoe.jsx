import PageHero from '../../components/PageHero.jsx'
import Placeholder from '../../components/Placeholder.jsx'
import Marquee from '../../components/Marquee.jsx'
import styles from './About.module.css'

function Zoe() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Zoe"
        subtitle="[ your one-line intro / tagline here ]"
        tone="mint"
        radius="top"
      />

      <Marquee items={['Hello', 'Nice to meet you', 'Hello', 'Nice to meet you']} />

      <section className="band band--bottom band--cream">
        <div className="container">
          <div className={styles.bioGrid}>
            <Placeholder label="Portrait placeholder" height={420} />
            <div>
              <h2 className={`display ${styles.heading}`}>Bio</h2>
              <p className={styles.paragraph}>
                [ Your bio goes here. Talk about your background, what you&rsquo;re
                working on, and what brought you to this point. Two or three
                paragraphs is plenty. ]
              </p>
              <p className={styles.paragraph}>
                [ Second paragraph placeholder — interests, current focus,
                whatever you want a first-time visitor to know. ]
              </p>

              <hr className="hairline" style={{ margin: '32px 0' }} />

              <h3 className={styles.subheading}>Quick facts</h3>
              <ul className={styles.factList}>
                <li>[ Fact placeholder — e.g. based in ... ]</li>
                <li>[ Fact placeholder — e.g. currently working on ... ]</li>
                <li>[ Fact placeholder — e.g. background in ... ]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Zoe
