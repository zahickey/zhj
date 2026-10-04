import PageHero from '../../components/PageHero.jsx'
import styles from './Videos.module.css'

const CHANNEL_URL = 'https://www.youtube.com/channel/UCeW-JAyhWEyUFtx4zd7N8rA'

/**
 * Add each new video here, newest first.
 * `id` is the part after `v=` in the YouTube URL (e.g. youtube.com/watch?v=dQw4w9WgXcQ).
 */
const VIDEOS = [
  {
    id: 'rCRF9H3XBnI',
    title: '7.1 Markov Decision Processes (MDPs!)',
    desc: 'An introduction to Markov Decision Processes, the framework for making decisions step by step when outcomes are uncertain. It covers the pieces of an MDP (states, actions, transitions, and rewards) and how they fit together.',
  },
  // {
  //   id: 'dQw4w9WgXcQ',
  //   title: 'Video title',
  //   desc: 'One or two sentences on what the video explains.',
  // },
]

function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Videos"
        subtitle="A YouTube channel where I explain algorithms: the core idea, why it works, and how to think about it."
        tone="mint"
        radius="top"
        className={styles.heroCompact}
        subtitleStyle={{ maxWidth: 700 }}
      >
        <div className={styles.linkRow}>
          <a className="pill" href={CHANNEL_URL} target="_blank" rel="noreferrer">
            Visit the channel
          </a>
        </div>
      </PageHero>

      <section className={`band band--bottom band--cream ${styles.body}`}>
        <div className="container">
          <article className={styles.article}>
            <h2 className={`display ${styles.h2}`}>About the channel</h2>
            <p className={styles.paragraph}>
              I started this channel to share videos explaining algorithms in a clear,
              intuitive way.
            </p>

            <h2 className={`display ${styles.h2}`}>All videos</h2>
            {VIDEOS.length === 0 ? (
              <p className={styles.paragraph}>
                The first videos are on their way &mdash; check back soon, or follow along on{' '}
                <a href={CHANNEL_URL} target="_blank" rel="noreferrer">YouTube</a>.
              </p>
            ) : (
              <div className={styles.videoList}>
                {VIDEOS.map((video) => (
                  <div className={styles.videoRow} key={video.id}>
                    <div className={styles.player}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div>
                      <h3 className={`display ${styles.h3}`}>{video.title}</h3>
                      <p className={styles.paragraph}>{video.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        </div>
      </section>
    </>
  )
}

export default Videos
