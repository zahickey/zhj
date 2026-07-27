import PageHero from '../../components/PageHero.jsx'
import Placeholder from '../../components/Placeholder.jsx'
import styles from './Fun.module.css'

/** Shared template for the "Fun" sub-pages. */
function FunPage({ title, subtitle }) {
  return (
    <>
      <PageHero eyebrow="Fun" title={title} subtitle={subtitle} tone="peach" radius="top" />

      <section className="band band--bottom band--cream">
        <div className="container">
          <p className={styles.paragraph}>
            [ Story placeholder — tell the story here once you&rsquo;ve got photos
            and notes to add. ]
          </p>

          <div className={styles.photoGrid}>
            <Placeholder label="Photo placeholder" height={260} />
            <Placeholder label="Photo placeholder" height={260} />
            <Placeholder label="Photo placeholder" height={260} />
          </div>
        </div>
      </section>
    </>
  )
}

export default FunPage
