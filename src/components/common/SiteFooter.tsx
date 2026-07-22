import { Link } from 'react-router-dom'

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
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} UniqGro</span><span>We don’t work for founders. We work with founders.</span></div>
  </footer>
}
