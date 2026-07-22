import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Clock3 } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { resources } from '../data/resources'

const cats=['All','Idea Validation','Customer Discovery','Brand & Positioning','Go-to-Market','Sales','Operations','AI Systems','Founder Stories','Failure Analysis']

export default function Resources(){
  const [cat,setCat]=useState('All')
  const filtered=resources.filter(r=>cat==='All'||r.category===cat)

  return <>
    <PageHero eyebrow="FOUNDER RESOURCES" title="Playbooks for the work before the applause." lead="Practical resources for founders building evidence, clarity and operating discipline."/>

    <section className="v3-page-section">
      <div className="container">
        <div className="v3-section-heading compact">
          <span className="v3-label">RESOURCE LIBRARY</span>
          <h2>Find the next useful tool quickly.</h2>
        </div>

        <div className="v3-filter-scroll" role="group" aria-label="Filter resources by category">
          {cats.map(c=>
            <button key={c} className={cat===c?'active':''} onClick={()=>setCat(c)}>{c}</button>
          )}
        </div>

        <motion.div layout className="v3-resource-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((r,i)=>
              <motion.article
                layout
                className={`v3-resource-card tone-${(i%5)+1}`}
                key={r.title}
                initial={{opacity:0,y:26,scale:.98}}
                animate={{opacity:1,y:0,scale:1}}
                exit={{opacity:0,y:16,scale:.98}}
                transition={{duration:.38,ease:[.16,1,.3,1]}}
                whileHover={{y:-6}}
              >
                <div className="v3-resource-top">
                  <span className="v3-resource-category">{r.category}</span>
                  <span className={`v3-status ${r.status}`}>{r.status==='published'?'Published':'Coming soon'}</span>
                </div>
                <h2>{r.title}</h2>
                <p>{r.description}</p>
                <div className="v3-resource-bottom">
                  <span><Clock3 size={15}/>{r.readTime} read</span>
                  <span>{r.author}</span>
                  {r.status==='published'
                    ? <a href={r.url}>Open <ArrowUpRight size={16}/></a>
                    : <span className="v3-resource-disabled">Preview soon</span>}
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </motion.div>

        {filtered.length===0&&<div className="v3-empty-state">No resources in this category yet.</div>}
      </div>
    </section>
  </>
}
