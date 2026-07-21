import { describe,it,expect } from 'vitest'
import { demoPosts } from '../data/forum'
describe('forum demo data',()=>{it('contains searchable posts',()=>{expect(demoPosts.filter(p=>p.title.toLowerCase().includes('customer')).length).toBeGreaterThan(0)})})
