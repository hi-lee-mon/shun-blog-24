import { cn } from '@/lib/utils'
import Footer from './footer'
import Header from './header'

export default function HeaderMainFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('min-h-dvh flex flex-col', className)}>
      <Header />
      {children}
      {/* メインコンテンツ */}
      <Footer />
    </div>
  )
}
