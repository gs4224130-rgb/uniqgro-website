import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'

const roles = [
  ['Agency','Executes a defined scope for a client.'],
  ['Consultant','Provides specialist advice.'],
  ['Investor','Provides capital and governance aligned to an investment.'],
  ['Accelerator','Provides time-bound programs, mentorship and network.'],
]

const principles = [
  ['Shared diagnosis','Understand the real problem before execution.'],
  ['Clear ownership','Founder and UniqGro responsibilities stay explicit.'],
  ['Decision-led experiments','Every experiment answers a clear question.'],
  ['Evidence over assumptions','Metrics use agreed baselines and attribution.'],
  ['Independence by design','Systems are documented so founders become stronger over time.'],
]

const goodFit = [
  'Serious entrepreneurial ambition.',
  'Idea-stage or early-stage uncertainty.',
  'Willingness to speak with customers.',
  'Readiness to execute and share honest data.',
]

const notFit = [
  'Guaranteed revenue or overnight success expectations.',
  'Expecting branding to rescue a weak product.',
  'Motivation without action.',
  'Wanting a team to build everything while the founder stays passive.',
]

export default function WhyUniqGro(){
  return <>
    <PageHero
      eyebrow="WHY UNIQGRO"
      title="The beginning is where founders are most alone."
      lead="The highest uncertainty often arrives before the support system does. UniqGro exists to close that gap with clarity, evidence and shared execution."
    />

    <section className="v3-page-section">
      <div className="container">
        <div className="v3-section-heading">
          <span className="v3-label">DIFFERENT ROLES. DIFFERENT MOMENTS.</span>
          <h2>Know what each model is built to do.</h2>
        </div>

        <div className="v3-comparison-layout">
          <div className="v3-role-grid">
            {roles.map(([name,desc],i)=>
              <motion.article className="v3-role-card" key={name} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.5,delay:i*.05}}>
                <span>0{i+1}</span><h3>{name}</h3><p>{desc}</p>
              </motion.article>
            )}
          </div>

          <motion.aside className="v3-uniqgro-diff" initial={{opacity:0,x:28}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.25}} transition={{duration:.6}}>
            <span className="v3-label">WHERE UNIQGRO DIFFERS</span>
            <h3>We stay close before the proof exists.</h3>
            <p>UniqGro works alongside selected early founders to establish clarity, proof and operating foundations—not just deliver a scope and leave.</p>
          </motion.aside>
        </div>
      </div>
    </section>

    <section className="v3-page-section v3-soft-section">
      <div className="container">
        <div className="v3-section-heading">
          <span className="v3-label">WORKING WITH FOUNDERS</span>
          <h2>Close to the work. Honest about the evidence.</h2>
        </div>

        <div className="v4-principle-sequence" aria-hidden="true"><span/></div>
        <div className="v3-principle-grid v4-principle-grid">
          {principles.map(([title,desc],i)=>
            <motion.article className="v3-principle-card v4-principle-card" key={title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.5,delay:i*.09,ease:[.16,1,.3,1]}}>
              <span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{desc}</p>
            </motion.article>
          )}
        </div>
      </div>
    </section>

    <section className="v3-page-section">
      <div className="container">
        <div className="v3-fit-grid">
          <motion.article className="v3-fit-card good" initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
            <div className="v3-fit-title"><CheckCircle2 size={22}/><h2>Good fit</h2></div>
            {goodFit.map(x=><p key={x}><CheckCircle2 size={17}/>{x}</p>)}
          </motion.article>
          <motion.article className="v3-fit-card not" initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:.08}}>
            <div className="v3-fit-title"><XCircle size={22}/><h2>Not a fit</h2></div>
            {notFit.map(x=><p key={x}><XCircle size={17}/>{x}</p>)}
          </motion.article>
        </div>
      </div>
    </section>

    <section className="v3-page-section v3-cta-band">
      <div className="container">
        <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}>
          <span className="v3-label">START WITH CLARITY</span>
          <h2>Not a sales pitch. A real founder conversation.</h2>
          <p>The first conversation is designed to understand your problem, stage and commitment. If deeper execution support makes sense, scope, responsibilities, outcomes and commercial terms are agreed transparently before work begins.</p>
          <Link className="btn primary v3-bouncy" to="/apply">Apply to Build <ArrowRight size={17}/></Link>
        </motion.div>
      </div>
    </section>
  </>
}
