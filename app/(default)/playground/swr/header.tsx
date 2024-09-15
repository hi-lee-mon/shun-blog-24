'use client'
import { usePost } from '@/app/(default)/playground/swr/usePost'

export default function Header() {
  const { data, isLoading, error } = usePost('1')

  if (isLoading) return <p>ロード中・・・</p>
  if (error) return <p>読み込みエラー</p>
  return (
    <div className="my-4 flex h-6 items-center border-b">
      初期表示時にPOST ID:{data?.id}は1度しかリクエストされない
    </div>
  )
}
