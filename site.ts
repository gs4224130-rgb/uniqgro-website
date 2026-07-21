export const site = {
  name: 'UniqGro',
  display: 'UNIQGRO',
  title: 'Build Companies. Not Alone.',
  founder: {
    name: 'Gourav Saini',
    role: 'Founder & CEO',
    responsibility: 'Vision, Strategy & Expansion',
    image: '/images/gourav-saini-founder.jpg',
  },
  officialLine: "WE DON’T WORK FOR FOUNDERS. WE WORK WITH FOUNDERS.",
  positioning: 'Most startup support begins after traction. UniqGro is built for the beginning.',
  mission: 'To help idea-stage and early-stage founders turn uncertainty into clear choices, credible brands, validated offers, repeatable growth and documented operating systems through real execution, founder support and long-term partnership.',
  vision: 'To build one of the world’s most trusted founder ecosystems, help create thousands of enduring companies and, over time, support at least 100 companies toward public markets in India and beyond.',
}

export const nav = [
  ['Why UniqGro', '/why-uniqgro'],
  ['How It Works', '/how-it-works'],
  ['Community', '/community'],
  ['Resources', '/resources'],
  ['About', '/about'],
] as const

export const journey = [
  { n:'01', title:'Ground Truth', q:'What are we actually trying to build, for whom and why now?', action:'Founder interview, problem framing, constraint mapping and baseline review.', founder:'Share truthful context, assumptions, access and constraints.', deliver:'One-page problem brief, baseline, risk map and priority bottleneck.', gate:'Is the problem specific enough to investigate?', evidence:'Clear customer, problem and constraint definition.' },
  { n:'02', title:'Validate the Problem', q:'Is this pain real enough for people to change behaviour or pay?', action:'Customer interview plan, evidence capture, competitor and substitute mapping.', founder:'Speak with customers and share raw evidence.', deliver:'Insight repository, problem score and validation report.', gate:'Continue, refine or stop.', evidence:'Repeated problem language, urgency and existing workarounds.' },
  { n:'03', title:'Refine the Bet', q:'What is the smallest credible offer we can test?', action:'Segment choice, value proposition, offer design and pricing hypotheses.', founder:'Choose trade-offs and commit to a testable direction.', deliver:'Offer architecture, positioning statement and experiment backlog.', gate:'Is the proposed solution testable and differentiated?', evidence:'Clear segment, promise, offer and measurable hypothesis.' },
  { n:'04', title:'Build the Foundation', q:'What must exist before we can responsibly enter the market?', action:'Brand direction, prototype/MVP, messaging, landing page, sales process and metrics setup.', founder:'Approve quickly, provide domain expertise and stay close to the build.', deliver:'Launch-ready foundation.', gate:'Can a real customer understand, trust and act?', evidence:'Usable prototype, coherent messaging and conversion path.' },
  { n:'05', title:'Win Proof', q:'Which signal proves we are moving in the right direction?', action:'Launch experiments, outreach, content, sales conversations and feedback loops.', founder:'Run conversations, follow up and share outcomes honestly.', deliver:'Experiment results, qualified pipeline, learning report and updated decisions.', gate:'Repeat, pivot, improve or pause.', evidence:'Qualified demand, conversion, retention or strong behavioural proof.' },
  { n:'06', title:'Systemise Growth', q:'How do we turn a win into a repeatable operating system?', action:'SOPs, retention loops, dashboards, automation, roles and review rhythms.', founder:'Own the operating cadence and keep standards visible.', deliver:'Operating playbook, scorecard and scale-readiness plan.', gate:'Hand off, continue partnership or scale selectively.', evidence:'Repeatability, improved retention and reliable operating cadence.' },
]

export const capabilitySystems = [
  { title:'Clarity System', items:['Startup diagnosis','Problem framing','Market research','Strategy'] },
  { title:'Validation System', items:['Customer interviews','Problem testing','Offer experiments','Pricing hypotheses'] },
  { title:'Brand System', items:['Positioning','Naming','Messaging','Visual direction','Trust assets'] },
  { title:'Growth System', items:['Go-to-market','Content','Sales','Partnerships','Retention'] },
  { title:'Operating System', items:['AI workflows','SOPs','Scorecards','Training','Scale readiness'] },
]

export const forumCategories = ['Idea Validation','Customer Discovery','Product & MVP','Brand & Positioning','Marketing & Growth','Sales & Partnerships','Operations & Systems','AI for Startups','Fundraising Readiness','Founder Mindset','Ask for Feedback','Find a Collaborator']
