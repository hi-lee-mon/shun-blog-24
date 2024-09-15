import { BreadcrumbLayout } from '@/components/layout/breadcrumb-layout'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <BreadcrumbLayout />
      <main className="container mx-auto px-5 py-10 tracking-wide">{children}</main>
      <Footer />
    </>
  )
}
