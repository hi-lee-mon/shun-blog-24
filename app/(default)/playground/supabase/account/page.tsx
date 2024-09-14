import AccountForm from '@/app/(default)/playground/supabase/account/account-form'
import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const supabase = createClient()
  const user = await getUser(supabase)

  if (!user) {
    return redirect('login')
  }

  return (
    <div>
      <AccountForm user={user} />
    </div>
  )
}
