import AccountForm from '@/app/(default)/playground/supabase/account/account-form'
import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function createTodo(formData: FormData) {
  'use server'
  const supabase = createClient()
  const result = await supabase.from('todos').insert({
    title: formData.get('title') as string,
    user_id: formData.get('userId') as string,
  })

  revalidatePath('/', 'layout')

  console.log('実行')
  console.log(result)

  // Logic to mutate data...
}

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
