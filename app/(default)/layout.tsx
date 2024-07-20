import HeaderMainFooter from '@/components/layout/header-main-footer-'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HeaderMainFooter>{children}</HeaderMainFooter>
}
