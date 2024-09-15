'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

type Todo = {
  id: string
  title: string
  completed: boolean
}

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')
  const addTodo = () => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ]
    })
    setTitle('')
  }
  const deleteTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id)
    })
  }
  const updateCheckState = (id: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    })
  }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="mt-2">バニラReactで作るTODOリスト</h1>
      <div className="flex gap-4">
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="リンゴを買う"
        />
        <Button onClick={addTodo}>追加</Button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between bg-muted p-4">
          <div className="flex items-center gap-2">
            <Input
              type="checkbox"
              checked={todo.completed}
              className="size-4"
              onClick={() => updateCheckState(todo.id)}
            />
            {todo.completed ? (
              <s>
                <p>{todo.title}</p>
              </s>
            ) : (
              <p>{todo.title}</p>
            )}
            <s></s>
          </div>
          <Button onClick={() => deleteTodo(todo.id)} variant="destructive">
            削除
          </Button>
        </div>
      ))}
    </div>
  )
}
