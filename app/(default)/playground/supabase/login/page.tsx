import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { login, signup } from './actions'

export default async function Page() {
  const supabase = createClient()
  const user = await getUser(supabase)
  if (user) {
    redirect('../supabase')
  }

  return (
    <div className="flex flex-col gap-4">
      <form>
        <div className="mb-4">
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" name="email" type="email" required />
          <Label htmlFor="password">パスワード</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <div className="flex gap-4">
          {/* 1つのフォームで2つのアクションを使い分ける */}
          <Button formAction={login}>ログイン</Button>
          <Button formAction={signup}>アカウント作成</Button>
        </div>
      </form>
    </div>
  )
}
