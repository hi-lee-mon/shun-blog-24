'use client'

import { usePost } from '@/app/(default)/playground/swr/usePost'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Content() {
  const defaultPageIndex = 1
  const [pageIndex, setPageIndex] = useState(defaultPageIndex)

  // この API URL は、React の状態としてページのインデックスを含んでいます
  const { data, isLoading, error } = usePost(String(pageIndex))

  // ... ローディングとエラー状態を処理します
  if (isLoading) return <p>ロード中・・・</p>
  if (error)
    return (
      <div>
        <p>読み込みエラーが発生</p>
        <p>fetcherでエラーをthrowすることでエラーハンドリングを行う</p>
        <Button onClick={() => setPageIndex(defaultPageIndex)}>1ページ目に戻る</Button>
      </div>
    )
  return (
    <div className="flex flex-col gap-4">
      {data?.title}
      <Button onClick={() => setPageIndex(pageIndex - 1)}>前</Button>
      <Button onClick={() => setPageIndex(pageIndex + 1)}>次</Button>
    </div>
  )
}
