'use client'

import { useUserFormContext } from '@/app/(default)/playground/react-hook-form-confirm/useUserFormContext'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

export default function UserFormContextForm() {
  const { control, handleSubmit } = useUserFormContext()
  const router = useRouter()
  return (
    <div>
      <h1 className="text-xl font-bold">ユーザ情報をコンテキスト経由で受け渡す</h1>
      <form
        onSubmit={handleSubmit(() => {
          router.push('/playground/react-hook-form-confirm/confirm')
        })}
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="taro" {...field} />
              </FormControl>
              <FormDescription>最大で10文字です</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="number" placeholder="20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>確認</Button>
      </form>
    </div>
  )
}
