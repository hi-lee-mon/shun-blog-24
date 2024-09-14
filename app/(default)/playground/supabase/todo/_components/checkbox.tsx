'use client'
import { updateCheck } from '@/app/(default)/playground/supabase/todo/_components/action'
import { useOptimistic } from 'react'

export default function Checkbox({ completed, todoId }: { completed: boolean; todoId: string }) {
  const [optimisticCheck, setOptimisticCheck] = useOptimistic(
    completed,
    (_state, opValue: boolean) => opValue,
  )

  return (
    <input
      type="checkbox"
      checked={optimisticCheck}
      onChange={async () => {
        setOptimisticCheck(!optimisticCheck)
        await updateCheck({
          completed: !optimisticCheck,
          todoId,
        })
      }}
    />
  )
}
