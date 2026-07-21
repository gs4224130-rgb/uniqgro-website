export type ResourceItem = { title:string; description:string; category:string; readTime:string; publishDate:string; author:string; status:'published'|'coming-soon'; url:string }
export const resources: ResourceItem[] = [
  { title:'Founder Playbook 01: How to Validate a Startup Idea', description:'A practical guide to move from assumptions to evidence before you overbuild.', category:'Idea Validation', readTime:'12 min', publishDate:'Coming soon', author:'UniqGro', status:'coming-soon', url:'#' },
  { title:'Customer Discovery Interview Map', description:'A field-ready structure for founder interviews without leading the witness.', category:'Customer Discovery', readTime:'8 min', publishDate:'Coming soon', author:'UniqGro', status:'coming-soon', url:'#' },
  { title:'From Positioning to Proof', description:'How message, offer and evidence work together before growth spend.', category:'Brand & Positioning', readTime:'10 min', publishDate:'Coming soon', author:'UniqGro', status:'coming-soon', url:'#' },
]
