import { Button } from '@/components/ui/button'
import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import { Trash } from 'lucide-react'
import { revalidatePath } from 'next/cache'

export default function DeleteForm({ todoTitle, todoId }: { todoTitle: string; todoId: string }) {
  return (
    <form
      action={async () => {
        'use server'
        const supabase = createClient()
        const user = await getUser(supabase)
        if (!user) {
          alert('ログインしてください')
          return
        }
        await supabase.from('todos').delete().eq('id', todoId)
        revalidatePath('../', 'page')
      }}
      className="flex items-center gap-2"
    >
      <Button size="icon" variant="destructive">
        <Trash className="size-[1.2rem]" />
        <span className="sr-only">{todoTitle}を削除</span>
      </Button>
    </form>
  )
}
