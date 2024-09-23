import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="mb-4">存在しないページへのアクセス</h2>
      <Button asChild>
        <Link href="/">ホームに戻る</Link>
      </Button>
    </div>
  )
}
