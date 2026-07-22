import { useMemo } from 'react'
import { motion } from 'framer-motion'

export function GrowthLine({className=''}:{className?:string}){
  const variant = useMemo(()=>Math.floor(Math.random()*4),[])
  return (
    <div className={`v4-growth-line variant-${variant} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 900 220" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`growth-gradient-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9d8cff"/>
            <stop offset="55%" stopColor="#6f7ff5"/>
            <stop offset="100%" stopColor="#62c8ff"/>
          </linearGradient>
        </defs>
        <motion.path
          d="M28 166 C160 166 190 70 330 82 C500 98 515 190 665 128 C760 88 800 55 872 36"
          fill="none"
          stroke={`url(#growth-gradient-${variant})`}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{pathLength:0,opacity:0}}
          animate={{pathLength:[0,1,1],opacity:[0,.72,.72,0]}}
          transition={{duration:4.2,times:[0,.62,.82,1],delay:.35,ease:[.16,1,.3,1]}}
        />
        <motion.circle r="7" fill="#7b67f2" initial={{opacity:0}} animate={{opacity:[0,1,1,0]}} transition={{duration:4.2,times:[0,.12,.82,1],delay:.35}}>
          <animateMotion dur="3.1s" begin=".75s" fill="freeze" path="M28 166 C160 166 190 70 330 82 C500 98 515 190 665 128 C760 88 800 55 872 36"/>
        </motion.circle>
      </svg>
    </div>
  )
}
