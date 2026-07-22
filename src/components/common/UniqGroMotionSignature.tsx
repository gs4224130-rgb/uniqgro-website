import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const letters = 'UNIQGRO'.split('')

export function UniqGroMotionSignature(){
  const location = useLocation()
  const [pulse,setPulse]=useState(0)
  const [visible,setVisible]=useState(false)
  const seen=useRef<WeakSet<Element>>(new WeakSet())
  const hideTimer=useRef<number | null>(null)
  const cooldownUntil=useRef(0)

  useEffect(()=>{
    seen.current=new WeakSet()
    cooldownUntil.current=0
    if(hideTimer.current) window.clearTimeout(hideTimer.current)

    const trigger=()=>{
      const now=Date.now()
      if(now<cooldownUntil.current) return
      cooldownUntil.current=now+2100
      setPulse(p=>p+1)
      setVisible(true)
      if(hideTimer.current) window.clearTimeout(hideTimer.current)
      hideTimer.current=window.setTimeout(()=>setVisible(false),2850)
    }

    const routeTimer=window.setTimeout(trigger,320)
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting || entry.intersectionRatio<.42 || seen.current.has(entry.target)) return
        seen.current.add(entry.target)
        trigger()
      })
    },{threshold:[.42,.62]})

    const observeTimer=window.setTimeout(()=>{
      document.querySelectorAll('main section').forEach(section=>observer.observe(section))
    },80)

    return ()=>{
      window.clearTimeout(routeTimer)
      window.clearTimeout(observeTimer)
      if(hideTimer.current) window.clearTimeout(hideTimer.current)
      observer.disconnect()
    }
  },[location.pathname])

  const variant=pulse%4

  return <AnimatePresence>
    {visible&&<motion.div
      key={`${location.pathname}-${pulse}`}
      className={`v5-global-signature position-${variant}`}
      initial={{opacity:0}}
      animate={{opacity:[0,1,1,0]}}
      exit={{opacity:0}}
      transition={{duration:2.8,times:[0,.12,.78,1]}}
      aria-hidden="true"
    >
      <motion.div
        className="v5-global-line"
        initial={{scaleX:0}}
        animate={{scaleX:[0,1,1,.15]}}
        transition={{duration:2.7,times:[0,.36,.76,1],ease:[.16,1,.3,1]}}
      />
      <div className="v5-global-word">
        {letters.map((letter,i)=><motion.span
          key={`${letter}-${i}`}
          initial={{opacity:0,y:14,filter:'blur(7px)'}}
          animate={{opacity:[0,1,1,0],y:[14,0,0,-7],filter:['blur(7px)','blur(0px)','blur(0px)','blur(6px)']}}
          transition={{duration:2.05,delay:.42+i*.065,times:[0,.22,.72,1],ease:[.16,1,.3,1]}}
        >{letter}</motion.span>)}
      </div>
      <motion.i
        className="v5-global-dot"
        initial={{x:'0vw',opacity:0}}
        animate={{x:['0vw','72vw','84vw'],opacity:[0,1,1,0]}}
        transition={{duration:2.35,times:[0,.1,.82,1],ease:[.16,1,.3,1]}}
      />
    </motion.div>}
  </AnimatePresence>
}
