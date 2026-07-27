import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={`display ${styles.wordmark}`}>Zoe Hickey</p>
          <p className={styles.tagline}>your tagline here</p>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="mailto:zoe.hickey@gmail.com">Email</a>
          </li>
          <li>
            <span className={styles.comingSoon}>GitHub — coming soon</span>
          </li>
          <li>
            <span className={styles.comingSoon}>YouTube — coming soon</span>
          </li>
        </ul>

        <p className={styles.copy}>&copy; {year} Zoe Hickey</p>
      </div>
    </footer>
  )
}

export default Footer
