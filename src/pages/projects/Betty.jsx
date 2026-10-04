import PageHero from '../../components/PageHero.jsx'
import styles from './Betty.module.css'

import bettyLogo from '../../assets/images/betty/betty-logo.svg'
import dashboardImg from '../../assets/images/betty/dashboard.png'
import pmLogImg from '../../assets/images/betty/pm-log.png'
import labPhotoImg from '../../assets/images/betty/lab-photo.png'

const BETTY_URL = 'https://bettydialysis.com'
const BETTY_DEMO_URL = 'https://www.bettydialysis.com/demo'

function Figure({ src, alt, caption, phone = false }) {
  return (
    <figure className={`${styles.figure} ${phone ? styles.figurePhone : ''}`}>
      <img
        className={`${styles.figureImg} ${phone ? styles.figurePhoneImg : ''}`}
        src={src}
        alt={alt}
        loading="lazy"
      />
      {caption && <figcaption className={styles.figureCaption}>{caption}</figcaption>}
    </figure>
  )
}

const PATIENT_FEATURES = [
  {
    name: 'PM & AM dialysis logging',
    desc: 'A place to log your nightly PM setup and AM results, all in one spot.',
  },
  {
    name: 'Digitized lab reports',
    desc: 'Store and digitize your recurring lab reports, so every result is saved and easy to find.',
  },
  {
    name: 'Vitals alongside labs',
    desc: 'Track weight, blood pressure, and pulse next to lab results, so a change shows up as a trend instead of a surprise.',
  },
  {
    name: 'Medications, appointments & notes',
    desc: 'Keep medications, upcoming appointments, and private notes together in one place.',
  },
  {
    name: 'Export anytime',
    desc: 'Download every metric as a CSV whenever you want your own copy of the data.',
  },
]

const PROVIDER_FEATURES = [
  {
    name: "On the patient's terms",
    desc: "You only see the patients who've chosen to share their chart with you — no portal to set up, just an invite when they're ready.",
  },
  {
    name: 'Trends between visits',
    desc: 'Review nightly PD metrics and lab trends between visits, without waiting on a phone call.',
  },
  {
    name: 'Out-of-range flags',
    desc: 'Betty flags lab results outside the normal range, so nothing gets missed.',
  },
  {
    name: 'Private provider notes',
    desc: "Keep your own notes on a patient's care — they're never shown on the patient's side.",
  },
]

const PHOTO_STEPS = [
  {
    name: 'Take a photo, or upload a PDF',
    desc: "Use your phone's camera, or drop in whatever the lab already sent you.",
  },
  {
    name: 'Check the extracted table',
    desc: "Betty reads every test, value, and unit. Look it over before saving — you're always in control of what gets stored.",
  },
  {
    name: 'Watch it plotted over time',
    desc: "Every saved result feeds a trend chart, so a rising creatinine or a slipping albumin shows up months before it's easy to miss.",
  },
]

function Betty() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Betty"
        subtitle="A simple, no-frills way to track home peritoneal dialysis — log nightly exchanges, snap a photo of your labs instead of typing them in, and watch every trend come together in one place for you and your care team."
        tone="mint"
        radius="top"
        className={styles.heroCompact}
        subtitleStyle={{ maxWidth: 700 }}
      >
        <p className={styles.byline}>Zoe Hickey, live product</p>
        <div className={styles.linkRow}>
          <a className="pill" href={BETTY_URL} target="_blank" rel="noreferrer">
            bettydialysis.com
          </a>
        </div>
        <img className={styles.logo} src={bettyLogo} alt="Betty logo" />
      </PageHero>

      <section className="band band--bottom band--cream">
        <div className="container">
          <article className={styles.article}>
            <h2 className={`display ${styles.h2}`}>What is Betty?</h2>
            <p className={styles.paragraph}>
              My mom has been on peritoneal dialysis at home since 2021, and watching her
              routine &mdash; a nightly exchange logged by hand, lab panels drawn every few
              weeks, everything scattered across a paper log, a folder of printed reports, and a
              provider portal &mdash; I just wanted one place to keep it all
              together. So that&rsquo;s Betty! It&rsquo;s a simple, barebones chart that holds
              nightly PD logs, lab results (snap a photo and Betty reads them for you), vitals,
              medications, appointments, and notes &mdash; pretty much everything a PD patient
              juggles, all in one spot. A patient logs it once at home in just a couple of
              minutes and always has easy access to their own data, and their care team can see
              the same trend without a phone call. It&rsquo;s free, and open to any dialysis
              patient or provider who&rsquo;d like an account.
            </p>

            <Figure
              src={dashboardImg}
              alt="Betty patient dashboard showing latest weight, blood pressure, notes logged, lab results logged, and weight/blood pressure trend charts over several months"
              caption="The patient dashboard — nightly metrics, notes, and lab results, all as one trend line. (Sample data.)"
            />

            <div className={styles.linkRow}>
              <a className="pill" href={BETTY_DEMO_URL} target="_blank" rel="noreferrer">
                Try the demo
              </a>
            </div>

            <div className={styles.featureColumns}>
              <div>
                <p className={styles.groupLabel}>For patients &amp; caregivers</p>
                <div className={styles.networkList}>
                  {PATIENT_FEATURES.map((f) => (
                    <div className={styles.networkItem} key={f.name}>
                      <div>
                        <div className={styles.networkName}>{f.name}</div>
                        <div className={styles.networkDesc}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className={styles.groupLabel}>For providers &amp; care teams</p>
                <div className={styles.networkList}>
                  {PROVIDER_FEATURES.map((f) => (
                    <div className={styles.networkItem} key={f.name}>
                      <div>
                        <div className={styles.networkName}>{f.name}</div>
                        <div className={styles.networkDesc}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className={`display ${styles.h2}`}>How Betty helps</h2>
            <p className={styles.paragraph}>
              One chart, two kinds of days &mdash; a patient logs it once at home, and their
              provider can peek in and see the trend whenever they need to, no phone call
              required.
            </p>

            <div className={styles.demoRow}>
              <Figure
                phone
                src={pmLogImg}
                alt="Enter Details form on a phone, with PM setup fields for bag dextrose percentages and fill volume, a Save PM button, and recent entries"
              />
              <div>
                <h3 className={`display ${styles.h3}`}>Nightly PD logging</h3>
                <p className={styles.paragraph}>
                  Each night, pop open Betty and log the PM setup &mdash; dextrose strength and
                  fill volume &mdash; right from your phone. The next morning, jot down the AM
                  results: drain, ultrafiltration, and dwell time. It only takes a couple of
                  minutes, and it saves straight into that night&rsquo;s entry.
                </p>
              </div>
            </div>

            <h3 className={`display ${styles.h3}`}>Snap a photo of your labs</h3>
            <p className={styles.paragraph}>
              After a blood draw, there&rsquo;s no need to type a single number in by hand
              &mdash; just snap a picture of the printed lab report, or upload the PDF from the
              lab&rsquo;s portal, and Betty lays the values out in an editable table within
              seconds.
            </p>

            <div className={styles.stepsRow}>
              <div className={styles.networkList}>
                {PHOTO_STEPS.map((step, i) => (
                  <div className={styles.networkItem} key={step.name}>
                    <span className={styles.networkIndex}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className={styles.networkName}>{step.name}</div>
                      <div className={styles.networkDesc}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Figure
                phone
                src={labPhotoImg}
                alt="Lab Results screen on a phone showing a Review extracted results table, with Potassium and Creatinine flagged above normal range"
              />
            </div>

            <div className={styles.calloutBox}>
              <span className={styles.calloutLabel}>Privacy</span>
              <div className={styles.calloutList}>
                <span className={styles.calloutMeta}>
                  Every patient gets their own account and sees only their own data. A provider
                  only sees a chart once a patient links their account to it &mdash; nothing is
                  shared unless you want it to be.
                </span>
              </div>
            </div>

            <h2 className={`display ${styles.h2}`}>Getting started</h2>
            <p className={styles.paragraph}>
              Betty&rsquo;s free to use, and I&rsquo;d love for any dialysis patient or provider
              to come create an account.
            </p>
            <div className={styles.linkRow}>
              <a className="pill" href={BETTY_URL} target="_blank" rel="noreferrer">
                Visit bettydialysis.com
              </a>
              <a className="pill" href={BETTY_DEMO_URL} target="_blank" rel="noreferrer">
                Try the demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Betty
