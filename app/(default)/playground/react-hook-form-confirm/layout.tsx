import UserFormProvider from '@/app/(default)/playground/react-hook-form-confirm/component/user-form-provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <UserFormProvider>{children}</UserFormProvider>
}
