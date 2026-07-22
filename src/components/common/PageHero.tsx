import { motion } from 'framer-motion'

export function PageHero({eyebrow,title,lead}:{eyebrow:string;title:string;lead?:string}){
  return <section className="page-hero v3-page-hero">
    <div className="v3-page-hero-orb one" aria-hidden="true"/>
    <div className="v3-page-hero-orb two" aria-hidden="true"/>
    <motion.div
      className="container v3-page-hero-inner"
      initial={{opacity:0,y:28}}
      animate={{opacity:1,y:0}}
      transition={{duration:.62,ease:[.16,1,.3,1]}}
    >
      <motion.div className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.4,delay:.06}}>{eyebrow}</motion.div>
      <motion.h1 initial={{opacity:0,y:42,filter:'blur(8px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:.72,delay:.1,ease:[.16,1,.3,1]}}>{title}</motion.h1>
      {lead&&<motion.p className="lead" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.25}}>{lead}</motion.p>}
    </motion.div>
  </section>
}
