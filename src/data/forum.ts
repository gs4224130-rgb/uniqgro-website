export type ForumPost = { id:string; title:string; category:string; stage:string; excerpt:string; author:string; comments:number; created:string; tags:string[] }
export const demoPosts: ForumPost[] = [
  { id:'first-10-interviews', title:'How do I structure my first 10 customer interviews?', category:'Customer Discovery', stage:'Idea stage', excerpt:'I have a problem hypothesis but I am worried I will bias the calls. What questions should I avoid?', author:'Demo Founder', comments:7, created:'Demo data', tags:['interviews','validation'] },
  { id:'mvp-scope', title:'What is the minimum credible MVP for a service marketplace?', category:'Product & MVP', stage:'Validation', excerpt:'Trying to cut scope without making the experience too weak to learn from.', author:'Demo Builder', comments:4, created:'Demo data', tags:['mvp','scope'] },
  { id:'positioning-test', title:'Three positioning directions — how would you test them?', category:'Brand & Positioning', stage:'Pre-launch', excerpt:'Looking for a way to compare messaging with real prospects before we redesign anything.', author:'Demo Founder', comments:9, created:'Demo data', tags:['positioning','messaging'] },
]
