import clsx from 'clsx'
import React from 'react'

/**
 * forwardRefの引数にコンポーネントを渡すと、そのコンポーネントのrefを取得できる
 * 将来的にそのままrefを渡せるようにするらしい
 * またrefというpropsを使用しなければforwardRefを使用せずにrefを渡すことができる
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={clsx('rounded-lg border bg-muted shadow-sm', className)} // 上書き可能なクラスを渡す
    ref={ref} // refを渡す
    {...props} // divタグのpropsはそのまま渡す
  />
))
// エラー時にコンポーネント名をログとして出力するためdisplayNameを設定する必要がある
Card.displayName = 'Card'

export default function Page() {
  return (
    <Card className="p-4">
      <h1 className="text-xl font-bold">見出し</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt
        temporibus sunt necessitatibus eaque labore error eos nesciunt harum
        deserunt, dignissimos ratione voluptate vel quisquam fugit, veritatis
        inventore ipsa aspernatur?
      </p>
    </Card>
  )
}
