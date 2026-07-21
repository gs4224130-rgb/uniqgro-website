import { useEffect } from 'react'
export function SEO({title,description}:{title:string;description?:string}){
  useEffect(()=>{ document.title=title; const m=document.querySelector('meta[name="description"]'); if(m && description) m.setAttribute('content',description) },[title,description])
  return null
}
