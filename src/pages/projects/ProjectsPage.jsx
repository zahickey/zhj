import PageHero from '../../components/PageHero.jsx'
import Placeholder from '../../components/Placeholder.jsx'
import styles from './Projects.module.css'

/** Shared template for the "Projects" sub-pages. */
function ProjectsPage({ title, subtitle }) {
  return (
    <>
      <PageHero eyebrow="Projects" title={title} subtitle={subtitle} tone="mint" radius="top">
        <div className={styles.linkRow}>
          <span className="pill pill--outline pill--disabled" title="Link your GitHub repo here once it exists">
            GitHub — coming soon
          </span>
          <span className="pill pill--outline pill--disabled" title="Link your write-up here once it exists">
            Write-up — coming soon
          </span>
        </div>
      </PageHero>

      <section className="band band--bottom band--cream">
        <div className="container">
          <div className={styles.body}>
            <p className={styles.paragraph}>
              [ Project placeholder — what it is and why you built it. ]
            </p>

            <Placeholder label="Diagram / figure placeholder" height={280} />

            <p className={styles.paragraph} style={{ marginTop: 32 }}>
              [ Project placeholder — results, takeaways, or links to further
              reading. ]
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
