import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { nav } from '../../content/site'

export function SiteHeader(){
  const [open,setOpen]=useState(false)
  useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open])
  return <>
    <div className="announcement">Founder applications are open · Start at the idea stage →</div>
    <header className="site-header"><div className="container nav">
      <Link className="brand" to="/">UNIQ<b>GRO</b></Link>
      <nav className="nav-links" aria-label="Primary">{nav.map(([label,to])=><NavLink key={to} to={to}>{label}</NavLink>)}<NavLink to="/forum">Forum</NavLink></nav>
      <div className="nav-actions"><Link className="btn ghost" to="/forum">Login / Forum</Link><Link className="btn primary" to="/apply">Apply to Build <ArrowUpRight size={16}/></Link></div>
      <button className="menu" onClick={()=>setOpen(true)} aria-label="Open navigation" aria-expanded={open}><Menu/></button>
    </div></header>
    {open&&<div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation"><button className="close" onClick={()=>setOpen(false)} aria-label="Close navigation"><X/></button><nav>{nav.map(([label,to])=><Link onClick={()=>setOpen(false)} key={to} to={to}>{label}</Link>)}<Link onClick={()=>setOpen(false)} to="/forum">Forum</Link><Link onClick={()=>setOpen(false)} to="/apply">Apply to Build</Link></nav></div>}
  </>
}
