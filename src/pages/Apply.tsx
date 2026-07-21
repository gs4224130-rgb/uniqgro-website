import { FormEvent, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { founderApplicationSchema } from '../lib/validation/application'
import { submitFounderApplication } from '../lib/supabase/repository'
import { SEO } from '../lib/seo/SEO'

const stages=['Idea Stage','Starting','MVP','Early Traction','Growth Stage']
type FormData={fullName:string;phone:string;vision:string;mission:string;stage:string}
const initial:FormData={fullName:'',phone:'',vision:'',mission:'',stage:''}

export default function Apply(){
 const [data,setData]=useState<FormData>(initial);const [error,setError]=useState('');const [done,setDone]=useState(false);const [sending,setSending]=useState(false)
 async function submit(e:FormEvent){e.preventDefault();setError('');const parsed=founderApplicationSchema.safeParse(data);if(!parsed.success){setError('Please complete your basic details, choose your stage, and tell us your vision and mission.');return}try{setSending(true);await submitFounderApplication(parsed.data);setDone(true)}catch{setError('Your form could not be sent right now. Please try again.')}finally{setSending(false)}}
 if(done)return <main className="v2-form-page"><SEO title="Application received — UniqGro" description="Your UniqGro founder application has been received."/><section className="v2-form-success"><CheckCircle2 size={42}/><span>APPLICATION RECEIVED</span><h1>Thank you.<br/>Let’s take a closer look.</h1><p>We’ll review the vision, mission and stage you shared and use that as the starting point for the next conversation.</p></section></main>
 return <main className="v2-form-page"><SEO title="Build with UniqGro" description="Share your basic details, vision, mission and current startup stage."/><section className="v2-form-intro"><span>BUILD WITH UNIQGRO</span><h1>Keep it simple.<br/><em>Tell us what you’re building.</em></h1><p>No long application. No pitch-deck theatre. Just the basics we need to understand where you are and where you want to go.</p></section><form className="v2-simple-form" onSubmit={submit}>
  <div className="v2-form-row"><label><span>Your name</span><input value={data.fullName} onChange={e=>setData({...data,fullName:e.target.value})} placeholder="Full name" autoComplete="name"/></label><label><span>Phone / WhatsApp</span><input value={data.phone} onChange={e=>setData({...data,phone:e.target.value})} placeholder="+91..." autoComplete="tel"/></label></div>
  <label><span>Your vision</span><textarea rows={4} value={data.vision} onChange={e=>setData({...data,vision:e.target.value})} placeholder="What do you want this company to become?"/></label>
  <label><span>Your mission</span><textarea rows={4} value={data.mission} onChange={e=>setData({...data,mission:e.target.value})} placeholder="What problem are you committed to solving, and for whom?"/></label>
  <fieldset><legend>Which stage are you at?</legend><div className="v2-stage-options">{stages.map(stage=><button type="button" key={stage} className={data.stage===stage?'active':''} onClick={()=>setData({...data,stage})}>{stage}</button>)}</div></fieldset>
  {error&&<div className="v2-form-error">{error}</div>}<button className="v2-submit" type="submit" disabled={sending}>{sending?'Sending…':'Let’s build together'} <ArrowRight size={18}/></button>
 </form></main>
}
