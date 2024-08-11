import { z } from 'zod'

export const UserSchema = z.object({
  name: z.string().min(1).max(10),
  age: z.coerce.number().min(1).max(150),
})

export type UserSchema = z.infer<typeof UserSchema>
