import type { UserSchema } from '@/app/(default)/playground/react-hook-form-confirm/schema'
import { useFormContext } from 'react-hook-form'

export const useUserFormContext = () => {
  return useFormContext<UserSchema>()
}
