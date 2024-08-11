'use client'
import type { UserSchema } from '@/app/(default)/playground/react-hook-form-confirm/schema'
import { useUserFormContext } from '@/app/(default)/playground/react-hook-form-confirm/useUserFormContext'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ConfirmContextForm() {
  const { getValues } = useUserFormContext()
  const router = useRouter()

  const createUser = async (data: UserSchema) => {
    console.log(data)
  }
  return (
    <div>
      <h2>入力内容の確認</h2>
      <pre>{JSON.stringify(getValues(), null, 2)}</pre>
      <Button
        onClick={() => {
          createUser(getValues())
        }}
      >
        送信
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          router.back()
        }}
      >
        戻る
      </Button>
    </div>
  )
}
