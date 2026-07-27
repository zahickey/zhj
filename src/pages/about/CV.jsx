import PageHero from '../../components/PageHero.jsx'
import styles from './About.module.css'

const SECTIONS = [
  {
    title: 'Experience',
    rows: [
      { title: '[ Role title ] — [ Company ]', meta: '[ 20XX — present ]' },
      { title: '[ Role title ] — [ Company ]', meta: '[ 20XX — 20XX ]' },
    ],
  },
  {
    title: 'Education',
    rows: [{ title: '[ Degree ] — [ School ]', meta: '[ 20XX — 20XX ]' }],
  },
  {
    title: 'Skills',
    rows: [{ title: '[ Skill, skill, skill ]', meta: '' }],
  },
]

function CV() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="CV"
        subtitle="[ short summary line — replace with your actual headline ]"
        tone="mint"
        radius="top"
      >
        <a
          className="pill pill--disabled"
          href="#"
          title="Add your CV PDF to /public and link it here"
          style={{ marginTop: 28 }}
        >
          Download CV (PDF) — coming soon
        </a>
      </PageHero>

      <section className="band band--bottom band--cream">
        <div className="container">
          {SECTIONS.map((section) => (
            <div className={styles.cvSection} key={section.title}>
              <h2 className={`display ${styles.heading}`}>{section.title}</h2>
              {section.rows.map((row, i) => (
                <div className={styles.cvRow} key={i}>
                  <span>{row.title}</span>
                  {row.meta && <span className={styles.cvRowMeta}>{row.meta}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CV
