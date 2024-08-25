import { Button } from '@/components/ui/button'
import { contentsType, playgroundContents } from '@/constants/playground'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Playground',
  description: '実用的な実装を一覧化したページ',
}

export default function Page() {
  return (
    <div>
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="text-balance text-4xl font-bold">Shunの遊び場</h1>
        <p className="text-muted-foreground">Shunが実装できるものを一覧化したページです。</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {playgroundContents.map((content) => (
          <div key={content.path}>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href={`/playground/${content.path}`} className="flex gap-2">
                  {contentsType[content.type]}
                  {content.title}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
