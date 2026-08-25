import { useState } from 'react'
import PageHero from '../../components/PageHero.jsx'
import styles from './DnnLymphoma.module.css'

const PDF_URL = `${import.meta.env.BASE_URL}papers/lymphoma-pet-ct-detection-quantification.pdf`
const GITHUB_URL = 'https://github.com/zahickey/dnn_lymphoma'

const FUNDAMENTALS = [
  {
    name: 'Plain CNN encoder-decoder',
    desc: 'Conv/pool down, conv/upsample back up — no skip connections. Baseline for seeing what skip connections actually buy you.',
  },
  {
    name: '2D U-Net',
    desc: 'The classic architecture, with skip connections. First network trained on real PET/CT data.',
  },
  {
    name: '2D U-Net + residual blocks',
    desc: 'Stepping stone toward ResUNet below.',
  },
  {
    name: 'Simple 3D U-Net',
    desc: 'Same idea, extended to volumetric patches — where most of the paper’s networks actually operate.',
  },
]

const PAPER_NETWORKS = [
  { name: 'ResUNet', desc: 'Residual-block U-Net, via MONAI.' },
  { name: 'SegResNet', desc: 'ResNet-based encoder-decoder, via MONAI.' },
  { name: 'DynUNet', desc: 'nnU-Net-style self-configuring architecture, via MONAI.' },
  { name: 'SwinUNETR', desc: 'Transformer-based (Swin) encoder with a CNN decoder, via MONAI.' },
]

const REFERENCES = [
  {
    text: `Ahamed, Shadab, et al. "Comprehensive Framework for Evaluation of Deep Neural Networks in Detection and Quantification of Lymphoma from PET/CT Images: Clinical Insights, Pitfalls, and Observer Agreement Analyses." arXiv, 6 Dec. 2024, arxiv.org/abs/2311.09614.`,
    url: 'https://arxiv.org/abs/2311.09614',
  },
  {
    text: `Gatidis, Sergios, et al. "A Whole-Body FDG-PET/CT Dataset with Manually Annotated Tumor Lesions." Scientific Data, vol. 9, no. 601, 2022.`,
    url: 'https://www.nature.com/articles/s41597-022-01718-3',
  },
]

function Overview() {
  return (
    <>
      <h2 className={`display ${styles.h2}`}>What this is</h2>
      <p className={styles.paragraph}>
        A hands-on project to learn how neural networks actually work by implementing
        several architectures &mdash; from a from-scratch basic CNN up to the networks
        used in the reference paper &mdash; on the same real task: segmenting lymphoma
        lesions in whole-body FDG-PET/CT scans.
      </p>
      <p className={styles.paragraph}>
        Replicating the data and general approach of &ldquo;Comprehensive Framework for
        Evaluation of Deep Neural Networks in Detection and Quantification of Lymphoma
        from PET/CT Images: Clinical Insights, Pitfalls, and Observer Agreement
        Analyses&rdquo; (Ahamed et al., 2024), starting from vanilla PyTorch
        fundamentals before working up to the paper&rsquo;s own networks.
      </p>

      <div className={styles.calloutBox}>
        <span className={styles.calloutLabel}>Data source</span>
        <div className={styles.calloutList}>
          <a href="https://www.cancerimagingarchive.net/collection/fdg-pet-ct-lesions/" target="_blank" rel="noreferrer">
            TCIA &mdash; FDG-PET-CT-Lesions collection
          </a>
          <span className={styles.calloutMeta}>
            Public, CC BY 4.0. Using the ~144-patient lymphoma subset (same cohort as
            the paper&rsquo;s external test set).
          </span>
          <a href="https://www.nature.com/articles/s41597-022-01718-3" target="_blank" rel="noreferrer">
            Gatidis et al., &ldquo;A whole-body FDG-PET/CT dataset with manually
            annotated tumor lesions,&rdquo; Scientific Data (2022)
          </a>
          <span className={styles.calloutMeta}>Origin paper describing how the dataset was built.</span>
          <a href="https://autopet.grand-challenge.org/Dataset/" target="_blank" rel="noreferrer">
            AutoPET Challenge &mdash; Dataset page
          </a>
          <span className={styles.calloutMeta}>Same data, packaged for the MICCAI AutoPET competition.</span>
        </div>
      </div>

      <h2 className={`display ${styles.h2}`}>The plan</h2>
      <p className={styles.paragraph}>
        Roughly easiest &rarr; hardest. The early networks are written from scratch in
        plain PyTorch to build real intuition; the later ones lean on MONAI (as the
        paper does), since hand-rolling a transformer isn&rsquo;t a great use of
        learning time.
      </p>

      <p className={styles.groupLabel}>Fundamentals (2D, from scratch)</p>
      <div className={styles.networkList}>
        {FUNDAMENTALS.map((n, i) => (
          <div className={styles.networkItem} key={n.name}>
            <span className={styles.networkIndex}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <div className={styles.networkName}>{n.name}</div>
              <div className={styles.networkDesc}>{n.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.groupLabel}>The paper&rsquo;s networks</p>
      <div className={styles.networkList}>
        {PAPER_NETWORKS.map((n, i) => (
          <div className={styles.networkItem} key={n.name}>
            <span className={styles.networkIndex}>{String(i + 5).padStart(2, '0')}</span>
            <div>
              <div className={styles.networkName}>{n.name}</div>
              <div className={styles.networkDesc}>{n.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className={`display ${styles.h2}`}>References</h2>
      <div className={styles.citationList}>
        {REFERENCES.map((ref) => (
          <div className={styles.citation} key={ref.url}>
            {ref.url ? (
              <a href={ref.url} target="_blank" rel="noreferrer">
                {ref.text}
              </a>
            ) : (
              ref.text
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function Results() {
  return (
    <div className={styles.resultsBlock}>
      <p className={styles.resultsMessage}>In progress&hellip; stay tuned!</p>
      <a className="pill" href={GITHUB_URL} target="_blank" rel="noreferrer">
        Follow along on GitHub
      </a>
    </div>
  )
}

function DnnLymphoma() {
  const [tab, setTab] = useState('overview')

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="DNN for Lymphoma"
        subtitle="Learning how neural networks work by implementing and training several architectures — from a plain CNN up to the ones used in the paper — to segment lymphoma lesions in whole-body PET/CT scans."
        tone="mint"
        radius="top"
      >
        <p className={styles.byline}>Zoe Hickey, in progress</p>
        <div className={styles.linkRow}>
          <a className="pill" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub repo
          </a>
          <a className="pill pill--outline" href={PDF_URL} target="_blank" rel="noreferrer">
            Reference paper (PDF)
          </a>
        </div>
      </PageHero>

      <section className="band band--bottom band--cream">
        <div className="container">
          <article className={styles.article}>
            <div className={styles.tabBar}>
              <button
                type="button"
                className={`${styles.tabButton} ${tab === 'overview' ? styles.tabButtonActive : ''}`}
                onClick={() => setTab('overview')}
              >
                Overview
              </button>
              <button
                type="button"
                className={`${styles.tabButton} ${tab === 'results' ? styles.tabButtonActive : ''}`}
                onClick={() => setTab('results')}
              >
                Results
              </button>
            </div>

            {tab === 'overview' ? <Overview /> : <Results />}
          </article>
        </div>
      </section>
    </>
  )
}

export default DnnLymphoma
