import PageHero from '../../components/PageHero.jsx'
import Placeholder from '../../components/Placeholder.jsx'
import styles from './Algorithms.module.css'

/** Shared template for the three "Algorithms Explained" sub-pages. */
function AlgorithmPage({ title, subtitle }) {
  return (
    <>
      <PageHero eyebrow="Algorithms Explained" title={title} subtitle={subtitle} tone="lavender" radius="top">
        <div className={styles.linkRow}>
          <span className="pill pill--outline pill--disabled" title="Link your GitHub repo here once it exists">
            GitHub — coming soon
          </span>
          <span className="pill pill--outline pill--disabled" title="Link your YouTube video here once it exists">
            YouTube — coming soon
          </span>
        </div>
      </PageHero>

      <section className="band band--bottom band--cream">
        <div className="container">
          <div className={styles.body}>
            <p className={styles.paragraph}>
              [ Write-up placeholder — intro to the problem this explains and why
              it&rsquo;s interesting. ]
            </p>
            <p className={styles.paragraph}>
              [ Write-up placeholder — the approach / algorithm itself. ]
            </p>

            <Placeholder label="Diagram / figure placeholder" height={280} />

            <p className={styles.paragraph} style={{ marginTop: 32 }}>
              [ Write-up placeholder — results, takeaways, or links to further
              reading. ]
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AlgorithmPage
