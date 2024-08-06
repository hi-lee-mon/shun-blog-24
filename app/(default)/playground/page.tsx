import Nextjs from '@/components/logo/next-logo'
import { Button } from '@/components/ui/button'
import { Wrench } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

const Types = {
  none: null,
  next: <Nextjs />,
  wip: <Wrench />,
}

type Content = {
  title: string
  path: string
  type: keyof typeof Types
}

const contents: Content[] = [
  {
    title: '実験用',
    path: 'wip',
    type: 'none',
  },
  {
    title: 'リンクカード',
    path: 'link-card',
    type: 'none',
  },
  {
    title: 'ヘッダーメニュー',
    path: 'header-menu',
    type: 'none',
  },
  {
    title: 'カード',
    path: 'card',
    type: 'none',
  },
  {
    title: 'パラレルルート・インターセプトルート',
    path: 'para-inter-root',
    type: 'next',
  },
]

export const metadata: Metadata = {
  title: 'Playground',
  description: '実用的な実装を一覧化したページ',
}

export default function Page() {
  return (
    <div className="flex gap-2">
      {contents.map((content) => (
        <div key={content.path}>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href={`/playground/${content.path}`} className="flex gap-2">
                {Types[content.type]}
                {content.title}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
