'use client'
import { UserSchema } from '@/app/(default)/playground/react-hook-form-confirm/schema'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import type { FieldErrors } from 'react-hook-form'
import { useForm } from 'react-hook-form'

export default function ConfirmForm() {
  const form = useForm<UserSchema>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: '',
      age: 0,
    },
  })

  const { isSubmitSuccessful } = form.formState

  const createUser = async (data: UserSchema) => {
    console.log(data)
  }

  if (isSubmitSuccessful) {
    return (
      <div>
        <h2>入力内容の確認</h2>
        <pre>{JSON.stringify(form.getValues(), null, 2)}</pre>
        <Button
          onClick={() => {
            createUser(form.getValues())
          }}
        >
          送信
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            form.reset(undefined, { keepValues: true })
          }}
        >
          戻る
        </Button>
      </div>
    )
  }
  const handleSubmit = (data: UserSchema) => {
    console.log(data)
  }

  const handleError = (errors: FieldErrors<UserSchema>) => {
    console.log(errors)
  }

  return (
    <div className="rounded-md border px-10 py-4 shadow-sm">
      <h1 className="text-xl font-bold">画面遷移無しで確認画面を表示する</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">
          <FormField
            control={form.control}
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
            control={form.control}
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
          <Button type="submit">確認</Button>
        </form>
      </Form>
    </div>
  )
}
