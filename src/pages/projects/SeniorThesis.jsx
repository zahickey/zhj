import PageHero from '../../components/PageHero.jsx'
import styles from './SeniorThesis.module.css'

import fig1 from '../../assets/images/thesis/fig1-incarceration-distribution.png'
import fig2 from '../../assets/images/thesis/fig2-variables-table.png'
import fig3 from '../../assets/images/thesis/fig3-placements-distribution.png'
import fig4 from '../../assets/images/thesis/fig4-removals-distribution.png'
import fig5 from '../../assets/images/thesis/fig5-correlation-matrix.png'
import fig7 from '../../assets/images/thesis/fig7-state-map.png'
import fig9 from '../../assets/images/thesis/fig9-baseline-confusion.png'
import fig11 from '../../assets/images/thesis/fig11-smote-confusion.png'
import fig13 from '../../assets/images/thesis/fig13-smote-nostate-confusion.png'
import fig15 from '../../assets/images/thesis/fig15-svm-confusion.png'
import fig17 from '../../assets/images/thesis/fig17-rf-confusion.png'
import appendixE from '../../assets/images/thesis/appendixE-baseline-coefs.png'
import appendixF from '../../assets/images/thesis/appendixF-smote-nostate-coefs.png'
import appendixG from '../../assets/images/thesis/appendixG-svm-coefs.png'
import appendixH from '../../assets/images/thesis/appendixH-rf-importance.png'

const PDF_URL = `${import.meta.env.BASE_URL}thesis/ZH_Thesis_2023.pdf`

function Figure({ src, alt, caption, wide = true }) {
  return (
    <figure className={styles.figure} style={wide ? undefined : { maxWidth: 560, margin: '32px auto' }}>
      <img className={styles.figureImg} src={src} alt={alt} loading="lazy" />
      {caption && <figcaption className={styles.figureCaption}>{caption}</figcaption>}
    </figure>
  )
}

function RiskTable({ risk, protective, riskLabel = 'Risk Factors', protectiveLabel = 'Protective Factors', valueLabel = 'e^coef' }) {
  return (
    <div className={styles.riskGrid}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan={2}>{riskLabel}</th>
            </tr>
            <tr>
              <th>var</th>
              <th>{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {risk.map((row) => (
              <tr key={row.v}>
                <td>{row.v}</td>
                <td>{row.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {protective && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan={2}>{protectiveLabel}</th>
              </tr>
              <tr>
                <th>var</th>
                <th>{valueLabel}</th>
              </tr>
            </thead>
            <tbody>
              {protective.map((row) => (
                <tr key={row.v}>
                  <td>{row.v}</td>
                  <td>{row.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

/* ---------- Figure 8: baseline logistic regression ---------- */
const FIG8_RISK = [
  { v: 'subabuse_yes', n: '2.5750' }, { v: 'chbehprb_Yes', n: '2.0365' },
  { v: 'curplset_Institution', n: '1.7669' }, { v: 'numpla_11more', n: '1.6032' },
  { v: 'homeless_yes', n: '1.4606' }, { v: 'curplset_Group home', n: '1.4102' },
  { v: 'curplset_Runaway', n: '1.4080' }, { v: 'st_x_OH', n: '1.2951' },
  { v: 'st_x_TX', n: '1.2878' }, { v: 'st_x_CO', n: '1.2528' },
]
const FIG8_PROTECTIVE = [
  { v: 'sexabuse_Yes', n: '0.8530' }, { v: 'st_x_NJ', n: '0.8503' },
  { v: 'phyabuse_Yes', n: '0.8488' }, { v: 'st_x_PA', n: '0.8243' },
  { v: 'st_x_MA', n: '0.7979' }, { v: 'numpla_2', n: '0.7959' },
  { v: 'st_x_MO', n: '0.7869' }, { v: 'st_x_MD', n: '0.7817' },
  { v: 'neglect_Yes', n: '0.7479' }, { v: 'sex_x_female', n: '0.5673' },
]

/* ---------- Figure 10: smote-enn logistic regression ---------- */
const FIG10_RISK = [
  { v: 'subabuse_yes', n: '3.2530' }, { v: 'chbehprb_Yes', n: '2.7450' },
  { v: 'numpla_11more', n: '2.4899' }, { v: 'curplset_Institution', n: '1.8488' },
  { v: 'curplset_Group home', n: '1.4852' }, { v: 'homeless_yes', n: '1.3937' },
  { v: 'st_x_TX', n: '1.3452' }, { v: 'numpla_6_10', n: '1.2549' },
  { v: 'emotdist_Yes', n: '1.2510' }, { v: 'st_x_IN', n: '1.1856' },
]
const FIG10_PROTECTIVE = [
  { v: 'st_x_MA', n: '0.7024' }, { v: 'othermed_Yes', n: '0.6634' },
  { v: 'sexabuse_Yes', n: '0.6456' }, { v: 'phyabuse_Yes', n: '0.6429' },
  { v: 'numpla_2', n: '0.6326' }, { v: 'daparent_Yes', n: '0.6315' },
  { v: 'numpla_1', n: '0.6256' }, { v: 'curplset_Foster home, relative', n: '0.6009' },
  { v: 'neglect_Yes', n: '0.5614' }, { v: 'sex_x_female', n: '0.3651' },
]

/* ---------- Figure 12: smote-enn logistic regression, states removed ---------- */
const FIG12_RISK = [
  { v: 'subabuse_yes', n: '11.4970' }, { v: 'numpla_11more', n: '9.6733' },
  { v: 'chbehprb_Yes', n: '4.1781' }, { v: 'curplset_Institution', n: '3.2759' },
  { v: 'curplset_Runaway', n: '2.4372' }, { v: 'curplset_Group home', n: '2.3167' },
  { v: 'homeless_yes', n: '2.2849' }, { v: 'aachild_Yes', n: '1.8784' },
  { v: 'numpla_5', n: '1.7348' }, { v: 'dachild_Yes', n: '1.6734' },
]
const FIG12_PROTECTIVE = [
  { v: 'numpla_2', n: '0.3482' }, { v: 'curplset_Supervised independent living', n: '0.3019' },
  { v: 'prtsdied_Yes', n: '0.2968' }, { v: 'mr_Yes', n: '0.2797' },
  { v: 'hawaiipi_x_yes', n: '0.2608' }, { v: 'relinqsh_Yes', n: '0.2282' },
  { v: 'asian_x_yes', n: '0.2155' }, { v: 'sex_x_female', n: '0.1977' },
  { v: 'curplset_Pre-adoptive home', n: '0.1566' }, { v: 'phydis_Yes', n: '0.1368' },
]

/* ---------- Figure 14: SVM ---------- */
const FIG14_RISK = [
  { v: 'numpla_11more', n: '2.2560' }, { v: 'subabuse_yes', n: '2.2165' },
  { v: 'chbehprb_Yes', n: '1.6260' }, { v: 'curplset_Institution', n: '1.4886' },
  { v: 'curplset_Runaway', n: '1.3666' }, { v: 'curplset_Group home', n: '1.3425' },
  { v: 'homeless_yes', n: '1.3015' }, { v: 'aachild_Yes', n: '1.2553' },
  { v: 'numpla_5', n: '1.2542' }, { v: 'dachild_Yes', n: '1.1852' },
]
const FIG14_PROTECTIVE = [
  { v: 'phyabuse_Yes', n: '0.7069' }, { v: 'curplset_Supervised independent living', n: '0.6688' },
  { v: 'prtsdied_Yes', n: '0.6638' }, { v: 'hawaiipi_x_yes', n: '0.6531' },
  { v: 'mr_Yes', n: '0.6454' }, { v: 'relinqsh_Yes', n: '0.6047' },
  { v: 'sex_x_female', n: '0.5908' }, { v: 'asian_x_yes', n: '0.5864' },
  { v: 'curplset_Pre-adoptive home', n: '0.5745' }, { v: 'phydis_Yes', n: '0.4933' },
]

/* ---------- Figure 16: Random Forest ---------- */
const FIG16_IMPORTANCE = [
  { v: 'subabuse_yes', n: '0.1309' }, { v: 'chbehprb_Yes', n: '0.0988' },
  { v: 'sex_x_female', n: '0.0830' }, { v: 'numpla_11more', n: '0.0632' },
  { v: 'neglect_Yes', n: '0.0550' }, { v: 'curplset_Institution', n: '0.0402' },
  { v: 'removal_2more', n: '0.0306' }, { v: 'curplset_Foster home, relative', n: '0.0283' },
  { v: 'homeless_yes', n: '0.0242' }, { v: 'curplset_Group home', n: '0.0239' },
]

/* ---------- Figure 6: correlation with incarceration (as printed, two columns) ---------- */
const FIG6_LEFT = [
  ['subabuse_yes', '0.317'], ['chbehprb_Yes', '0.279'], ['curplset_Institution', '0.198'],
  ['sex_x_female', '-0.177'], ['neglect_Yes', '-0.152'], ['curplset_Foster home, relative', '-0.118'],
  ['homeless_yes', '0.118'], ['dachild_Yes', '0.106'], ['curplset_Group home', '0.096'],
  ['curplset_Runaway', '0.092'], ['daparent_Yes', '-0.078'], ['sexabuse_Yes', '-0.070'],
  ['aachild_Yes', '0.070'], ['phyabuse_Yes', '-0.069'], ['removal_2more', '0.060'],
  ['curplset_Pre-adoptive home', '-0.057'], ['placeout_Yes', '0.052'], ['emotdist_Yes', '0.051'],
  ['housing_Yes', '-0.047'], ['currenroll_yes', '-0.045'], ['abandmnt_Yes', '0.038'],
]
const FIG6_RIGHT = [
  ['abandmnt_Yes', '0.038'], ['othermed_Yes', '-0.036'], ['curplset_Trial home visit', '0.035'],
  ['blkafram_x_yes', '0.033'], ['aaparent_Yes', '-0.032'], ['asian_x_yes', '-0.031'],
  ['amiakn_x_yes', '0.026'], ['vishear_Yes', '-0.024'], ['phydis_Yes', '-0.023'],
  ['curplset_Missing', '0.022'], ['mr_Yes', '-0.021'], ['white_x_yes', '-0.016'],
  ['prtsjail_Yes', '-0.016'], ['relinqsh_Yes', '-0.011'], ['clindis_Yes', '0.010'],
  ['prtsdied_Yes', '-0.009'], ['hawaiipi_x_yes', '-0.007'], ['manrem_Court ordered', '0.005'],
  ['childis_Yes', '-0.003'], ['curplset_Supervised independent living', '-0.002'], ['cnctadult_yes', '0.000'],
]

/* ---------- Appendix A: bivariate logit p-values ---------- */
const APPENDIX_A = [
  { category: 'Race', rows: [
    ['amiakn_x_yes', '0.213'], ['asian_x_yes', '0.000'], ['blkafram_x_yes', '0.000'],
    ['hawaiipi_x_yes', '0.000'], ['raceunkn_yes', '0.000'], ['racedcln_yes', '0.000'],
  ]},
  { category: 'Main demographics', rows: [
    ['sex_male', '0.000'], ['currenroll_yes', '0.000'], ['cnctadult_yes', '0.004'],
    ['homeless_yes', '0.000'], ['subabuse_yes', '0.000'],
  ]},
  { category: 'Disabilities', rows: [
    ['clindis_yes', '0.000'], ['mr_yes', '0.000'], ['vishear_yes', '0.000'],
    ['phydis_yes', '0.000'], ['emotdist_yes', '0.000'], ['othermed_yes', '0.000'],
  ]},
  { category: 'Adoption', rows: [
    ['everadpt_unabletodetermine', '0.045'], ['everadpt_yeschildhasbeenlegallya', '0.000'],
  ]},
  { category: 'Total removals', rows: [
    ['totalrem_1', '0.000'], ['totalrem_2more', '0.000'], ['manrem_courtordered', '0.000'],
  ]},
  { category: 'Current placement', rows: [
    ['curplset_fosterhomerelative', '0.000'], ['curplset_grouphome', '0.000'],
    ['curplset_institution', '0.000'], ['curplset_missing', '0.149'],
    ['curplset_runaway', '0.000'], ['curplset_supervisedindependentli', '0.006'],
    ['curplset_trialhomevisit', '0.000'],
  ]},
  { category: 'Reason for removal', rows: [
    ['placeout_yes', '0.000'], ['phyabuse_yes', '0.000'], ['sexabuse_yes', '0.000'],
    ['neglect_yes', '0.000'], ['aaparent_yes', '0.000'], ['daparent_yes', '0.000'],
    ['aachild_yes', '0.000'], ['dachild_yes', '0.000'], ['childis_yes', '0.333'],
    ['chbehprb_yes', '0.000'], ['prtsdied_yes', '0.000'], ['prtsjail_yes', '0.000'],
    ['abandmnt_yes', '0.000'], ['relinqsh_yes', '0.000'], ['housing_yes', '0.000'],
  ]},
  { category: 'Number of placements', rows: [
    ['numpla_2', '0.000'], ['numpla_3', '0.000'], ['numpla_4', '0.003'],
    ['numpla_5', '0.022'], ['numpla_6_10', '0.000'], ['numpla_11more', '0.000'],
  ]},
]

/* ---------- Appendix C: incarceration response distribution per state ---------- */
const APPENDIX_C = [
  [1, 'CO', '56.79%', '26.13%', '14.63%', '2.44%', '2.17'], [2, 'ID', '51.16%', '45.35%', '2.33%', '1.16%', '1.13'],
  [3, 'WY', '43.59%', '52.56%', '3.85%', '0.00%', '0.83'], [4, 'UT', '41.52%', '37.05%', '19.64%', '1.79%', '1.12'],
  [5, 'WI', '40.44%', '50.55%', '8.20%', '0.82%', '0.80'], [6, 'VA', '35.19%', '54.57%', '9.80%', '0.45%', '0.64'],
  [7, 'ND', '34.86%', '33.03%', '32.11%', '0.00%', '1.06'], [8, 'DE', '33.90%', '49.15%', '16.95%', '0.00%', '0.69'],
  [9, 'SD', '33.33%', '61.67%', '3.33%', '1.67%', '0.54'], [10, 'LA', '33.02%', '58.14%', '7.91%', '0.93%', '0.57'],
  [11, 'IA', '32.31%', '54.23%', '11.92%', '1.54%', '0.60'], [12, 'RI', '32.00%', '52.80%', '15.20%', '0.00%', '0.61'],
  [13, 'NM', '31.51%', '68.49%', '0.00%', '0.00%', '0.46'], [14, 'WA', '31.41%', '50.69%', '16.80%', '1.10%', '0.62'],
  [15, 'IN', '30.99%', '52.67%', '14.96%', '1.37%', '0.59'], [16, 'MN', '30.79%', '46.07%', '22.05%', '1.09%', '0.67'],
  [17, 'NV', '29.41%', '57.35%', '13.24%', '0.00%', '0.51'], [18, 'DC', '29.17%', '56.25%', '14.58%', '0.00%', '0.52'],
  [19, 'TX', '26.77%', '55.76%', '16.73%', '0.74%', '0.48'], [20, 'TN', '26.53%', '26.05%', '47.27%', '0.16%', '1.02'],
  [21, 'SC', '24.91%', '51.54%', '22.53%', '1.02%', '0.48'], [22, 'AR', '23.89%', '46.02%', '28.76%', '1.33%', '0.52'],
  [23, 'MT', '22.77%', '53.47%', '21.78%', '1.98%', '0.43'], [24, 'OH', '22.43%', '24.84%', '46.62%', '6.12%', '0.90'],
  [25, 'GA', '21.81%', '61.19%', '16.15%', '0.85%', '0.36'], [26, 'KS', '21.55%', '64.66%', '12.03%', '1.75%', '0.33'],
  [27, 'IL', '20.42%', '55.80%', '21.96%', '1.82%', '0.37'], [28, 'KY', '19.75%', '56.40%', '20.85%', '3.00%', '0.35'],
  [29, 'NE', '19.55%', '62.57%', '11.73%', '6.15%', '0.31'], [30, 'PA', '19.08%', '56.66%', '20.71%', '3.55%', '0.34'],
  [31, 'CA', '17.11%', '51.41%', '30.70%', '0.78%', '0.33'], [32, 'WV', '16.96%', '48.25%', '29.53%', '5.26%', '0.35'],
  [33, 'ME', '16.95%', '62.71%', '20.34%', '0.00%', '0.27'], [34, 'HI', '16.88%', '62.34%', '19.48%', '1.30%', '0.27'],
  [35, 'VT', '16.13%', '83.87%', '0.00%', '0.00%', '0.19'], [36, 'NH', '15.96%', '54.26%', '29.79%', '0.00%', '0.29'],
  [37, 'CT', '15.84%', '76.02%', '8.14%', '0.00%', '0.21'], [38, 'NY', '15.75%', '42.02%', '41.24%', '0.99%', '0.37'],
  [39, 'OR', '15.26%', '43.61%', '36.45%', '4.67%', '0.35'], [40, 'OK', '14.54%', '71.37%', '12.33%', '1.76%', '0.20'],
  [41, 'AL', '14.45%', '62.24%', '22.12%', '1.18%', '0.23'], [42, 'MA', '13.83%', '60.81%', '23.76%', '1.61%', '0.23'],
  [43, 'MO', '13.16%', '53.60%', '32.13%', '1.11%', '0.25'], [44, 'AK', '12.66%', '56.96%', '30.38%', '0.00%', '0.22'],
  [45, 'NJ', '8.76%', '81.67%', '9.56%', '0.00%', '0.11'], [46, 'FL', '7.76%', '18.92%', '72.66%', '0.66%', '0.41'],
  [47, 'NC', '7.51%', '22.18%', '69.11%', '1.19%', '0.34'], [48, 'MD', '7.12%', '77.74%', '14.84%', '0.30%', '0.09'],
  [49, 'MS', '5.13%', '52.31%', '42.56%', '0.00%', '0.10'], [50, 'AZ', '4.69%', '11.02%', '83.94%', '0.35%', '0.43'],
  [51, 'PR', '2.13%', '97.87%', '0.00%', '0.00%', '0.02'], [52, 'MI', '0.00%', '0.00%', '14.98%', '85.02%', 'n/a'],
]

const WORKS_CITED = [
  { text: `"About NYTD." Administration for Children and Families, U.S. Department of Health & Human Services, 14 Jan. 2022.`, url: 'https://www.acf.hhs.gov/cb/fact-sheet/about-nytd' },
  { text: `"About AFCARS." Administration for Children and Families, U.S. Department of Health & Human Services, 14 Jan. 2022.`, url: 'https://www.acf.hhs.gov/cb/fact-sheet/about-afcars' },
  { text: `Breiman, Leo. "Random Forests." Machine Learning, vol. 45, no. 1, 2001, pp. 5-32.`, url: 'https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf' },
  { text: `Chouldechova, Alexandra et al. "A case study of algorithm-assisted decision making in child maltreatment hotline screening decisions." FAT (2018).`, url: null },
  { text: `Dworsky, Amy and Mark E. Courtney. "Homelessness and the Transition from Foster Care to Adulthood Among 19-Year-Old Former Foster Youth." Child Welfare, vol. 88, no. 4, 2009, pp. 23-56.`, url: null },
  { text: `Fan, Shuzhan. "Understanding Mathematics Behind Support Vector Machines." Shuzhanfan.github.io, 17 May 2018.`, url: 'https://shuzhanfan.github.io/2018/05/understanding-mathematics-behind-support-vector-machines/' },
  { text: `Kelly, Peggy. "Risk and protective factors contributing to homelessness among foster care youth: An analysis of the National Youth in Transition Database." Children and Youth Services Review, vol. 108, 2020, article 104589.`, url: 'https://doi.org/10.1016/j.childyouth.2019.104589' },
  { text: `Microsoft. "SMOTE - Azure Machine Learning | Microsoft Docs." Microsoft Docs, 2021.`, url: 'https://learn.microsoft.com/en-us/azure/machine-learning/component-reference/smote?view=azureml-api-2' },
  { text: `National Data Archive on Child Abuse and Neglect. "NYTD Outcomes Codebook." 2017.`, url: 'https://www.ndacan.acf.hhs.gov/datasets/pdfs_user_guides/nytd-outcomes-codebook.pdf' },
  { text: `"NYTD Reporting Systems." Administration for Children and Families, U.S. Department of Health & Human Services, 14 Jan. 2022.`, url: 'https://www.acf.hhs.gov/cb/research-data-technology/reporting-systems/nytd' },
  { text: `Osgood DW, Foster EM, Courtney ME. "Vulnerable populations and the transition to adulthood." The Future of Children. 2010;20(1):209–229.`, url: 'https://doi.org/10.1353/foc.0.0047' },
  { text: `Pager D. "The Mark of a Criminal Record." American Journal of Sociology. 2003;108(5):937–975.`, url: 'https://doi.org/10.1086/374403' },
  { text: `Park, K., Courtney, M.E. "Mitigating Risks of Incarceration Among Transition-Age Foster Youth: Considering Domains of Social Bonds." Child Adolesc Soc Work J (2022).`, url: 'https://doi.org/10.1007/s10560-022-00891-z' },
  { text: `Ryan JP, Herz D, Hernandez PM, Marshall JM. "Maltreatment and delinquency: Investigating child welfare bias in juvenile justice processing." Children and Youth Services Review. 2007;29(8):1035–1050.`, url: 'https://doi.org/10.1016/j.childyouth.2007.04.002' },
  { text: `Yang J, McCuish EC, Corrado RR. "Foster care beyond placement: Offending outcomes in emerging adulthood." Journal of Criminal Justice. 2017;53:46–54.`, url: null },
]

function SeniorThesis() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Senior Thesis"
        subtitle="Denied Opportunity? An analysis of the risk and protective factors that predict incarceration among foster care youth — bivariate screening, five classifiers, and a look at what actually moves the needle."
        tone="mint"
        radius="top"
        titleStyle={{ fontSize: 'clamp(30px, 4.5vw, 52px)' }}
        subtitleStyle={{ fontSize: 'clamp(19px, 2.4vw, 24px)', lineHeight: 1.55, maxWidth: 820 }}
      >
        <p className={styles.byline}>Zoe Hickey, University of Southern California 2023</p>
        <div className={styles.linkRow}>
          <a className="pill" href={PDF_URL} target="_blank" rel="noreferrer">
            Download full PDF
          </a>
          <a className="pill pill--outline" href="https://www.acf.hhs.gov/cb/fact-sheet/about-afcars" target="_blank" rel="noreferrer">
            AFCARS data source
          </a>
          <a className="pill pill--outline" href="https://www.acf.hhs.gov/cb/research-data-technology/reporting-systems/nytd" target="_blank" rel="noreferrer">
            NYTD data source
          </a>
        </div>
      </PageHero>

      <section className="band band--bottom band--cream">
        <div className="container">
          <article className={styles.article}>
            <div className={styles.abstractBox}>
              <span className={styles.abstractLabel}>Abstract</span>
              <p className={styles.abstractText}>
                This research paper aims to identify the top risk and protective factors contributing to
                incarceration of foster youth. This research used the AFCARS and NYTD outcomes file from the
                National Children&rsquo;s Bureau. Bivariate regression as well as correlation analysis was
                performed to select variables for the models. The models used were: baseline logistic
                regression, logistic regression with a class balanced dataset, logistic regression with a
                class balanced dataset removing states, support vector machine and random forest. The most
                accurate model was the random forest with an accuracy of 92.5%. The biggest risk factors
                across models were found to be: having 11 or more placements, child behavioral problems as
                reason for removal, substance abuse referral and current placement in an institution or
                group home. The biggest protective factors were found to be: being female, current placement
                in a pre-adoptive home or with a relative, and having less than 2 placements. While causality
                may not be inferred, there is a strong relationship between these factors and incarceration
                for which reason risk factors or lack of protective factors may be used to raise a red flag
                in the system if the system indicating extra attention may be needed.
              </p>
            </div>

            {/* I. INTRODUCTION */}
            <h2 className={`display ${styles.h2}`}>I. Introduction</h2>
            <p className={styles.paragraph}>
              According to the Children&rsquo;s Bureau, there currently are over 407,000 children in the
              foster care system in the United States. While length of stay in the system varies one thing is
              certain, the uncertainty and lack of stability these kids face. Constant moving in placements
              prevents these individuals from succeeding in an academic environment as well as building
              meaningful relationships and bonds. The mix of both translates to foster care youth aging out of
              the system with very limited skills and support to navigate the transition (Osgood, 2010). In
              fact, a study localized in Chicago found that 14% of individuals face homelessness within the
              first six months of exiting the foster care system (Dworsky and Courtney, 2009). The lack of
              support and guidance many of these individuals receive during their time in the foster care
              system poses a great barrier to self-sufficiency as well as positive outcomes in the future.
            </p>
            <p className={styles.paragraph}>
              Research has shown that foster care youth are more likely to face a host of negative outcomes
              such as incarceration. Once a kid has entered foster care, they are at a disadvantage in terms
              of the juvenile justice processing system as foster care status on its own can trigger a
              negative bias thus legal system involvement (Yang 2017.). Prior studies on legal involvement of
              young people in foster care identified several risk factors. The risk factors primarily include
              demographic factors, such as being male and a person of color. The effects of this risk factor
              are large, as youth of color comprise the majority of the foster care system at a national level
              (Ryan, 2007). The National Youth Transition Database shows that over one third of foster youth
              surveyed had already been incarcerated by the age of 17. Defining incarceration as being
              confined in a jail, prison, correctional facility, or juvenile or community detention facility
              in connection with allegedly committing a crime (misdemeanor or felony) (National Data Archive
              on Child Abuse and Neglect).
            </p>
            <p className={styles.paragraph}>
              Being involved in the legal system at a young age has various adverse effects on various future
              opportunities. Having a criminal record greatly decreases the odds of items ranging from
              receiving college financial aid to receiving public housing benefits (Pager, 2003). A kid coming
              from a background where they were removed from their home already would likely have a
              disadvantage in these areas, but now simply because they have been removed from their home they
              face an increased negative bias in the juvenile justice system, which prompts legal involvements
              early in life, thus reducing opportunities further; not to mention how factors other than the
              legal system such as lack of stability contribute to this. For this reason, I would like to
              explore the risk and protective factors that increase the likelihood of incarceration once a
              kid has already entered the system. By having a better understanding of these factors it is
              possible to better shape policy or allocate resources to prevent this outcome.
            </p>

            {/* II. LITERATURE REVIEW */}
            <h2 className={`display ${styles.h2}`}>II. Literature Review</h2>

            <h3 className={styles.h3}>II.A. Foster Youth and Incarceration in California</h3>
            <p className={styles.paragraph}>
              The Child Adolescent Social Work Journal published a study titled Mitigating Risks of
              Incarceration Among Transition-Age Foster Youth: Considering Domains of Social Bonds (Park and
              Courtney, 2022). This study uses the CalYOUTH study survey to assess how different domains of
              social bonds may act as protective factors in predicting risk for later incarceration. This
              study focuses on 17 year olds transitioning to adulthood in the California foster care system.
              The underlying survey was collected in three waves, the first when individuals were 17, the
              second at 19, and the third at 21. The study examined the relationship between bonds assessed in
              wave one and the incarceration status of the same individuals in wave three.
            </p>
            <p className={styles.paragraph}>
              The study classifies bonds into two main categories, interpersonal bonds and institutional
              bonds. Interpersonal bonds refer to connections with family, caregivers and professionals. For
              each of these relationships, the questionnaire asked subjects to rate their closeness on a 1-5.
              Then these variables were made binary as by grouping 1-2 in 1-Close and 3-5 in 0-Not Close. In
              contrast, institutional bonds were captured via school enrollment and employment, the only
              options for these questions were 1-Yes and 0-No. Other predictive variables included in the
              study include demographic characteristics, maltreatment history prior to care, behavioral
              health problems, placement types, placement instability and time in extended foster care (wave
              two and three). These variables together with social bonds were used to build a logistic
              regression to estimate the risk of incarceration at the age of 17-21.
            </p>
            <p className={styles.paragraph}>
              After bivariate analysis, only 3 bonds were found to be statistically significant, bonds to
              substitute caregiver, education and employment. These three variables together with other
              predictive variables were included in the logistic regression. Social bonds were not a
              significant predictor of incarceration later in life with the exception of bond with substitute
              caregivers which was negatively associated with incarceration odds with marginal statistical
              significance. For institutional bonds, school enrollment at 17 was associated with a 53%
              decrease in estimated odds of later incarceration and being employed at 12 was associated with a
              57% decrease in estimated odds of later incarceration. Besides bonds, other relevant predictors
              include race, black individuals were 2.3 times as likely to be incarcerated than white
              individuals. In addition, males were found to be 4.3 times more likely to be incarcerated than
              females. Other factors that increased odds of later incarceration include symptoms consistent
              with drug/alcohol abuse, age of entry into care, history of sexual abuse and total number of
              placements.
            </p>

            <h3 className={styles.h3}>II.B. Foster Youth and Homelessness Nationally</h3>
            <p className={styles.paragraph}>
              The Children Youth and Services Review published a paper titled &ldquo;Risk and protective
              factors contributing to homelessness among foster care youth: An analysis of the National Youth
              in Transition Database&rdquo; (Kelly, 2019). This paper uses the National Youth in Transition
              Database (NYTD) to analyze risk and protective factors that contribute to homelessness among
              transition aged foster care youth. While factors contributing to homelessness for this
              demographic are well researched, protective factors are not; specially at the national level.
              The NYTD includes many files relevant to foster care including the Adoption and Foster Care
              Analysis Reporting System (AFCARS) and their Outcomes survey. The AFCARS is collected yearly at
              the state level and reported while the Outcomes survey is collected every three years in three
              waves. Wave one includes individuals who are 17, wave two follows those individuals when they
              are 19, and wave three does the same at age 21. Wave one was used to establish the baseline and
              possible risk/proactive factors while wave three was used to record the outcome; homelessness
              status.
            </p>
            <p className={styles.paragraph}>
              After conducting logistic regression, the author finds that the strongest protection factor is
              connection to adults; having a connection to an adult decreases the odds of homelessness by
              58.7%. Other predictive factors include education, if the individual has obtained a high school
              level education, their odds of becoming homeless decreased by 28.7%. Individuals enrolled in
              high school had 22% lower odds of becoming homeless. Regarding risk factors, the strongest risk
              factor was having been incarcerated, this increased the odds of becoming homeless by 157.5%.
              Other risk factors include substance abuse problems which increased the odds of homelessness by
              108.6%. In addition, having a runaway history increased odds of homelessness by 63.7%.
              Unexpectedly, this paper found that home removal due to sexual assault or inadequate housing
              actually decreased the risk of homelessness by 20.1% and 30% respectively rather than increasing
              it as expected by the researchers. This discrepancy is attributed to the small sample size of
              youth who had been removed due to sexual assault/inadequate housing who had experienced
              homelessness.
            </p>

            {/* III. RESEARCH SCOPE */}
            <h2 className={`display ${styles.h2}`}>III. Research Scope</h2>
            <p className={styles.paragraph}>
              I am hoping to explore which set of attributes are related to an increased risk of incarceration
              and which set of attributes are related to reduced risk of incarceration. By gaining an
              understanding of these factors, the foster care system could guide resource allocation. While
              resource allocation at the system level may be hard to justify as this is an exploratory paper
              thus causality will not be explored, resource allocation at the individual level could be
              guided. For instance, if an individual has X set of attributes which are a risk factor, they may
              need extra attention from their case worker. This process could be automated by the use of a
              risk prediction model which simply flags individuals at risk given the information they submit
              to the AFCARS on a yearly basis.
            </p>
            <p className={styles.paragraph}>
              Based on the literature research, I am expecting to find that homelessness, lack of enrollment
              in school and being a male of color to be the biggest risk factors. Similarly, I am expecting
              for connection to adults, enrollment in school and placement with a relative to be the biggest
              protective factors. As far as model performance, I am expecting the random forest to outperform
              the logistic regression as this has been documented in risk prediction models for child welfare
              (Chouldechova, 2018).
            </p>

            {/* IV. DATA */}
            <h2 className={`display ${styles.h2}`}>IV. Data</h2>

            <h3 className={styles.h3}>IV.A. About the Data Set</h3>
            <p className={styles.paragraph}>
              This paper uses data from the National Children&rsquo;s Bureau. Firstly, we use the outcomes
              section of the National Youth Transition Database (NYTD). The NYTD outcomes collects
              demographic and &ldquo;outcome&rdquo; data from foster youth who have or are near to aging out
              of the system. The survey is conducted in three waves. The first wave tracks foster youth at 17.
              The second wave follows this same group at age 19 and the third wave surveys the same group at
              21 (&ldquo;NYTD Reporting Systems.&rdquo;). States will survey youth regarding six outcomes:
              financial self-sufficiency, experience with homelessness, educational attainment, positive
              connections with adults, high-risk behavior, and access to health insurance. This database was
              born out of the John H. Chafee Foster Care Independence Program which allocates state
              governments flexible funding to provide programs that assist foster care youth in the transition
              to adulthood. In exchange, states must collect information on usage of various service usage as
              well as outcomes for foster youth. The data must be 90% error free which means that it must be
              free of missing information and invalid information (&ldquo;About NYTD.&rdquo;).
            </p>
            <p className={styles.paragraph}>
              The second datasource from the National Children&rsquo;s Bureau is the Adoption and Foster Care
              Analysis and Reporting System (AFCARS). The Department of Health and Human Services (HHS),
              Administration for Children and Families (ACF), Children&rsquo;s Bureau (CB) is responsible for
              the implementation and management of AFCARS. All State and Tribal title IV-E agencies are
              required to report AFCARS case-level information every year (&ldquo;About AFCARS.&rdquo;). This
              case level information includes demographics, reason for entrance into the system, number of
              placements, current placement status, medical disabilities, adoption history and more.
            </p>
            <div className={styles.calloutBox}>
              <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                <strong>Data source:</strong> both datasets are published by the Children&rsquo;s Bureau,
                Administration for Children and Families (U.S. Department of Health &amp; Human Services).
                See the{' '}
                <a href="https://www.acf.hhs.gov/cb/fact-sheet/about-afcars" target="_blank" rel="noreferrer">
                  AFCARS fact sheet
                </a>
                , the{' '}
                <a href="https://www.acf.hhs.gov/cb/research-data-technology/reporting-systems/nytd" target="_blank" rel="noreferrer">
                  NYTD reporting system
                </a>
                , and the{' '}
                <a href="https://www.ndacan.acf.hhs.gov/datasets/pdfs_user_guides/nytd-outcomes-codebook.pdf" target="_blank" rel="noreferrer">
                  NYTD Outcomes Codebook
                </a>{' '}
                (National Data Archive on Child Abuse and Neglect) for full variable definitions.
              </p>
            </div>

            <h3 className={styles.h3}>IV.B. Data Selection and Formatting</h3>
            <p className={styles.paragraph}>
              I decided to limit my study to individuals included in the most recent wave one of the NYTD
              outcomes file. This data was collected in 2017 and all individuals surveyed were 17 at the time.
              For consistency, I selected the AFCARS file from 2017. Since both databases contain an encrypted
              unique child ID, this common ID allows for both datasets to be merged. The data set now contains
              information for all individuals present in both datasets. After merging both datasets, I decided
              to limit my study to individuals included in wave one of the NYTD outcomes file because wave one
              has significantly more entries than two and three. Wave one has 22,609 entries; the subsequent
              waves have under 7,000 entries.
            </p>
            <p className={styles.paragraph}>
              To assess potential missingness due to &ldquo;declined&rdquo; and &ldquo;blank&rdquo; answers on
              several columns, I calculated a &ldquo;missingness score&rdquo;. For each individual, a
              missingness score corresponds to the number of blank or declined answers each individual
              answered per survey. For our current dataset, the mean number of questions with blank answers
              per person is 1.809 while the mean of questions with declined answers per person is 0.134. That
              being said, as incarceration is our dependent variable, it does not make much sense to keep
              blank and declined answers for incarceration in our data set as it does not provide much
              information regarding our research question. At this point, the distribution of responses in
              incarceration may be seen in Figure 1. After dropping entries that have blank or declined
              answers to incarceration our dataset reduces from 22,609 entries to 15,033 entries. That being
              said, the mean number of questions with blank answers per person reduces from 1.809 to 0.004
              while the mean of questions with declined answers per person reduces from 0.134 to 0.059. This
              is a good sign as it indicates that we have reduced missingness in the rest of our dataset by
              dropping declined and blank responses in our dependent variable. This sharp decrease in
              missingness scores also indicates that it was the same individuals who declined and left
              incarceration blank as other variables. Since those who answered declined and blank for
              incarceration were dropped, there will be an analysis of the profile of these individuals in the
              results section.
            </p>

            <Figure src={fig1} alt="Bar chart of incarceration survey answers: blank 5676, no 9512, yes 4044, declined 700" caption="Figure 1. Distribution of Incarceration Answers" wide={false} />

            <p className={styles.paragraph}>The current values under consideration for the analysis are as follows:</p>
            <Figure src={fig2} alt="Table of variables under consideration, grouped by Demographics, Outcomes, Medical Conditions, Placement Information, and Reason for Removal" caption="Figure 2. Variables Under Consideration (* need to be modified)" />

            <p className={styles.paragraph}>
              As we plan to perform a logistic regression, we must one hot encode all of our independent
              variables. This process includes making all of our variables binary. To avoid collinearity, we
              must set a baseline variable. In this case, for each variable that has a &ldquo;yes&rdquo; and
              &ldquo;no&rdquo; answer, the baseline becomes the &ldquo;no&rdquo; answer. In this case, the one
              hot encoded version of some non-binary numeric values becomes quite extensive (i.e. 93 NumPlep
              variables, 18 variables for total removals). To regroup both of these variables, it is necessary
              to first understand their underlying distribution.
            </p>

            <Figure src={fig3} alt="Histogram of number of placements, heavily right-skewed, peaking near 0 and decaying by 30" caption="Figure 3. Distribution of Number of Placements" />

            <p className={styles.paragraph}>
              As seen in Fig 3, the number of placements follows an exponential decay distribution,
              approaching 0 around 25. For this reason, we decided to group NumPlemp in the following way for
              each entry:
            </p>
            <ul className={styles.list}>
              <li>If (NumPlep = 1) is true, then the new variable &ldquo;numpla_1&rdquo; is true thus equal to 1</li>
              <li>If (NumPlep = 2) is true, then the new variable &ldquo;numpla_2&rdquo; is true thus equal to 1</li>
              <li>If (NumPlep = 3) is true, then new variable &ldquo;numpla_3&rdquo; is true thus equal to 1</li>
              <li>If (NumPlep = 4) is true, then the new variable &ldquo;numpla_4&rdquo; is true thus equal to 1</li>
              <li>If (NumPlep = 5) is true, then the new variable &ldquo;numpla_5&rdquo; is true thus equal to 1</li>
              <li>If (6≤ NumPlep≤ 10) is true, then the new variable &ldquo;numpla_6_10&rdquo; is true thus equal to 1</li>
              <li>If (11≤ NumPlep) is true, then the new variable &ldquo;numpla_11more&rdquo; is true thus equal to 1</li>
              <li>* If a &ldquo;numpla_&rdquo; variable does not equal 1, it equals 0 to indicate the condition is false</li>
            </ul>

            <Figure src={fig4} alt="Bar chart of total number of removals from home, peaking at 1 removal (13017 cases) and decaying sharply" caption="Figure 4. Distribution of Total Removals" />

            <p className={styles.paragraph}>
              Much like the number of placements, the distribution of total removals follows an exponential
              decay pattern. Since 1 is greater than the sum of all other placement columns, the total
              removals variable is regrouped as follows for each entry:
            </p>
            <ul className={styles.list}>
              <li>If (TotalRem = 1) is true, then the new variable &ldquo;removal_1&rdquo; is true thus equal to 1</li>
              <li>If (2 ≤ TotalRem) is true, then the new variable &ldquo;removal_2more&rdquo; is true thus equal to 1</li>
              <li>* If a &ldquo;removal_&rdquo; variable does not equal 1, it equals 0 to indicate the condition is false</li>
            </ul>
            <p className={styles.paragraph}>
              Since TotalRem was condensed into two variables, these will have perfect collinearity, therefore
              &ldquo;removal_1&rdquo; will be dropped and become the baseline.
            </p>

            <h3 className={styles.h3}>IV.C. Selecting Variables for the Logistic Regression Model</h3>
            <p className={styles.paragraph}>
              After conducting bivariate logit regression for all variables (excluding state) on incarceration,
              we note that each of the listed variables has a p &lt; 0.1 at significance level of α = 5% with
              the exception of amiakn_yes [p = 0.213 at α = 5%], curplset_missing [p = 0.149 at α = 5%], and
              childis_yes [p = 0.333 at α = 5%]. Childis_yes will be dropped for the final regression but
              amiakn and curplset_missing will not be dropped as they are one of many &ldquo;dummy
              variables&rdquo; for race and current placement respectively. The full table of results may be
              found in Appendix A.
            </p>

            <Figure src={fig5} alt="Correlation matrix heatmap of all remaining independent variables" caption="Figure 5. Correlation Matrix for All Remaining Variables" />

            <p className={styles.paragraph}>
              As there are many variables not displayed in this heat map, we iterated through the matrix to
              find the most correlated pairs, the results are as follows:
            </p>
            <ul className={styles.list}>
              <li>(clindis_yes, emotdist_yes): 0.809</li>
              <li>(blkafram_x_yes, white_x_yes): -0.7163</li>
              <li>(clindis_yes, othermed_yes): 0.471</li>
            </ul>
            <p className={styles.paragraph}>
              While white_x_yes and blkafram_x_yes are highly correlated, since neither corresponds to a
              perfect or near perfect complement of the other, we will still include both variables in the
              logistic regression. This high correlation makes sense as they represent the two largest groups
              racially represented in our dataset. On the other hand, clindis_yes is correlated with both
              emotdist_yes and othermed_yes. Besides being correlated with two variables, it was also not a
              statistically significant regressor in the bivariate logistic regression, both of these confirm
              that clindis_yes should not be included in the logistic regression.
            </p>
            <p className={styles.paragraph}>
              Similarly, we may take a deeper look at the variables that are most highly correlated with a
              positive response to incarceration (incarc_yes).
            </p>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr><th>Var</th><th>Corr</th><th>Var</th><th>Corr</th></tr>
                </thead>
                <tbody>
                  {FIG6_LEFT.map((row, i) => (
                    <tr key={row[0] + i}>
                      <td>{row[0]}</td><td>{row[1]}</td>
                      <td>{FIG6_RIGHT[i][0]}</td><td>{FIG6_RIGHT[i][1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.figureCaption} style={{ marginTop: -12, marginBottom: 24 }}>
              Figure 6. Correlation Between Independent Variables and Incarceration
            </p>

            <p className={styles.paragraph}>
              We may see that the most correlated risk factors are substance abuse (subabuse_yes), child
              behavior as reason for removal (chbehprb_Yes), and institution as current placement
              (curplset_Institution). The most correlated protective factors are female (sex_x_female),
              neglect as reason for removal (neglect_Yes) and a relative&rsquo;s home as current placement
              (curplset_Foster home, relative). It is important to remember that correlation does not imply
              causation, all we can interpret from this table is that in the case of risk factors, individuals
              who answer yes to these tend to also answer yes to having been incarcerated; we can make no
              assumptions about causation in either direction.
            </p>
            <p className={styles.paragraph}>
              In terms of state variables, after computing a correlation matrix for all variables including
              states, we find that states are greatly uncorrelated with other variables. The only correlations
              involving states that have a correlation with an absolute value over 0.25 are as follows:
            </p>
            <ul className={styles.list}>
              <li>(st_x_HI, hawaiipi_x_yes): 0.348</li>
              <li>(st_x_TX, childis_Yes): 0.265</li>
            </ul>
            <p className={styles.paragraph}>
              The state of Hawaii and the race of hawaiian or pacific islander as expected to be correlated
              given that Hawaii has the highest proportion of individuals who identify as hawaiian or pacific
              islander. The Texas and child disability correlation coefficient may provide some insight into
              different removal thresholds or characteristics per state. As far as states and incarceration,
              only one state had a correlation coefficient with an absolute value above 0.1 with
              &ldquo;incarc_yes&rdquo;. The highest correlation coefficients between a state and
              &ldquo;incarc_yes&rdquo; are as follows:
            </p>
            <ul className={styles.list}>
              <li>Colorado: 0.107</li>
              <li>Ohio: 0.072</li>
              <li>Tennessee: 0.067</li>
              <li>Maryland: -0.065</li>
              <li>Utah: 0.055</li>
            </ul>

            <Figure src={fig7} alt="Choropleth map of the United States showing proportion of sample per state answering yes to incarceration" caption='Figure 7. Proportion of Sample of Each State Answering "Yes" to Incarceration' />

            <p className={styles.paragraph}>
              After analyzing the incarceration response distribution per state, we may see that Colorado has
              the highest percentage of people who answered yes (56.79%). Ohio places 23rd at 22.43%,
              Tennessee 19th at 26.53%, Maryland 47th at 7.12% and Utah 3rd at (41.52%). It is expected to see
              Colorado at the top and Maryland at the bottom given the correlation values; this indicates that
              Colorado may appear as a risk factor while Maryland may appear as a protective factor. This
              would not imply a causal relationship. It is also important to mention that the states that had
              a higher proportion of individuals answering &ldquo;yes&rdquo; to incarceration also had lower
              rates of &ldquo;blank&rdquo; and &ldquo;declined&rdquo; responses. As we have dropped
              &ldquo;blank&rdquo; and &ldquo;declined&rdquo; responses, we have added an extra bias to our
              state variable for which reason they may not be the most reliable. Missingness with respect to
              incarceration will be discussed in the results section.
            </p>

            {/* V. METHODOLOGY */}
            <h2 className={`display ${styles.h2}`}>V. Methodology</h2>

            <h3 className={styles.h3}>V.A. Logistic Regression</h3>
            <h4 className={styles.h4}>V.A.i. Baseline Logistic Regression</h4>
            <p className={styles.paragraph}>
              First, we run a logistic regression with all the variables in figure 6 with the exception of
              childis_yes. Our regression has the form:
            </p>
            <p className={styles.paragraph} style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>
              log(incarceration) = α + β(state) + β(female) + β(race) + β(outcomes) + β(medical conditions) +
              β(removal hist) + β(placement) + β(reason for removal)
            </p>
            <p className={styles.paragraph}>Where each coefficient vector spans:</p>
            <ul className={styles.list}>
              <li>state — a (51×1) vector with the coefficients for all the state dummy variables</li>
              <li>female — the coefficient for female</li>
              <li>race — a (5×1) vector with the coefficients for all the race dummy variables (amiakn_yes, asian_yes, blkafram_yes, hawaiipi_yes and white_yes)</li>
              <li>outcomes — a (4×1) vector with the coefficients for all the outcome dummy variables (currenroll_yes, cnctadult_yes, homeless_yes, subabuse_yes)</li>
              <li>medical conditions — a (5×1) vector with the coefficients for all the medical condition dummy variables (mr_yes, vishear_yes, phydis_yes, emotdist_yes, othermed_yes)</li>
              <li>removal hist — a (10×1) vector with all the coefficients for the removal history dummy variables (numpla_1, numpla_2, numpla_3, numpla_4, numpla_5, numpla_6_10, numpla_11more, removal_2more, manrem_courtordered, placeout_yes)</li>
              <li>placement — an (8×1) vector the coefficients for current placement setting dummy variables (curplset_pre-adoptive home, curplset_foster home (relative), curplset_fosterhome (non-relative), curplset_group home, curplset_institution, curplset_supervised independent living, curplset_runaway, curplset_trial visit)</li>
              <li>reason for removal — a (14×1) vector of all the coefficients for the removal reason dummy variables (phyabuse_yes, sexabuse_yes, neglect_yes, aaparent_yes, daparent_yes, aachild_yes, dachild_yes, childis_yes, chbehprb_yes, prtsdied_yes, prtsjail_yes, abandoment_yes, relinquish_yes, housing_yes)</li>
            </ul>
            <p className={styles.paragraph}>
              Besides obtaining the coefficients from our standard logistic regression, we will also run a
              K-fold validation to further assess the accuracy of our estimates. In this case, we will set our
              K-value to 5. This means that our data will be split into a training and a testing set 5 times,
              each time, the model will be fitted (we will obtain coefficients), and each time, the model will
              be tested with those coefficients; thus yielding us 5 different accuracy scores allowing us to
              calculate the average accuracy score and reduce the likelihood of a false strong correlation or
              R² due to overfitting.
            </p>

            <h4 className={styles.h4}>V.A.ii. Logistic Regression with SMOTE-ENN Data Set</h4>
            <p className={styles.paragraph}>
              As we have a large class imbalance (e.g. 62.7% of the sample is white), it might cause for our
              regression to overfit to the majority classes, or for one small correlation due to small sample
              size to be blown out of proportion. For instance, only 0.74% of our sample identifies as
              hawaiian or pacific islander, this means that if 50 of the 121 individuals who are hawaiian
              happen to have had a history of incarceration (not representative of the overall population,
              just this sample), the model will overestimate the relationship between this race and
              incarceration when the relationship might not be there in the real world, it could just be a
              result of bias in the sample. This is just an example of how a relationship between an
              independent variable and the target may be overestimated due to small sample size; this could
              happen for any variable that is underrepresented in the sample. For this reason, we may choose
              to resample.
            </p>
            <p className={styles.paragraph}>
              Synthetic Minority Oversampling Technique (SMOTE) is a statistical technique for increasing the
              number of cases in your dataset in a balanced way (Microsoft.). In general, SMOTE does not
              affect the instances of majority cases, only minorities. The algorithm generates new instances
              of minority samples by combining features of the minority feature and its nearest neighbors. We
              used a modification of SMOTE called SMOTE-ENN (Smote Edited Nearest Neighbors), this
              modification allows for the oversampling in the regular SMOTE as well as an additional
              undersampling of the majority class to minimize the additional new instances generated.
            </p>
            <p className={styles.paragraph}>
              The logistic regression will be the same as in the previous section (V.A.I. Baseline Logistic
              Regression). The goal of this is to see how coefficients and accuracy change with a more
              balanced dataset. Though it is important to mention that by generating synthetic values, no
              matter how well interpolated, we may be introducing error. That being said, a biased data set
              will also produce error in a logistic regression.
            </p>

            <h4 className={styles.h4}>V.A.iii. Smote Logistic Regression Removing States</h4>
            <p className={styles.paragraph}>
              As discussed in the data section, levels of &ldquo;blank&rdquo; and &ldquo;declined&rdquo;
              responses vary significantly by state. Some states such as New Mexico and Vermont have 0% of
              individuals answering &ldquo;blank&rdquo; or &ldquo;declined&rdquo; to the incarceration
              question. In contrast, other states such as Michigan have 100% of individuals answering
              &ldquo;blank&rdquo; or &ldquo;declined&rdquo; to the incarceration question. As we dropped
              individuals with who answered &ldquo;blank&rdquo; or &ldquo;declined&rdquo; to our target
              variable (given that it wasn&rsquo;t helping answer our research question), we introduced a
              fair amount of potential bias, penalizing states with low &ldquo;blank&rdquo; or
              &ldquo;declined&rdquo; answer rates. By this logic, states with high missingness could be
              artificially placed as strong protective factors, or misrepresented as stronger than they are.
              As state seems to be a noise variable, we wanted to test how our results would change if the
              question was not involved in the regression. This logistic regression without states will
              follow the same function as the baseline and smote logistic regressions. The regression will be
              ran on both the baseline and the smote modified dataset to better assess the nature of the
              potential error introduced by the noise in the state variable.
            </p>

            <h3 className={styles.h3}>V.B. Support Vector Machine</h3>
            <p className={styles.paragraph}>
              Next, we will use a Linear Support Vector Machine (Linear SVM) to assess the relationship
              between various risk/protective factors and incarceration. One of the main advantages of SVMs is
              that they perform well when there&rsquo;s many input variables as is the case in this question.
              In addition, SVMs are very effective in high dimensional spaces which is a great advantage for
              this case as there are many variables. An SVM constructs a set of hyper-planes in high or
              infinite dimensional space, the goal of an SVM is to find a hyperplane that can separate data
              accurately (Fan, 2018). In this case, the data would ideally be separated by a hyperplane such
              that incarc_yes=1 for all points on one side of the hyperplane and incarc_yes=0 for all points on
              the other side of the hyperplane.
            </p>
            <p className={styles.paragraph}>
              As Linear SVMs select a hyperplane, we may then get coefficients that represent the importance
              of certain variables relative to the others, as a greater magnitude can be interpreted as
              affecting the hyperplane positioning more. The relative importance of various risk and
              protective factors will be compared to that implied by the logistic regression. For this model,
              we will also use K-fold, selecting 5 different training and testing sets thus concluding 5
              different hyperplanes, then taking the average. Performing K-fold reduces the risk of an
              artificially high accuracy due to overfitting.
            </p>
            <p className={styles.paragraph}>
              Given the great class imbalance in the original data set, the likelihood of error due to bias or
              overfitting is likely larger than the error introduced by resampling, Therefore, this model will
              be explored with the SMOTE data set. This will hold for other machine learning methods in this
              project such as the Random Forest Classifier.
            </p>

            <h3 className={styles.h3}>V.C. Random Forest Classifier</h3>
            <p className={styles.paragraph}>
              A Random Forest Classifier uses various decision trees to reach an output. In a decision tree,
              the leaf node of the path chosen will dictate the prediction. The training data going into each
              decision tree is random, and results may vary (Breiman). A random forest takes the majority vote
              of many decision trees to make a prediction; for this reason, it is best to have many trees
              feeding into the decision of the random forest. In a Random Forest Classifier out output
              coefficients are unitless thus difficult to compare to the coefficients from the logistic
              regression. That being said, much like in the case of SVMs, we can still perform feature
              importance analysis to assess the importance of features (independent variables, predictors)
              relative to others.
            </p>

            {/* VI. RESULTS AND DISCUSSION */}
            <h2 className={`display ${styles.h2}`}>VI. Results and Discussion</h2>

            <h3 className={styles.h3}>VI.A. Logistic Regression</h3>
            <h4 className={styles.h4}>VI.A.i. Baseline Logistic Regression</h4>
            <p className={styles.paragraph}>
              After conducting our baseline logistic regression, we see that the strongest risk factors for
              youth incarceration include substance abuse, child behavioral problems as the reason for
              removal, current placement setting in an institution and having had 11 or more placements. As
              seen in Figure 8, an individual who has had a substance abuse referral before 17 is over 2.5
              times more likely to have been incarcerated by 17 than someone who has not received the same
              referral. While this does not imply causality, it may be useful information to prevent
              incarceration in the case an individual has received a referral but has not been incarcerated.
              Information about specific dates for these events would be needed in the form to possibly assess
              causality. Similarly, an individual who entered the system due to child behavioral problems is
              more than twice as likely to be incarcerated by 17 than an individual who entered the system for
              any other reason. An individual who has had 11 or more placements by 17 is 1.7 times more likely
              to have been incarcerated by 17. In this case, the question becomes, do these individuals get
              moved because of behaviors that lead to incarceration or does the lack of consistency due to
              moving lead to more adverse behavior which leads to incarceration? Both could be true, a case
              study research could provide more understanding into the nuance of the interaction of these
              factors.
            </p>
            <RiskTable risk={FIG8_RISK} protective={FIG8_PROTECTIVE} />
            <p className={styles.figureCaption} style={{ marginTop: -12, marginBottom: 24 }}>
              Figure 8. Top 10 protecting and top 10 risk factors for the baseline logistic regression
            </p>
            <p className={styles.paragraph}>
              Surprisingly, the strongest protective factor was sexual abuse as reason for removal. Upon
              further investigation, this prominent placement may be attributed to a small sample size. Park
              and Courtney found this same relationship in their 2022 paper as mentioned in the literature
              review. The second largest protective factor, as youth residing in New Jersey is 15% less likely
              to be incarcerated. As seen in Appendix C, New Jersey is one of the states with the lowest
              &ldquo;declined&rdquo; and &ldquo;blank&rdquo; response rates, this makes the prominence of the
              state as a protective factor less likely to be due to bias in response rates; though it could be
              a relatively small sample size. We find that women are roughly 44% less likely to be incarcerated
              by the age of 17 than their male counterparts. This could be due to differences in behavior or
              gender bias in the legal system; regardless, it remains that males are at higher risk for
              incarceration.
            </p>
            <Figure src={fig9} alt="Confusion matrix for the baseline logistic regression: true positive 0.33, false negative 0.67, false positive 0.071, true negative 0.93" caption="Figure 9. Baseline Logistic Regression Accuracy Distribution" wide={false} />
            <p className={styles.paragraph}>
              The baseline logistic regression model had an accuracy of 63.7%, this means that our model
              properly classified positive (1: incarceration) and negative (0: no incarceration) cases 63.7%
              of the time. That being said, the distribution of this accuracy is far from even. As seen in
              Figure 9, the baseline logistic regression model only classifies positives properly 33% of the
              time while it classifies negatives properly 93% of the time. This difference may be due to
              overfitting to the negative case as it represents the majority of our sample. A model with this
              bias would lead to a large amount of under-reporting of foster youth in risk, as 67% of
              individuals that had been incarcerated were predicted to be non-incarcerated.
            </p>

            <h4 className={styles.h4}>VI.A.ii. Logistic Regression with SMOTE-ENN Data Set</h4>
            <p className={styles.paragraph}>
              After conducting logistic regression on our smote-enn dataset, we may see that the top 4 risk
              factors remain the same, that being said, the magnitude of the coefficients increased. An
              individual who has received a substance abuse referral went from being 2.5 times more likely to
              have been incarcerated by 17 to being 3.2 times more likely to be incarcerated by the age of 17.
              Similarly, an individual who was removed due to behavioral problems went from being 2 times as
              likely to be incarcerated by 17 to being 2.7 times more likely to be incarcerated by 17. This
              pattern implies that the baseline logistic regression may have underestimated the connection
              between the top risk factors and incarceration due to their relatively low representation in
              the original data set.
            </p>
            <RiskTable risk={FIG10_RISK} protective={FIG10_PROTECTIVE} />
            <p className={styles.figureCaption} style={{ marginTop: -12, marginBottom: 24 }}>
              Figure 10. Top 10 protecting and top 10 risk factors for the smote-enn logistic regression
            </p>
            <p className={styles.paragraph}>
              Regarding protective factors, we may see that now New Jersey is no longer in the top 10 list but
              now Massachusetts is in the top protective factor. As Massachusetts is the 8th state with the
              most missingness in responses, this seemingly strong relationship between no incarceration and
              the state is likely attributed to noise. In line with literature, a foster home place with a
              relative is one of the top protective factors (3rd) as individuals in this placement setting are
              30% less likely to be incarcerated by 17 than those in other placement settings. Having 1
              placement makes the appearance of the top 10 now, this is in line with literature and suggests
              that its lack of appearance prior may be due to a relatively low prevalence in the data set.
              Individuals with 1 placement are 30% less likely to be incarcerated and those with 2 placements
              are 27% less likely to be incarcerated. Much like the discussion of 11 or more placements as a
              risk factor, the causality of the relationship between number of placements is hard to attribute
              as a low number of placements could lead to stability thus lower odds of incarceration or
              individuals with less risky behavior may be moved less as their placement will have an easier
              time hosting them. The latter is an option as the policy in many placing agencies is to protect
              the home so they can keep fostering according to Franco Vega, the CEO of The Right Way
              Foundation. Again, being female remains the biggest protective factor. Using the smote-enn
              dataset, females are now 63% less likely to be incarcerated (as compared to the 44% suggested by
              the baseline regression).
            </p>
            <Figure src={fig11} alt="Confusion matrix for the smote-enn logistic regression: true positive 0.92, false negative 0.082, false positive 0.41, true negative 0.59" caption="Figure 11. Smote Logistic Regression Accuracy Distribution" wide={false} />
            <p className={styles.paragraph}>
              By using the smote-enn data set, the accuracy of the logistic regression increased from 63.7% to
              81.8%. We see an increase in the true positive rate from 33% to 92%, this means that 92% of the
              time the logistic regression saw an individual who would be incarcerated, it properly predicted
              the individual would be incarcerated. In line with this, we see a sharp decrease in the false
              negative rate from 67% to 8.2%. This rate represents the youth who was actually incarcerated but
              the model predicted they would not. If this model were used to allocate resources, a false
              negative would mean that an individual needed resources and didn&rsquo;t get them while a false
              positive indicates an individual did not need the extra resources but got them anyway. A balance
              between a low false positive rate and false negative rate is needed as an excessively small
              false negative rate at the cost of an excessively high false positive rate would be extremely
              wasteful (assuming budget constraints) and an excessively small false positive rate at the cost
              of an excessively high false negative rate while economically efficient, would leave lots of
              individuals who may have needed resources unattended.
            </p>

            <h4 className={styles.h4}>VI.A.iii. Smote Logistic Regression Removing States</h4>
            <p className={styles.paragraph}>
              Performing the logistic regression on the smote data set without states yields a similar list of
              risk factors as with states. The top risk factors are substance abuse, 11 or more placements,
              child behavioral issues as reason for removal and current placement in an institution. That
              being said, the magnitude of significance of these factors increases greatly. For instance, an
              individual with a substance abuse referral went from being 3.2 times more likely to be
              incarcerated by 17 to being 11.5 times more likely to be incarcerated by the age of 17. It is
              possible that the state variable, while not interpretable or significant in terms of
              coefficients on its own, may have been accounting for state level variables that are not
              considered in other variables thus was aiding in understanding of the magnitude of the effects
              of other variables.
            </p>
            <RiskTable risk={FIG12_RISK} protective={FIG12_PROTECTIVE} />
            <p className={styles.figureCaption} style={{ marginTop: -12, marginBottom: 24 }}>
              Figure 12. Top 10 protecting and top 10 risk factors for the smote-enn logistic regression (without states)
            </p>
            <p className={styles.paragraph}>
              Regarding protective factors, being female remains a top protective factor. That being said,
              physical disability and placement in a pre-adoptive home enter the top 10 list. Much like in
              risk factors, the magnitude of these effects is greater as females went from being 63% less
              likely to be incarcerated (with states) to being 80% less likely to be incarcerated. In addition,
              for the first time we see race enter the top 10 factors with hawaiian or pacific islander and
              asian as protective factors. As race is not distributed evenly across states, this supports the
              idea that perhaps the state level variables were accounting for state level factors that were
              not present before thus helping us better understand the magnitude of the effects of other
              variables. The magnitude of the exact relationship between incarceration and other variables may
              vary across all the logistic regressions but the factors that are in the top 10 biggest risk and
              protective factors remain quite similar.
            </p>
            <Figure src={fig13} alt="Confusion matrix for the smote-enn logistic regression without states: true positive 0.86, false negative 0.14, false positive 0.18, true negative 0.82" caption="Figure 13. Smote Logistic Regression without States Accuracy Distribution" wide={false} />
            <p className={styles.paragraph}>
              After removing states, the accuracy of the logistic regression increased from 81.8% to 85.7%.
              This means that in 85% of cases the logistic regression properly identified youth that was
              incarcerated by 17 and was not 85.7% of the time. We may see an increase in the balance between
              the false positive to false negative rate as with states, false positive was ~41% while false
              negative was ~8% and without states false positive is ~18% while false negative is ~14%. The
              increased accuracy implies that the state variable, while adding inside regarding the magnitude
              of the relationship between variables and incarceration, may have been adding noise to the
              overall classification. In addition, the increased balance in the false positive and false
              negative rate is preferred if this model were to be used for risk prediction as it better
              balances providing resources to those in need and budgetary constraints.
            </p>

            <h3 className={styles.h3}>VI.B. Support Vector Machine (SVM)</h3>
            <p className={styles.paragraph}>
              Unlike a logistic regression, interpreting the coefficients of an SVM is not possible. That
              being said, these coefficients provide a great insight into the relative importance of each
              factor with respect to the others.
            </p>
            <RiskTable risk={FIG14_RISK} protective={FIG14_PROTECTIVE} valueLabel="coef" />
            <p className={styles.figureCaption} style={{ marginTop: -12, marginBottom: 24 }}>
              Figure 14. Top 10 protecting and top 10 risk factors for the SVM
            </p>
            <p className={styles.paragraph}>
              As seen in Figure 14, 11 or more placements, having a substance abuse referral, child behavioral
              problems as reason for removal and placement in an institution remain the biggest risk factor
              for incarceration by the age of 17. Similarly, gender and current placement in a pre-adoptive
              home remain the biggest protective factors. However, now physical disabilities, parents having
              relinquished rights and placement in supervised interdependent living enter the top 10
              protective factor. As supervised independent living is only available after a certain age, this
              is very unlikely a causal relationship, unless the incarceration is taking place after
              eligibility for supervised independent living though that is timeline information we do not
              have.
            </p>
            <Figure src={fig15} alt="Confusion matrix for the SVM: true positive 0.86, false negative 0.14, false positive 0.18, true negative 0.82" caption="Figure 15. SVM Accuracy Distribution (Smote No State, Accuracy: 85.6%)" wide={false} />
            <p className={styles.paragraph}>
              The accuracy decreases from 85.7% to 85.6% when moving from logistic regression to an SVM with
              the same underlying dataset; though this difference is negligible. As seen in Figure 15, the
              accuracy for the SVM and the previously discussed logistic regression trained with the same data
              set seems to be extremely similar; thus the SVM holds the same use case merits of a balanced
              false positive and false negative class in addition to increased accuracy relative to prior
              models.
            </p>

            <h3 className={styles.h3}>VI.C. Random Forest</h3>
            <p className={styles.paragraph}>
              In a random forest, the coefficient corresponds to the relative importance of the variable
              (whether it be in a positive or negative direction) thus we cannot distinguish between risk and
              protective factors. However, we may use the direction of the relationship between these
              variables in other models or correlation with incarceration to estimate whether they correspond
              to a risk or protective factor. We may see the most important factors contributing to
              incarceration below.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead><tr><th>var</th><th>Relative importance</th></tr></thead>
                <tbody>
                  {FIG16_IMPORTANCE.map((row) => (
                    <tr key={row.v}><td>{row.v}</td><td>{row.n}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.figureCaption} style={{ marginTop: -12, marginBottom: 24 }}>
              Figure 16. Top 10 risk and protective factors for the Random Forest
            </p>
            <p className={styles.paragraph}>
              In line with prior models, having a substance abuse referral by 17, child behavioral problems as
              the reason for removal, being female, and having more than 11 placements are the most prominent
              factors. We also see current placement settings in an institution and group home appear as in
              prior models, likely as a risk factor. Similarly, we see current placement with a relative
              appear as in logistic regression. In line with literature (but no other model) we see 2 or more
              removals appear as a relevant factor, likely as a risk factor.
            </p>
            <Figure src={fig17} alt="Confusion matrix for the random forest: true positive 0.94, false negative 0.057, false positive 0.11, true negative 0.89" caption="Figure 17. Random Forest Accuracy Distribution" wide={false} />
            <p className={styles.paragraph}>
              The random forest has the highest accuracy of all models explored with an accuracy: 92.5%. At
              first glance, this high accuracy makes it the most suitable model for use cases. While there is
              a disparity between the false positive rate (11%) and false negative rate (5.7%), even the
              &ldquo;higher rate&rdquo; (11%) is lower than the lowest false positive/negative rate in any of
              the models with an &ldquo;even&rdquo; distribution of false positive and negative rate. While
              this model does predict allocating resources were not necessary more than it does predict
              withholding resources were necessary, it is not inefficient in a budget constraint point of view
              as it still has the lowest false positive rate (allocating resources were not necessary) than
              any other model explored with the exception of the baseline logistic regression which had a
              false positive rate of 7% but a false negative rate of 67%. Thus, if a model were to be used to
              assess the risk of incarceration by 17, a random forest would be the best. This result is
              consistent with the 2018 paper &ldquo;A case study of algorithm-assisted decision making in
              child maltreatment hotline screening decisions.&rdquo;
            </p>

            {/* VII. FUTURE RESEARCH */}
            <h2 className={`display ${styles.h2}`}>VII. Future Research</h2>
            <h4 className={styles.h4}>1. Introduction of time discontinuity</h4>
            <p className={styles.paragraph}>
              The Outcomes dataset is collected in 3 waves, at age 17, 19, and 21. I opted to perform all of
              my research with the first wave (age 17) as the dataset was reduced to under 7,000 responses.
              While choosing to keep my dependent and independent variable in the same time period conserved a
              sample size of over 20,000, it is hard to assess causality. Once an individual turns 19, the
              questions regarding the outcome variables such as incarceration change from asking if the
              individual has ever been incarcerated to, has the individual been incarcerated in the past 2
              years. While my sample size would likely be smaller, collecting my target variable from the
              second wave would make causality more portable. For instance, say an individual&rsquo;s
              placement setting was institutional (one of the larger risk factors). Clearly, even if an
              individual, say, was placed in an institution (by 17) and then became incarcerated (between 17
              and 19), it could still be correlation or they could both be driven by the same underlying
              variable. That being said, causality is more likely in that case than in the one currently being
              researched as under the current scope, an individual could have been incarcerated at 15 and then
              placed in an institutional setting at 17 as result. In this case having institutional placement
              as a &ldquo;risk&rdquo; factor would actually do very little to reduce risk of incarceration.
            </p>
            <h4 className={styles.h4}>2. Conduct interviews of individuals determining placements</h4>
            <p className={styles.paragraph}>
              As placement setting as well as number of placements seem to have been a prevelent risk and
              protective factor, better understanding the logistics of placements, merits, etc, could be
              beneficial to better understanding the relationship between placements and incarceration, thus
              to what extent placement setting contributes to incarceration or if it&rsquo;s simply a result
              of it.
            </p>
            <h4 className={styles.h4}>3. Case studies regarding the foster care system and incarceration</h4>
            <p className={styles.paragraph}>
              Since the data regarding timelines for incarceration and placements or removals is not available
              (and even if it was, assessing causality would still be tricky), this research could benefit
              from interviewing individuals who have been in the foster care system and incarcerated to better
              understand the drivers of incarceration. Questions could address reasons for removal from
              placements, resources used or lack thereof, specific instances that resulted in their
              incarceration amongst others. This information would be crucial to complement the existing model
              and would likely result in fine tuning of variables included in the model and a better
              interpretation of the current results, an interpretation that would lead to a better use of the
              risk prediction model built. An interdisciplinary approach to these followup interviews would be
              greatly beneficial as not only a domain expert in child welfare as well as an expert in
              behavioral psychology could aid in the provision of even more nuanced insights regarding factors
              contributing to incarceration of individuals interviewed.
            </p>

            {/* VIII. CONCLUSION */}
            <h2 className={`display ${styles.h2}`}>VIII. Conclusion</h2>
            <p className={styles.paragraph}>
              Risk factors: We find that overall, the factors that are most related with increased odds of
              incarceration by 17 across models are as follows:
            </p>
            <ul className={styles.list}>
              <li>Having 11 or more placements by 17</li>
              <li>Child behavioral problems as reason for removal</li>
              <li>Having a substance abuse referral by 17</li>
              <li>Current placement in an institution</li>
              <li>Current placement in a group home</li>
            </ul>
            <p className={styles.paragraph}>
              Protective factors: Similarly, we find that the factors that are most related with decreased
              odds of incarceration by 17 across models are as follows:
            </p>
            <ul className={styles.list}>
              <li>Being female</li>
              <li>Current placement in a pre-adoptive home</li>
              <li>Current placement in a foster home with a relative</li>
              <li>Number of placements below 2</li>
            </ul>
            <p className={styles.paragraph}>
              While more research is needed to better understand the relationship and potential causality
              between these factors and incarceration by 17, we can establish that there is definitely a
              relationship. This means that the risk prediction models could still be used to assess potential
              risk of incarceration, not on its own but as an aid to overloaded case workers. For instance, if
              an individual has been placed in an institution and has had more than 11 placements, but they
              haven&rsquo;t been incarcerated, it might be useful to raise a flag and see if there&rsquo;s a
              way to provide more resources.
            </p>
            <p className={styles.paragraph}>
              In addition, the two time insensitive variables were gender and child behavioral problems as
              reason for removal. In the case of gender, the reason for male being a risk factor is likely
              bias in policing/justice system, that being said, that&rsquo;s not to say that perhaps males in
              the foster care system could get extra attention in this area as they are at greater risk. Maybe
              this attention takes the form of receiving knowledge about the justice system, maybe it means a
              sports league to keep them off the streets, but regardless of the method, it&rsquo;s raising a
              flag. Similarly for children removed from their homes due to behavioral issues, this is a status
              upon entry and it is likely this quality that is putting them at higher risk of incarceration.
              Perhaps seeing what placements children with this reason for entry usually have, and those who
              did not get arrested and attempting to mimic this, or perhaps extra support in school, an extra
              hour from their case worker to understand the situation could be beneficial.
            </p>
            <p className={styles.paragraph}>
              As far as the time variant factors, we may not conclude whether the nature of their relationship
              with incarceration is causal. For instance, being placed in an institution could indicate
              increased risk for incarceration or it could indicate a lack of connection in the
              individual&rsquo;s life which leads to said placement and incarceration or it could even be a
              result of having a history of incarceration. That being said, regardless of the direction of the
              relationship, if an individual&rsquo;s placement setting is institutional and they haven&rsquo;t
              been incarcerated, it might be a sign that they need a little more support from the system
              relative to other individuals in order to prevent an adverse outcome.
            </p>
            <p className={styles.paragraph}>
              We started with over 100 variables in our initial models, and these 9 risk and protective
              factors were the only that pertained their relevance across all models. More information may be
              needed to understand causality but regarding application of this research, having one or many of
              the 5 risk factors paired with lack of protective factors should be enough to raise a flag to
              case workers for increased risk of incarceration if they have not been incarcerated already.
            </p>

            {/* WORKS CITED */}
            <h2 className={`display ${styles.h2}`}>Works Cited</h2>
            {WORKS_CITED.map((w) => (
              <p className={styles.citation} key={w.text}>
                {w.url ? (
                  <a href={w.url} target="_blank" rel="noreferrer">{w.text}</a>
                ) : (
                  w.text
                )}
              </p>
            ))}

            {/* APPENDIX */}
            <h2 className={`display ${styles.h2}`}>Appendix</h2>
            <div className={styles.calloutBox}>
              <p className={styles.paragraph}>
                The full 42-page paper — including the complete correlation matrix (Appendix B) and the
                post-SMOTE-ENN class balance table (Appendix D) — is available as a PDF.
              </p>
              <a className="pill" href={PDF_URL} target="_blank" rel="noreferrer">
                Download full PDF
              </a>
            </div>

            <h4 className={styles.h4}>Appendix A. Results of Logit Bivariate Regression on Incarceration</h4>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead><tr><th>Category</th><th>Var</th><th>P-Val</th></tr></thead>
                <tbody>
                  {APPENDIX_A.map((group) =>
                    group.rows.map((row, i) => (
                      <tr key={group.category + row[0]}>
                        <td>{i === 0 ? group.category : ''}</td>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <h4 className={styles.h4}>Appendix C. Incarceration Response Distribution per State</h4>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Rank</th><th>State</th><th>incarc_yes</th><th>incarc_no</th>
                    <th>incarc_blank</th><th>incarc_declined</th><th>Yes/No</th>
                  </tr>
                </thead>
                <tbody>
                  {APPENDIX_C.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => <td key={i}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className={styles.h4}>Appendix E. Baseline Logistic Regression Plot</h4>
            <Figure src={appendixE} alt="Horizontal bar chart of all baseline logistic regression coefficients, sorted descending" />

            <h4 className={styles.h4}>Appendix F. Smote-ENN Logistic Regression without States Variable Importance Plot</h4>
            <Figure src={appendixF} alt="Horizontal bar chart of smote-enn logistic regression (without states) coefficients, sorted descending" />

            <h4 className={styles.h4}>Appendix G. SVM Variable Importance Plot</h4>
            <Figure src={appendixG} alt="Horizontal bar chart of SVM coefficients, sorted descending" />

            <h4 className={styles.h4}>Appendix H. Random Forest Variable Importance Plot</h4>
            <Figure src={appendixH} alt="Horizontal bar chart of random forest feature importances, sorted descending" />
          </article>
        </div>
      </section>
    </>
  )
}

export default SeniorThesis
