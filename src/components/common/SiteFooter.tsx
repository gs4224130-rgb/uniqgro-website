import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const letters = 'UNIQGRO'.split('')

export function SiteFooter(){
  return <footer className="footer">
    <div className="container footer-grid">
      <div>
        <div className="brand">UNIQ<b>GRO</b></div>
        <p className="footer-description">A founder-first startup growth ecosystem built in India for the idea stage and the work that follows.</p>
      </div>
      <div><strong>Build</strong><Link to="/why-uniqgro">Why UniqGro</Link><Link to="/how-it-works">How It Works</Link><Link to="/capabilities">Capabilities</Link></div>
      <div><strong>Community</strong><Link to="/community">Founder Community</Link><Link to="/forum">Forum</Link><Link to="/resources">Resources</Link></div>
      <div><strong>Company</strong><Link to="/about">About</Link><Link to="/founder">Founder</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
    </div>

    <div className="container v5-footer-signature" aria-hidden="true">
      <motion.div
        className="v5-footer-line left"
        initial={{scaleX:0,opacity:0}}
        whileInView={{scaleX:[0,1,1,0],opacity:[0,1,1,0]}}
        viewport={{once:true,amount:.55}}
        transition={{duration:4.2,times:[0,.24,.84,1],ease:[.16,1,.3,1]}}
      />
      <div className="v5-footer-word">
        {letters.map((letter,i)=><motion.span
          key={`${letter}-${i}`}
          initial={{opacity:0,y:18,filter:'blur(8px)'}}
          whileInView={{opacity:[0,1,1,0],y:[18,0,0,-8],filter:['blur(8px)','blur(0px)','blur(0px)','blur(7px)']}}
          viewport={{once:true,amount:.55}}
          transition={{duration:3.15,delay:.62+i*.075,times:[0,.2,.76,1],ease:[.16,1,.3,1]}}
        >{letter}</motion.span>)}
      </div>
      <motion.div
        className="v5-footer-line right"
        initial={{scaleX:0,opacity:0}}
        whileInView={{scaleX:[0,1,1,0],opacity:[0,1,1,0]}}
        viewport={{once:true,amount:.55}}
        transition={{duration:4.2,delay:.14,times:[0,.24,.84,1],ease:[.16,1,.3,1]}}
      />
    </div>

    <div className="container footer-bottom"><span>© {new Date().getFullYear()} UniqGro</span><span>We don’t work for founders. We work with founders.</span></div>
  </footer>
}
