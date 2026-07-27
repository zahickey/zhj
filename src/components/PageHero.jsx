import styles from './PageHero.module.css'

/**
 * Reusable rounded gradient hero used at the top of every page.
 * `tone` selects which gradient/band variant to use, `radius` matches
 * it to its position in the band stack (see global.css .band--* classes).
 */
function PageHero({ eyebrow, title, subtitle, tone = 'mint', radius = 'top', children }) {
  return (
    <section className={`band band--${radius} band--gradient-${tone} ${styles.hero}`}>
      <div className="container">
        <hr className="hairline" />
        <div className={styles.top}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
        <h1 className={`display ${styles.title}`}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

export default PageHero
