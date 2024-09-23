'use client' // ErrorコンポーネントはClient Componentsである必要がある

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // レポートサービスにエラーを記録する
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-3xl font-bold">何らかのエラーが発生しました</h2>
      <Button
        className="mb-4"
        onClick={
          // Segmentの再レンダリングを試みる
          () => reset()
        }
      >
        再接続する
      </Button>

      <Button asChild variant="link" className="text-blue-400">
        <Link href="/">ホームに戻る</Link>
      </Button>
    </div>
  )
}
