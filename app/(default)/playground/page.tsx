import { Button } from '@/components/ui/button'
import type { Content } from '@/constants/playground'
import { contentsType, playgroundContents } from '@/constants/playground'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Playground',
  description: '実用的な実装を一覧化したページ',
}

export default function Page() {
  // contentsMapに各タイプのコンテンツをマッピングする
  const contentsMap = new Map<Content['type'], Content[]>()
  playgroundContents.forEach((sortedContent) => {
    const currentContent = contentsMap.get(sortedContent.type)
    currentContent
      ? contentsMap.set(sortedContent.type, currentContent.concat(sortedContent))
      : contentsMap.set(sortedContent.type, [sortedContent])
  })

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="text-balance text-4xl font-bold">Shunの遊び場</h1>
        <p className="text-muted-foreground">Shunが実装できるものを一覧化したページです。</p>
      </div>
      {Array.from(contentsMap).map((map) => {
        const type = map[0]
        const contents = map[1]
        return (
          <div key={type} className="mb-8 flex flex-col">
            {/* 分類ロゴ */}
            <div className="pb-2 text-xl">{contentsType[type] ?? '分類なし'}</div>
            {/* コンテンツ */}
            <div className="flex flex-wrap gap-4 pl-6">
              {contents.map((content) => (
                <Button key={content.path} variant="outline" asChild>
                  <Link href={`/playground/${content.path}`} className="flex gap-2 text-wrap">
                    {contentsType[content.type]}
                    {content.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
