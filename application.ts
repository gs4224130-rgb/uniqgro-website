import { z } from 'zod'
export const founderApplicationSchema = z.object({
  fullName:z.string().min(2), email:z.string().email(), phone:z.string().min(7), city:z.string().min(2), role:z.string().min(2),
  company:z.string().optional(), idea:z.string().min(12), problem:z.string().min(20), customer:z.string().min(5), stage:z.string().min(2), industry:z.string().min(2),
  conversations:z.coerce.number().min(0), evidence:z.string().min(15), assumption:z.string().min(10), competitors:z.string().min(2),
  why:z.string().min(20), weeklyHours:z.coerce.number().min(1), team:z.string().min(2), built:z.string().min(2), bottleneck:z.string().min(5), support:z.string().min(5), next30:z.string().min(10),
  accurate:z.literal(true), privacy:z.literal(true), contact:z.literal(true), acknowledge:z.literal(true),
})
export type FounderApplication = z.infer<typeof founderApplicationSchema>
