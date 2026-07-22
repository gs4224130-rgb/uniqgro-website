import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, GitBranch, PackageCheck, Target, UserRound } from 'lucide-react'
import { journey } from '../../content/site'

export function FounderJourney(){
  const [active,setActive]=useState(0)
  const s=journey[active]
  const details = [
    {label:'UniqGro action',value:s.action,icon:Target},
    {label:'Founder responsibility',value:s.founder,icon:UserRound},
    {label:'Deliverables',value:s.deliver,icon:PackageCheck},
    {label:'Decision gate',value:s.gate,icon:GitBranch},
    {label:'Example evidence',value:s.evidence,icon:BarChart3},
  ]

  return <div className="v3-journey">
    <div className="v3-journey-progress" aria-hidden="true">
      <span style={{width:`${((active+1)/journey.length)*100}%`}}/>
    </div>

    <div className="v3-journey-layout">
      <div className="journey-tabs v3-journey-tabs" role="tablist" aria-label="Founder journey stages">
        {journey.map((x,i)=>
          <button role="tab" aria-selected={active===i} className={active===i?'active':''} onClick={()=>setActive(i)} key={x.title}>
            <span>{x.n}</span><strong>{x.title}</strong>
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          className="journey-card v3-journey-card"
          role="tabpanel"
          key={s.title}
          initial={{opacity:0,y:22}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:-14}}
          transition={{duration:.4,ease:[.16,1,.3,1]}}
        >
          <div className="v3-label">STAGE {s.n}</div>
          <h2>{s.title}</h2>
          <p className="v3-journey-question">{s.q}</p>
          <div className="v3-journey-detail-grid">
            {details.map(({label,value,icon:Icon})=>
              <div className="v3-journey-detail" key={label}>
                <div><Icon size={18}/><strong>{label}</strong></div>
                <p>{value}</p>
              </div>
            )}
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  </div>
}
