import { describe,it,expect } from 'vitest'
import { journey } from '../content/site'
describe('journey',()=>{it('has six stages',()=>{expect(journey).toHaveLength(6)})})
