import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10 tracking-wide">{children}</main>
      <Footer />
    </>
  )
}
