'use server'

import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export const updateCheck = async ({
  completed,
  todoId,
}: {
  completed: boolean
  todoId: string
}) => {
  const supabase = createClient()
  const user = await getUser(supabase)
  if (!user) {
    alert('ログインしてください')
    return
  }

  await supabase.from('todos').update({ is_completed: completed }).eq('id', todoId)
  revalidatePath('../', 'page')
}

export const editTodoTitle = async (title: string, todoId: string) => {
  const supabase = createClient()
  const user = await getUser(supabase)
  if (!user) {
    alert('ログインしてください')
    return
  }
  await supabase.from('todos').update({ title }).eq('id', todoId)
  revalidatePath('../', 'page')
}
