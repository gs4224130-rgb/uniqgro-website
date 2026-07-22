import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, UsersRound } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'

const roles = [
  ['Founders','People accountable for the company.'],
  ['Strategists','People who clarify decisions and trade-offs.'],
  ['Builders','Designers, developers, creators and makers.'],
  ['Operators','People who turn processes into consistent execution.'],
]

const useful = [
  'Structured founder introductions.',
  'Problem-specific discussion rooms.',
  'Accountability circles.',
  'Customer-discovery practice.',
  'Build reviews and office hours.',
  'Founder resources and playbooks.',
]

const values = [
  'Give before asking.',
  'Be specific.',
  'Share evidence, not performance theatre.',
  'Protect confidential information.',
  'No spam, scraping or unsolicited selling.',
  'Challenge ideas without attacking people.',
]

export default function Community(){
  return <>
    <PageHero eyebrow="FOUNDER COMMUNITY" title="Build with people who understand the work." lead="A serious network for founders and contributors who value evidence, accountability and useful collaboration."/>

    <section className="v3-page-section">
      <div className="container">
        <div className="v3-section-heading">
          <span className="v3-label">THE PEOPLE IN THE ROOM</span>
          <h2>Different roles. Shared standards.</h2>
        </div>
        <div className="v3-role-network">
          {roles.map(([h,p],i)=>
            <motion.article className={`v3-community-role tone-${(i%4)+1}`} key={h} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.48,delay:i*.05}}>
              <span>0{i+1}</span><h2>{h}</h2><p>{p}</p>
            </motion.article>
          )}
        </div>
      </div>
    </section>

    <section className="v3-page-section v3-soft-section">
      <div className="container v3-community-values-grid">
        <motion.div className="v3-value-panel" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
          <span className="v3-label">COMMUNITY VALUE</span>
          <h2>Useful by design.</h2>
          <div className="v3-value-list">
            {useful.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}
          </div>
        </motion.div>

        <motion.div className="v3-value-panel" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:.08}}>
          <span className="v3-label">COMMUNITY VALUES</span>
          <h2>Strong signal. Low noise.</h2>
          <div className="v3-value-list">
            {values.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="v3-community-cta">
      <div className="container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
          <span className="v3-label">YOUR NEXT MOVE</span>
          <h2>Join with context. Contribute with substance.</h2>
          <p>Create a founder profile to introduce what you are building, or read the community guidelines before you participate.</p>
          <div className="v3-community-actions">
            <Link className="btn primary v3-bouncy" to="/founders/demo-founder"><UsersRound size={18}/>Create Founder Profile <ArrowRight size={16}/></Link>
            <Link className="btn ghost v3-bouncy subtle" to="/community-guidelines"><BookOpen size={18}/>Read Community Guidelines</Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
}
