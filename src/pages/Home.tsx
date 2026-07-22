import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { site } from '../content/site'
import { SEO } from '../lib/seo/SEO'
import { GrowthLine } from '../components/common/GrowthLine'

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

const operatingLoop = ['Clarity','Test','Evidence','Decision','Build']

export default function Home(){
  const {scrollYProgress}=useScroll()
  const heroY=useTransform(scrollYProgress,[0,.18],[0,-70])
  const heroScale=useTransform(scrollYProgress,[0,.18],[1,.96])
  const founderImage = `${import.meta.env.BASE_URL}images/gourav-saini-founder.jpg`
  const [showFounderMessage,setShowFounderMessage]=useState(false)
  const toggleFounderMessage=()=>setShowFounderMessage(v=>!v)

  return <>
    <SEO title="UniqGro — We work with founders." description="UniqGro works with idea-stage and early-stage founders across strategy, brand, product, growth and operating systems."/>

    <section className="v2-hero">
      <div className="v2-orb"/><div className="v2-noise"/>
      <GrowthLine className="v4-home-growth-line"/>
      <motion.div className="v2-hero-inner" style={{y:heroY,scale:heroScale}}>
        <motion.div className="v2-kicker" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
          <Sparkles size={15}/> Founder-first company building
        </motion.div>

        <h1 className="v2-wordmark" aria-label="UNIQGRO">
          {'UNIQGRO'.split('').map((l,i)=>
            <motion.span
              key={i}
              initial={{opacity:0,y:95,filter:'blur(10px)'}}
              animate={{opacity:1,y:0,filter:'blur(0px)'}}
              transition={{duration:.72,delay:.07*i,ease:[.16,1,.3,1]}}
            >{l}</motion.span>
          )}
        </h1>

        <motion.div className="v2-hero-statement" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.72,duration:.65}}>
          <p>We don’t work <em>for</em> founders.</p>
          <p>We work <strong>with</strong> founders.</p>
        </motion.div>

        <motion.div className="v3-for-with" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:1.02,duration:.5}}>
          <span>THE SHIFT</span>
          <div className="v3-swap-window" aria-label="From FOR to WITH">
            <motion.i initial={{y:0,opacity:1}} animate={{y:-26,opacity:0}} transition={{delay:1.28,duration:.42,ease:[.16,1,.3,1]}}>FOR</motion.i>
            <motion.strong initial={{y:26,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.48,duration:.48,ease:[.16,1,.3,1]}}>WITH</motion.strong>
          </div>
          <b>BUILD BESIDE THE FOUNDER</b>
        </motion.div>

        <motion.div className="v2-hero-bottom" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:1.05,duration:.55}}>
          <p>Strategy → Brand → Product → Growth → Systems</p>
          <Link className="v2-pill-button" to="/apply">Start a conversation <ArrowRight size={17}/></Link>
        </motion.div>

      </motion.div>
    </section>

    <section className="v3-story">
      <div className="v3-story-shell">
        <motion.div className="v3-story-intro" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.35}} transition={{duration:.55}}>
          <span className="v3-label">THE PARTNERSHIP</span>
          <h2>One idea at a time.</h2>
          <p>Clear, direct, and built to move.</p>
        </motion.div>

        <div className="v3-story-grid">
          {story.map(([t,c],i)=>
            <motion.article
              key={t}
              className={`v2-story-card tone-${i+1} v3-story-card`}
              initial={{opacity:0,y:64,scale:.97}}
              whileInView={{opacity:1,y:0,scale:1}}
              viewport={{once:true,amount:.22}}
              transition={{duration:.62,delay:i*.08,ease:[.16,1,.3,1]}}
              whileHover={{y:-6}}
            >
              <span>0{i+1}</span>
              <h2>{t}</h2>
              <p>{c}</p>
            </motion.article>
          )}
        </div>
      </div>
    </section>

    <section className="v2-phrase-section v3-phrase v4-phrase">
      <motion.p initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}>Not an agency.</motion.p>
      <motion.p initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,delay:.08}}>Not a consultant.</motion.p>

      <motion.div className="v4-operating-loop" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.58}}>
        <span className="v3-label">FOUNDER OPERATING LOOP</span>
        <div className="v4-loop-track">
          {operatingLoop.map((step,i)=>
            <motion.div className="v4-loop-step" key={step} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.42,delay:i*.09}}>
              <span>{String(i+1).padStart(2,'0')}</span><strong>{step}</strong>
            </motion.div>
          )}
        </div>
        <p>Every move should reduce uncertainty and improve the next decision.</p>
      </motion.div>

      <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65,delay:.12}}>
        A growth partner that stays close to the decisions and the execution.
      </motion.h2>
    </section>

    <section className="v2-stage-section">
      <div className="v2-section-head"><span>WHERE WE ENTER</span><h2>Start where you are.<br/>Build what the next stage needs.</h2></div>
      <div className="v2-stage-track">
        {stages.map((s,i)=>
          <motion.div className="v2-stage" key={s} initial={{opacity:.25,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.5}} transition={{duration:.45,delay:i*.04}}>
            <span>{String(i+1).padStart(2,'0')}</span><strong>{s}</strong>
          </motion.div>
        )}
      </div>
    </section>

    <section className="v2-capabilities">
      <div className="v2-section-head"><span>WHAT WE BUILD TOGETHER</span><h2>Connected capabilities.<br/>Activated at the right moment.</h2></div>
      <div className="v2-cap-grid">
        {capabilities.map(([n,t,c],i)=>
          <motion.article key={t} className={`v2-cap-card cap-${i+1}`} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.5,delay:(i%2)*.06}}>
            <span>{n}</span><h3>{t}</h3><p>{c}</p><i>↗</i>
          </motion.article>
        )}
      </div>
    </section>

    <section className="v2-founder v3-founder">
      <motion.div
        className={`v2-founder-photo v4-founder-interactive ${showFounderMessage?'is-message':''}`}
        initial={{opacity:0,clipPath:'inset(0 0 12% 0)'}}
        whileInView={{opacity:1,clipPath:'inset(0 0 0% 0)'}}
        viewport={{once:true,amount:.2}}
        transition={{duration:.75,ease:[.16,1,.3,1]}}
        onMouseEnter={()=>setShowFounderMessage(true)}
        onMouseLeave={()=>setShowFounderMessage(false)}
        onClick={toggleFounderMessage}
        onKeyDown={(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleFounderMessage()}}}
        role="button"
        tabIndex={0}
        aria-pressed={showFounderMessage}
        aria-label="Reveal a message from Gourav Saini"
      >
        <img src={founderImage} alt={`${site.founder.name}, Founder of UniqGro`}/>
        <div className="v2-photo-wash"/>
        <div className="v4-founder-message" aria-hidden={!showFounderMessage}>
          <span className="v3-label">A NOTE FROM THE FOUNDER</span>
          <blockquote>“I’m not speaking from the finish line. I’m building too.”</blockquote>
          <p>UniqGro is being shaped through the same uncertainty, experiments and ambition that every early founder faces.</p>
          <small>Hover or tap again to return to the portrait.</small>
        </div>
        <div className="v4-founder-hint">Hover / tap to meet the founder</div>
      </motion.div>
      <motion.div className="v2-founder-copy" initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.65}}>
        <span>FOUNDER</span>
        <blockquote>“The founder should leave every stage with more clarity, stronger systems and greater ability to build independently.”</blockquote>
        <div><strong>{site.founder.name}</strong><p>{site.founder.role} · {site.founder.responsibility}</p></div>
        <Link className="v2-text-link" to="/founder">Read the founder story <ArrowRight size={16}/></Link>
      </motion.div>
    </section>

    <section className="v2-final">
      <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}>
        <span>READY WHEN YOU ARE</span>
        <h2>Bring the vision.<br/><em>Let’s build the next move.</em></h2>
        <p>You do not need perfect slides, funding or all the answers. Start with where you are and what you are trying to build.</p>
        <Link className="v2-pill-button large" to="/apply">Build with UniqGro <ArrowRight size={18}/></Link>
      </motion.div>
    </section>
  </>
}
