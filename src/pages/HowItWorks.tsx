import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { FounderJourney } from '../components/journey/FounderJourney'

const recs:Record<string,string>={
  idea:'Start with Stage 1 — Ground Truth.',
  talked:'Start with Stage 2 — Validate the Problem.',
  offer:'Start with Stage 3 — Refine the Bet.',
  launch:'Start with Stage 4 or 5 depending on evidence.',
  repeat:'Start with Stage 6 — Systemise Growth.'
}

const situations = [
  ['idea','I have an idea but no clear starting point.'],
  ['talked','I have spoken with some customers.'],
  ['offer','I understand the problem and need an offer.'],
  ['launch','I have built something and need market proof.'],
  ['repeat','I have a working signal and need repeatability.'],
]

export default function HowItWorks(){
  const [v,setV]=useState('idea')
  return <>
    <PageHero eyebrow="THE FOUNDER JOURNEY" title="Build the next proof. Then earn the next decision." lead="Six stages. Clear gates. No fake certainty."/>

    <section className="v3-page-section">
      <div className="container">
        <div className="v3-section-heading">
          <span className="v3-label">THE SIX-STAGE SYSTEM</span>
          <h2>Every stage answers one important question.</h2>
        </div>
        <FounderJourney/>
      </div>
    </section>

    <section className="v3-page-section v3-soft-section">
      <div className="container">
        <div className="v3-section-heading">
          <span className="v3-label">WHERE ARE YOU NOW?</span>
          <h2>Choose the situation that sounds most like you.</h2>
        </div>

        <div className="v3-situation-layout">
          <div className="v3-situation-buttons">
            {situations.map(([key,label],i)=>
              <motion.button
                key={key}
                className={v===key?'active':''}
                onClick={()=>setV(key)}
                whileHover={{x:4}}
                whileTap={{scale:.99}}
                transition={{duration:.18}}
              >
                <span>{String(i+1).padStart(2,'0')}</span>{label}
              </motion.button>
            )}
          </div>

          <motion.div className="v3-recommendation" key={v} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.35}}>
            <span className="v3-label">RECOMMENDED STARTING POINT</span>
            <h3>{recs[v]}</h3>
            <p>This is guidance, not an automated assessment. A real conversation determines the right starting point.</p>
            <a href="#top" onClick={(e)=>e.preventDefault()}>Use this as a conversation starter <ArrowRight size={16}/></a>
          </motion.div>
        </div>
      </div>
    </section>
  </>
}
