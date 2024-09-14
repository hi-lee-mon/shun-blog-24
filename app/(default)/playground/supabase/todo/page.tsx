import Checkbox from '@/app/(default)/playground/supabase/todo/_components/checkbox'
import DeleteForm from '@/app/(default)/playground/supabase/todo/_components/delete-form'
import EditForm from '@/app/(default)/playground/supabase/todo/_components/edit-form'
import TodoForm from '@/app/(default)/playground/supabase/todo/_components/todo-form'
import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const supabase = createClient()
  const user = await getUser(supabase)

  if (!user) {
    redirect('login')
  }

  const { data: todos } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', {
      ascending: false,
    })

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">ServerActionsを使用したTODOページ</h1>
      <TodoForm />
      {todos?.map((todo) => (
        <div key={todo.id} className="flex items-center gap-2">
          <Checkbox completed={todo.is_completed} todoId={todo.id} />
          <EditForm todoTitle={todo.title} todoId={todo.id} />
          <DeleteForm todoTitle={todo.title} todoId={todo.id} />
        </div>
      ))}
    </div>
  )
}
