import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Page() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        <strong>ご入力頂いたメールアドレスへ パスワード設定用URLを送信しました。</strong>
      </p>
      <p>
        ※メールが届いてから、24時間以内にメール文中のURLにアクセスしてアカウント作成を完了してください。
      </p>
      <p>※届かない場合は、アカウントが存在しないか、入力したメールアドレスが間違っています。</p>
      <Button>
        <Link href="../supabase">ログイン画面へ</Link>
      </Button>
    </div>
  )
}
