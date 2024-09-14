import { Button } from '@/components/ui/button'
import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Page() {
  const supabase = createClient()
  const user = await getUser(supabase)

  if (!user) {
    redirect('supabase/login')
  }

  return (
    <div className="flex flex-col gap-6">
      {user && (
        <div className="flex items-center justify-between">
          <p className="font-bold">ログイン中</p>
          {/* route handlerでログアウトする */}
          <form action="/playground/supabase/api/auth/signout" method="post">
            <Button type="submit">ログアウト</Button>
          </form>
        </div>
      )}
      <Button asChild variant="link">
        <Link href="supabase/account">Accountページへ</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="supabase/todo">TODOリストページへ</Link>
      </Button>
    </div>
  )
}
