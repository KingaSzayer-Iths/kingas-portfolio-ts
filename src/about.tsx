import React from 'react'
import educations from './data/educations.json'
import jobs from './data/jobs.json'
import { useTranslation } from 'react-i18next'



type Education = {
  id: string
  institutionName: string
  program: string
  startDatum: string
  slutDatum?: string
}

type Job = {
  id: string
  companyName: string
  jobTitle: string
  jobDescription: string
  startDatum: string
  slutDatum?: string
}


const formatDate = (dateStr?: string) => {
  if (!dateStr) return "Pågår"

  const safeDate = dateStr.includes("T") ? dateStr : `${dateStr}T00:00:00`

  const date = new Date(safeDate)
  if (isNaN(date.getTime())) return "Ogiltigt datum"

  return date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "short",
  })
}

function About() {
  const { t } = useTranslation()
  const educationList = educations as Education[]
  const jobList = jobs as Job[]


  return ( <>
  <main>
    <div className="about-container">
    <div className="about-header">
    <h2 dangerouslySetInnerHTML={{ __html: t('about.header') }} />
    </div>
    <p><span>J </span>{t('about.p1')}</p>
    <p>{t('about.p2')}</p>
    <p>{t('about.p3')}</p>


<section className="edu">
  {[...educations]
    .sort(
      (a, b) =>
        new Date(b.slutDatum || Date.now()).getTime() -
        new Date(a.slutDatum || Date.now()).getTime()
    )
    .map((education) => (
      <article key={education.id}>
        <h2>{t(education.institutionName)}</h2>
        <h3>{t(education.program)}</h3>
        {/* <h6>{t('about.edu.start')}: {formatDate(education.startDatum)}</h6>
        <h6>{t('about.edu.end')}: {formatDate(education.slutDatum)}</h6> */}
      </article>
    ))}
</section>

<section className="job">
{[...jobs]
        .sort(
          (a, b) =>
            new Date(b.slutDatum || Date.now()).getTime() -
            new Date(a.slutDatum || Date.now()).getTime()
        )
        .map((job) => (

            <article key={job.id}>
              <h2>{t(job.companyName)}</h2>
              <h3>{t(job.jobTitle)}</h3>
              <h4>{t(job.jobDescription)}</h4>
              <h6>{t('about.job.start')}: {formatDate(job.startDatum)}</h6>
              <h6>{t('about.job.end')}: {formatDate(job.slutDatum)}</h6>
            </article>

    ))}
</section>

</div>
</main>
  </>
  )
}

export default About
