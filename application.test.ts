import { describe,it,expect } from 'vitest'
import { founderApplicationSchema } from '../lib/validation/application'
describe('founder application validation',()=>{it('rejects incomplete data',()=>{expect(founderApplicationSchema.safeParse({}).success).toBe(false)})})
