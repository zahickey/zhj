import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={`display ${styles.wordmark}`}>Zoe Hickey</p>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="mailto:zoe.hickey@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zoe-hickey-ju%C3%A1rez/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
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
