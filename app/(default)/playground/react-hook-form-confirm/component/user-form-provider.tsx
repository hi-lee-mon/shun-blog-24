'use client'
import { FormProvider, useForm } from 'react-hook-form'

export default function UserFormProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const form = useForm()
  return <FormProvider {...form}>{children}</FormProvider>
}
