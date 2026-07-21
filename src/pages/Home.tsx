import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { site } from '../content/site'
import { SEO } from '../lib/seo/SEO'

const stages = ['IDEA', 'STARTING', 'MVP', 'EARLY TRACTION', 'GROWTH', 'SCALE']
const capabilities = [
  ['01','Strategy','Turn uncertainty into focused direction, sharper decisions and a clear next move.'],
  ['02','Brand & Positioning','Build a brand people understand, remember and trust before you spend heavily on growth.'],
  ['03','Product & Technology','Shape the right MVP, workflows and digital systems around what the market actually needs.'],
  ['04','Growth','Create practical experiments across content, demand, sales and partnerships—then learn from evidence.'],
  ['05','Operations','Build scorecards, SOPs, automation and rhythms that make progress repeatable.'],
  ['06','Scale Readiness','Strengthen the company before expansion, fundraising, hiring or new markets multiply complexity.'],
]
const story = [
  ['You bring the vision.','The ambition, insight and reason this company should exist.'],
  ['We make it executable.','We turn the next unknown into a decision, an experiment and a measurable move.'],
  ['Then we build beside you.','Strategy, brand, product, growth and systems move together—not as disconnected services.'],
]

export default function Home(){
  const {scrollYProgress}=useScroll()
  const heroY=useTransform(scrollYProgress,[0,.18],[0,-90])
  const heroScale=useTransform(scrollYProgress,[0,.18],[1,.94])
  return <>
    <SEO title="UniqGro — We work with founders." description="UniqGro works with idea-stage and early-stage founders across strategy, brand, product, growth and operating systems."/>

    <section className="v2-hero">
      <div className="v2-orb"/><div className="v2-noise"/>
      <motion.div className="v2-hero-inner" style={{y:heroY,scale:heroScale}}>
        <motion.div className="v2-kicker" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}><Sparkles size={15}/> Founder-first company building</motion.div>
        <h1 className="v2-wordmark" aria-label="UNIQGRO">{'UNIQGRO'.split('').map((l,i)=><motion.span key={i} initial={{opacity:0,y:90}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.08*i,ease:[.16,1,.3,1]}}>{l}</motion.span>)}</h1>
        <motion.div className="v2-hero-statement" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.85,duration:.9}}>
          <p>We don’t work <em>for</em> founders.</p><p>We work <strong>with</strong> founders.</p>
        </motion.div>
        <motion.div className="v2-hero-bottom" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:1.15}}>
          <p>Strategy → Brand → Product → Growth → Systems</p>
          <Link className="v2-pill-button" to="/apply">Start a conversation <ArrowRight size={17}/></Link>
        </motion.div>
        <div className="v2-scroll-cue"><span>SCROLL TO BUILD</span><i/></div>
      </motion.div>
    </section>

    <section className="v2-story-wrap"><div className="v2-story-sticky"><aside className="v2-story-side"><span>01 / THE PARTNERSHIP</span><p>One viewport. One idea at a time.</p></aside><div className="v2-story-stack">
      {story.map(([t,c],i)=><motion.article key={t} className={`v2-story-card tone-${i+1}`} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{amount:.65}} transition={{duration:.7}}><span>0{i+1}</span><h2>{t}</h2><p>{c}</p></motion.article>)}
    </div></div></section>

    <section className="v2-phrase-section"><motion.p initial={{opacity:.15}} whileInView={{opacity:1}}>Not an agency.</motion.p><motion.p initial={{opacity:.15}} whileInView={{opacity:1}}>Not a consultant.</motion.p><motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}>A growth partner that stays close to the decisions and the execution.</motion.h2></section>

    <section className="v2-stage-section"><div className="v2-section-head"><span>02 / WHERE WE ENTER</span><h2>Start where you are.<br/>Build what the next stage needs.</h2></div><div className="v2-stage-track">{stages.map((s,i)=><motion.div className="v2-stage" key={s} initial={{opacity:.25,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{amount:.75}}><span>{String(i+1).padStart(2,'0')}</span><strong>{s}</strong></motion.div>)}</div></section>

    <section className="v2-capabilities"><div className="v2-section-head"><span>03 / WHAT WE BUILD TOGETHER</span><h2>Connected capabilities.<br/>Activated at the right moment.</h2></div><div className="v2-cap-grid">{capabilities.map(([n,t,c],i)=><motion.article key={t} className={`v2-cap-card cap-${i+1}`} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}}><span>{n}</span><h3>{t}</h3><p>{c}</p><i>↗</i></motion.article>)}</div></section>

    <section className="v2-founder"><div className="v2-founder-photo"><motion.img src={site.founder.image} alt={`${site.founder.name}, Founder of UniqGro`} initial={{scale:1.08}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:1.1}}/><div className="v2-photo-wash"/></div><div className="v2-founder-copy"><span>04 / FOUNDER</span><motion.blockquote initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>“The founder should leave every stage with more clarity, stronger systems and greater ability to build independently.”</motion.blockquote><div><strong>{site.founder.name}</strong><p>{site.founder.role} · {site.founder.responsibility}</p></div><Link className="v2-text-link" to="/founder">Read the founder story <ArrowRight size={16}/></Link></div></section>

    <section className="v2-final"><motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span>READY WHEN YOU ARE</span><h2>Bring the vision.<br/><em>Let’s build the next move.</em></h2><p>You do not need perfect slides, funding or all the answers. Start with where you are and what you are trying to build.</p><Link className="v2-pill-button large" to="/apply">Build with UniqGro <ArrowRight size={18}/></Link></motion.div></section>
  </>
}
