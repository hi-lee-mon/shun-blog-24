import { getUser } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export default function TodoForm() {
  // TODO: 送信中の表現、入力テキストのクリア、try,catch処理
  return (
    <form
      action={async (formData) => {
        'use server'
        const supabase = createClient()
        const user = await getUser(supabase)
        if (!user) {
          alert('ログインしてください')
          return
        }
        await supabase.from('todos').insert({
          title: formData.get('title') as string,
          user_id: user.id,
        })
        revalidatePath('../', 'page')
      }}
      className="flex items-center gap-2"
    >
      <input type="text" name="title" placeholder="食材を買いに行く" />
      <button type="submit">追加</button>
    </form>
  )
}
