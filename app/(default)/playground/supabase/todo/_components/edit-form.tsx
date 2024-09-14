'use client'
import { editTodoTitle } from '@/app/(default)/playground/supabase/todo/_components/action'
import { Input } from '@/components/ui/input'

export default function EditForm({ todoTitle, todoId }: { todoTitle: string; todoId: string }) {
  return (
    <form
      action={async (formData: FormData) => {
        await editTodoTitle(formData.get('title') as string, todoId)
      }}
      className="flex items-center gap-2"
    >
      <Input
        type="text"
        name="title"
        defaultValue={todoTitle}
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && (e.key === 'Enter' || e.key === 'NumpadEnter')) {
            e.preventDefault()
            e.currentTarget.form?.requestSubmit()
          }
        }}
        onBlur={(e) => {
          e.preventDefault()
          e.currentTarget.form?.requestSubmit()
        }}
        className="border-x-0 border-t-0"
      />
    </form>
  )
}
