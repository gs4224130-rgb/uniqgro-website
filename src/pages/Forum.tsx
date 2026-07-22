import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Hash, MessageCircle, Plus, Search } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { forumCategories } from '../content/site'
import { listForumPosts } from '../lib/supabase/repository'
import type { ForumPost } from '../data/forum'

export default function Forum(){
  const [posts,setPosts]=useState<ForumPost[]>([])
  const [q,setQ]=useState('')
  const [cat,setCat]=useState('All')
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState('')

  useEffect(()=>{
    listForumPosts()
      .then(setPosts)
      .catch(()=>setError('Discussions could not load right now. Please try again later.'))
      .finally(()=>setLoading(false))
  },[])

  const filtered=useMemo(
    ()=>posts.filter(p=>(cat==='All'||p.category===cat)&&(`${p.title} ${p.excerpt}`.toLowerCase().includes(q.toLowerCase()))),
    [posts,q,cat]
  )

  const popular=useMemo(()=>{
    const counts=new Map<string,number>()
    posts.forEach(p=>counts.set(p.category,(counts.get(p.category)||0)+1))
    return [...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0,5)
  },[posts])

  return <>
    <PageHero eyebrow="FOUNDER FORUM" title="Build in public. Learn from people doing the work." lead="Ask specific questions, share evidence, get useful feedback and learn beside other founders and builders."/>

    <section className="v3-page-section">
      <div className="container">
        <div className="v3-forum-toolbar">
          <label className="v3-search">
            <Search size={19}/>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search discussions..." aria-label="Search forum posts"/>
          </label>
          <button className="btn primary v3-bouncy" onClick={()=>alert('Posting activates when forum authentication is connected.')}><Plus size={18}/>Start a Discussion</button>
        </div>

        <div className="v3-filter-scroll v3-forum-filters" role="group" aria-label="Filter discussions by category">
          <button className={cat==='All'?'active':''} onClick={()=>setCat('All')}>All</button>
          {forumCategories.map(x=><button className={cat===x?'active':''} onClick={()=>setCat(x)} key={x}>{x}</button>)}
        </div>

        <div className="v3-forum-layout">
          <div>
            {loading&&<div className="v3-forum-loading"><span/><span/><span/></div>}
            {error&&<div className="v3-empty-state">{error}</div>}

            <motion.div layout className="v3-forum-list">
              <AnimatePresence mode="popLayout">
                {filtered.map((p,i)=>
                  <motion.div
                    layout
                    key={p.id}
                    initial={{opacity:0,y:28}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0,y:16}}
                    transition={{duration:.38,delay:Math.min(i*.035,.18)}}
                  >
                    <Link className="v3-forum-card" to={`/forum/${p.id}`}>
                      <div className="v3-forum-card-top">
                        <span className="v3-forum-category">{p.category}</span>
                        <span className="v3-stage-badge">{p.stage}</span>
                        <span className="v3-comment-count"><MessageCircle size={15}/>{p.comments}</span>
                      </div>
                      <h2>{p.title}</h2>
                      <p>{p.excerpt}</p>
                      <div className="v3-forum-card-bottom">
                        <div><strong>{p.author}</strong>{p.tags.map(t=><span key={t}><Hash size={12}/>{t}</span>)}</div>
                        <ArrowUpRight className="v3-forum-arrow" size={21}/>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {!loading&&filtered.length===0&&<div className="v3-empty-state">No discussions match those filters yet.</div>}
          </div>

          <aside className="v3-forum-sidebar">
            <div className="v3-sidebar-card">
              <span className="v3-label">POPULAR TOPICS</span>
              <h3>What founders are discussing.</h3>
              {popular.length>0
                ? popular.map(([name,count])=><button key={name} onClick={()=>setCat(name)}><span>{name}</span><b>{count}</b></button>)
                : <p>Topics will appear as discussions grow.</p>}
            </div>

            <div className="v3-sidebar-card soft">
              <span className="v3-label">GOOD FORUM SIGNAL</span>
              <h3>Specific question. Real context. Useful evidence.</h3>
              <p>The best discussions make it easy for other founders to understand the problem and respond with something practical.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </>
}
