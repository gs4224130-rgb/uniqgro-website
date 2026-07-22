import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

type Signature = {
  text: string
  sub?: string
  shape: 'line' | 'circle' | 'square' | 'diamond' | 'rings' | 'dots' | 'arrow' | 'steps'
}

const signatures: Signature[] = [
  { text:'UNIQGRO', sub:'BUILD WITH FOUNDERS', shape:'line' },
  { text:'YOUR DREAM COMPANY', sub:'STARTS WITH THE NEXT REAL MOVE', shape:'circle' },
  { text:'TRUSTED', sub:'BUILT THROUGH PROOF, NOT PROMISES', shape:'square' },
  { text:'POSSIBILITY', sub:'TURN UNCERTAINTY INTO MOVEMENT', shape:'diamond' },
  { text:'TOGETHER', sub:'BETTER COMPANIES ARE NOT BUILT ALONE', shape:'rings' },
  { text:'EVIDENCE', sub:'LEARN. DECIDE. BUILD AGAIN.', shape:'dots' },
  { text:'YOUR NEXT MOVE', sub:'MAKE IT CLEAR. MAKE IT COUNT.', shape:'arrow' },
  { text:'IDEA → PROOF → BUILD → GROW', sub:'ONE STAGE AT A TIME', shape:'steps' },
]

function Shape({type}:{type:Signature['shape']}){
  const common = {
    position:'absolute' as const,
    inset:0,
    width:'100%',
    height:'100%',
    overflow:'visible',
  }

  if(type==='circle'){
    return <svg viewBox="0 0 520 260" style={common}>
      <motion.ellipse cx="260" cy="130" rx="205" ry="92" fill="none" stroke="url(#sigGrad)" strokeWidth="3"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:[0,.75,.75,0]}}
        transition={{duration:3.2,ease:[.16,1,.3,1]}}/>
    </svg>
  }

  if(type==='square'){
    return <svg viewBox="0 0 520 260" style={common}>
      <motion.rect x="70" y="38" width="380" height="184" rx="24" fill="none" stroke="url(#sigGrad)" strokeWidth="3"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:[0,.78,.78,0]}}
        transition={{duration:3.1,ease:[.16,1,.3,1]}}/>
      <motion.path d="M405 73 L424 92 L459 53" fill="none" stroke="#7b67f2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:[0,0,1,0]}}
        transition={{duration:3.1,times:[0,.46,.65,1]}}/>
    </svg>
  }

  if(type==='diamond'){
    return <svg viewBox="0 0 520 260" style={common}>
      <motion.path d="M260 24 L474 130 L260 236 L46 130 Z" fill="none" stroke="url(#sigGrad)" strokeWidth="3"
        initial={{pathLength:0,opacity:0,rotate:-4}} animate={{pathLength:1,opacity:[0,.68,.68,0],rotate:0}}
        transition={{duration:3.15,ease:[.16,1,.3,1]}}/>
    </svg>
  }

  if(type==='rings'){
    return <svg viewBox="0 0 520 260" style={common}>
      <motion.circle cx="210" cy="130" r="92" fill="none" stroke="#9b8cff" strokeWidth="3"
        initial={{scale:.55,opacity:0}} animate={{scale:1,opacity:[0,.55,.55,0]}}
        transition={{duration:3.1,ease:[.16,1,.3,1]}}/>
      <motion.circle cx="310" cy="130" r="92" fill="none" stroke="#68c7ff" strokeWidth="3"
        initial={{scale:.55,opacity:0}} animate={{scale:1,opacity:[0,.55,.55,0]}}
        transition={{duration:3.1,delay:.12,ease:[.16,1,.3,1]}}/>
    </svg>
  }

  if(type==='dots'){
    const dots=[[70,160],[150,90],[240,145],[335,70],[445,120]]
    return <svg viewBox="0 0 520 260" style={common}>
      <motion.path d="M70 160 L150 90 L240 145 L335 70 L445 120" fill="none" stroke="url(#sigGrad)" strokeWidth="3"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:[0,.7,.7,0]}}
        transition={{duration:3.2,ease:[.16,1,.3,1]}}/>
      {dots.map(([cx,cy],i)=><motion.circle key={i} cx={cx} cy={cy} r="7" fill="#7b67f2"
        initial={{scale:0,opacity:0}} animate={{scale:[0,1,1,0],opacity:[0,1,1,0]}}
        transition={{duration:2.7,delay:.22+i*.12,times:[0,.18,.76,1]}}/>)}
    </svg>
  }

  if(type==='arrow'){
    return <svg viewBox="0 0 520 260" style={common}>
      <motion.path d="M46 180 C155 180 172 88 286 105 C362 116 392 72 455 57" fill="none" stroke="url(#sigGrad)" strokeWidth="4" strokeLinecap="round"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:[0,.78,.78,0]}}
        transition={{duration:3.2,ease:[.16,1,.3,1]}}/>
      <motion.path d="M425 44 L458 56 L438 84" fill="none" stroke="#65c8ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:[0,0,1,0]}}
        transition={{duration:3.2,times:[0,.58,.72,1]}}/>
    </svg>
  }

  if(type==='steps'){
    return <svg viewBox="0 0 520 260" style={common}>
      <motion.path d="M58 194 H150 V156 H242 V118 H334 V80 H454" fill="none" stroke="url(#sigGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:[0,.75,.75,0]}}
        transition={{duration:3.2,ease:[.16,1,.3,1]}}/>
    </svg>
  }

  return <svg viewBox="0 0 520 260" style={common}>
    <motion.path d="M24 130 H496" fill="none" stroke="url(#sigGrad)" strokeWidth="3" strokeLinecap="round"
      initial={{pathLength:0,opacity:0}} animate={{pathLength:[0,1,1],opacity:[0,.68,.68,0]}}
      transition={{duration:3.1,times:[0,.42,.78,1],ease:[.16,1,.3,1]}}/>
  </svg>
}

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
      cooldownUntil.current=now+4100
      setPulse(p=>p+1)
      setVisible(true)
      if(hideTimer.current) window.clearTimeout(hideTimer.current)
      hideTimer.current=window.setTimeout(()=>setVisible(false),3300)
    }

    const routeTimer=window.setTimeout(trigger,450)

    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting || entry.intersectionRatio<.58 || seen.current.has(entry.target)) return
        seen.current.add(entry.target)

        const all=[...document.querySelectorAll('main section')]
        const index=all.indexOf(entry.target as HTMLElement)

        // Show on selected major sections, not continuously on every section.
        if(index>=0 && index%2===1) trigger()
      })
    },{threshold:[.58,.72]})

    const observeTimer=window.setTimeout(()=>{
      document.querySelectorAll('main section').forEach(section=>observer.observe(section))
    },100)

    return ()=>{
      window.clearTimeout(routeTimer)
      window.clearTimeout(observeTimer)
      if(hideTimer.current) window.clearTimeout(hideTimer.current)
      observer.disconnect()
    }
  },[location.pathname])

  const item=signatures[(Math.max(pulse,1)-1)%signatures.length]
  const position=(pulse%4)

  return <AnimatePresence>
    {visible&&<motion.div
      key={`${location.pathname}-${pulse}`}
      initial={{opacity:0}}
      animate={{opacity:[0,1,1,0]}}
      exit={{opacity:0}}
      transition={{duration:3.25,times:[0,.11,.8,1]}}
      aria-hidden="true"
      style={{
        position:'fixed',
        zIndex:58,
        pointerEvents:'none',
        width:'min(560px, 76vw)',
        height:'280px',
        left:position===0?'6%':position===2?'auto':'50%',
        right:position===2?'6%':'auto',
        top:position===1?'18%':position===3?'auto':'50%',
        bottom:position===3?'7%':'auto',
        transform:(position===0||position===2)?'translateY(-50%)':'translateX(-50%)',
        display:'grid',
        placeItems:'center',
        filter:'drop-shadow(0 18px 40px rgba(90,72,140,.10))',
      }}
    >
      <svg width="0" height="0" style={{position:'absolute'}}>
        <defs>
          <linearGradient id="sigGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a391ff"/>
            <stop offset="55%" stopColor="#776cf2"/>
            <stop offset="100%" stopColor="#66c8ff"/>
          </linearGradient>
        </defs>
      </svg>

      <Shape type={item.shape}/>

      <motion.div
        initial={{opacity:0,y:18,scale:.96,filter:'blur(8px)'}}
        animate={{opacity:[0,1,1,0],y:[18,0,0,-9],scale:[.96,1,1,.985],filter:['blur(8px)','blur(0px)','blur(0px)','blur(7px)']}}
        transition={{duration:2.65,delay:.38,times:[0,.22,.76,1],ease:[.16,1,.3,1]}}
        style={{
          position:'relative',
          zIndex:2,
          textAlign:'center',
          maxWidth:'88%',
          padding:'24px',
        }}
      >
        <div style={{
          fontFamily:"'Manrope', system-ui, sans-serif",
          fontWeight:800,
          fontSize:item.text.length>22?'clamp(1.25rem,3.2vw,2.4rem)':'clamp(1.8rem,5vw,4.4rem)',
          letterSpacing:item.text.length>22?'-.035em':'-.055em',
          lineHeight:.95,
          color:'#17161a',
          textShadow:'0 2px 18px rgba(255,255,255,.7)',
        }}>{item.text}</div>

        {item.sub&&<motion.div
          initial={{opacity:0,y:8}}
          animate={{opacity:[0,.72,.72,0],y:[8,0,0,-4]}}
          transition={{duration:2.2,delay:.72,times:[0,.18,.76,1]}}
          style={{
            marginTop:'13px',
            fontFamily:"'DM Mono', monospace",
            fontSize:'clamp(.52rem,1.2vw,.68rem)',
            letterSpacing:'.11em',
            color:'#625d68',
          }}
        >{item.sub}</motion.div>}
      </motion.div>
    </motion.div>}
  </AnimatePresence>
}
