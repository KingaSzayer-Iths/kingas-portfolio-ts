import React from 'react'
import educations from './data/educations.json'
import jobs from './data/jobs.json'

function About() {
  return <>
  <main>
    <div className="about-container">
    {/* <h1>Om mig</h1> */}
    <div className="about-header">
    <h2>Min <span>Bakgrund</span>: <span>Utbildningar</span> och <span>Erfarenheter</span></h2>
    </div>
    <p><span>J</span>ag är systemvetare i grunden och har under de senaste åren tagit steget vidare i min karriär och specialiserat mig genom att utbilda mig till frontend-utvecklare på IT-Högskolan och bär det ut till arbetslivet där jag ser fram emot att få arbeta med spännande projekt där jag kan kombinera teknik med kreativitet.
    </p>
    <p>
    Mitt mål är att arbeta i en miljö där jag kan utveckla både min kärlek för funktionalitet och mitt intresse för färg och form. Min tid på IT-Högskolan har varit en givande och inspirerande resa, där jag genom projekt fått fördjupa mig i frontend-utveckling. Den erfarenheten har stärkt min övertygelse om att detta är det jag vill ägna mig åt och jag ser fram emot att fortsätta växa inom mitt område och för varje dag som går bli en bättre utvecklare.
    </p>
    <p>
    Utanför arbetslivet återspeglas min passion för kreativitet och nyskapande i flera andra intressen. Jag brinner för matlagning, inredning och formgivning, där jag gärna experimenterar med nya recept. Jag har även skapat ett fridfullt och inspirerande hem omkring mig. Jag är också en djurvän och har bildat en community med över 170 medlemmar för hundägare, där vi organiserar gemensamma promenader och utbyter erfarenheter.
    </p>
    

    <section className="edu">
{educations.map(education =>
                  <article key={education.program}>
                    <h2>{education.intitutionName}</h2>
                    <h3>{education.program}</h3>
                    <h6>{education.startDatum}</h6>
                    <h6>{education.slutDatum}</h6>
                  </article> 
                  )}
    </section>

    <section  className="job">
{jobs.map(job => <article key={job.companyName}>
                    <h2>{job.companyName}</h2>
                    <h3>{job.jobTitle}</h3>
                    <h4>{job.jobDescription}</h4>
                    <h6>{job.startDatum}</h6>
                    <h6>{job.slutDatum}</h6>
                  </article> 
                  )}
    </section>
</div>
</main>
  </>
}

export default About
