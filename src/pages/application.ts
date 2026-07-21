import { z } from 'zod'
export const founderApplicationSchema=z.object({
  fullName:z.string().trim().min(2),
  phone:z.string().trim().min(7),
  vision:z.string().trim().min(10),
  mission:z.string().trim().min(10),
  stage:z.enum(['Idea Stage','Starting','MVP','Early Traction','Growth Stage']),
})
export type FounderApplication=z.infer<typeof founderApplicationSchema>
