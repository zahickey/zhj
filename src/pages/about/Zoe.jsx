import styles from './About.module.css'

function Zoe() {
  return (
    <>
      <section className="band band--top band--cream" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className={styles.bioGrid}>
            <div>
              <h2 className={`display ${styles.heading}`}>Bio</h2>

              <p className={styles.paragraph}>
                I am a quant researcher originally from Chile. I studied economics,
                mathematics, and computer science at USC, then spent a few years as a
                quantitative researcher at BlackRock in San Francisco, where I worked
                on signal research. These days I&rsquo;m exploring personal projects
                and learning about how AI can be used to advance the Sustainable
                Development Goals.
              </p>

              <hr className="hairline" style={{ margin: '32px 0' }} />

              <h3 className={styles.subheading}>
                <span className={styles.highlight} style={{ background: 'var(--mint)' }}>
                  Early
                </span>
              </h3>
              <p className={styles.paragraph}>
                I was born and grew up in Chile. My first International Relations
                class in high school was a wake-up call. Suddenly I could name and
                understand the differences I&rsquo;d been seeing my whole life between
                Chile and the US, rooted in their different histories. That got me
                curious about how systems actually shape societies, which led me to
                the United Nations and the Sustainable Development Goals, and then to
                economics as the language for quantifying these problems. Around the
                same time, I started learning about AI and it hit me: if machines
                could process so much more information and context than humans,
                I&rsquo;d need to understand that too if I actually wanted to do
                meaningful research on these issues. So I went to college to study
                all three: economics, mathematics, and computer science.
              </p>

              <hr className="hairline" style={{ margin: '32px 0' }} />

              <h3 className={styles.subheading}>
                <span className={styles.highlight} style={{ background: 'var(--peach)' }}>
                  University of Southern California — Los Angeles
                </span>
              </h3>
              <p className={styles.paragraph} style={{ fontStyle: 'italic', marginTop: -8 }}>
                B.S. Economics/Mathematics + Minor Computer Science (2023)
              </p>
              <p className={styles.paragraph}>
                I studied mathematics and economics with a computer science minor. I
                loved that this combination let me work with real-world data and
                think computationally about problems. A standout class was a graduate
                Urban Economics course, where I analyzed gender pay gap patterns using
                actual datasets. Senior year, I took &ldquo;AI for Sustainable Development,&rdquo;
                which let me apply these concepts to real problems after studying
                them mostly in theory. After graduation, I wanted to learn more about
                applying computational methods to real-world data, so I moved to San
                Francisco as a quantitative researcher at BlackRock.
              </p>

              <hr className="hairline" style={{ margin: '32px 0' }} />

              <h3 className={styles.subheading}>
                <span className={styles.highlight} style={{ background: 'var(--pink)' }}>
                  BlackRock — San Francisco
                </span>
              </h3>
              <p className={styles.paragraph} style={{ fontStyle: 'italic', marginTop: -8 }}>
                Quantitative Research Analyst/Associate (2023–2026)
              </p>
              <p className={styles.paragraph}>
                At BlackRock, I had the privilege of working alongside some of the
                smartest and kindest researchers I&rsquo;ve met. I learned the
                fundamentals of portfolio management, contributed to the signal
                research process, and wrote research reports for our internal
                approval board. Along the way, I built skills in causal inference,
                ancillary testing, LLMs, and optimization. It was an incredible few
                years, but I found myself increasingly drawn to problems beyond the
                scope of finance.
              </p>

              <hr className="hairline" style={{ margin: '32px 0' }} />

              <h3 className={styles.subheading}>
                <span className={styles.highlight} style={{ background: 'var(--pale-yellow)' }}>
                  Currently
                </span>
              </h3>
              <p className={styles.paragraph}>
                For the past month, I&rsquo;ve been exploring personal projects and
                getting back into how AI can be used to advance the SDGs :)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Zoe
