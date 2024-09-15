import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playground',
  description: '実用的な実装を一覧化したページ',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
