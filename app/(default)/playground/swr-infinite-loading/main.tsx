'use client'

import type { User } from '@/app/(default)/playground/swr-infinite-loading/type'
import { Loader2 } from 'lucide-react'
import { useCallback, useRef } from 'react'
import { InView } from 'react-intersection-observer'
import useSWRInfinite from 'swr/infinite'

const fetcher = async (url: string) => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  return fetch(url).then((res) => res.json())
}

export default function Main() {
  const isLast = useRef(false)

  /**
   * swrから渡ってきたpageIndexに応じてsearchParamsを書き換える
   */
  const getKey = useCallback((pageIndex: number) => {
    // 2ページ以上のときはnullを返すことで、強制的にローディングを終了させる(ページ送りが存在しないときの表示を確認するための記述)
    if (pageIndex !== 0 && pageIndex > 2) {
      isLast.current = true
      return null
    }
    /**
     * limitで1ページ毎に20件のリクエストを行うことを指定
     * offsetで取得するデータの開始位置を指定
     * swrはfetch結果を配列で保持してくれる
     * [userArrayPage1, userArrayPage2, ...]
     * 表示する前にflatMapで配列を1次元にする
     */
    return `/playground/swr-infinite-loading/api/getUser?limit=20&offset=${pageIndex * 20}`
  }, [])

  // fetcherを引数のなしで渡した場合、getKeyのreturnが自動的にfetchに渡される
  const { data, isValidating, size, setSize } = useSWRInfinite<User[]>(getKey, fetcher, {
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateFirstPage: false,
  })

  if (!data) return <Loader2 size={40} className="mx-auto my-10 animate-spin text-blue-500" />
  const users = data.flatMap((d) => d)

  return (
    <div>
      <h1 className="text-2xl font-bold">投稿記事一覧画面</h1>
      {users.map((user) => (
        <div key={user.id} className="mt-6 rounded-lg border p-4">
          <p>
            ななしさん<span className="ml-1 text-sm text-muted-foreground">@{user.id}</span>
          </p>
          <h2 className="text-xl font-bold">{user.title}</h2>
          <p className="p-4 text-sm">{user.body}</p>
        </div>
      ))}
      {/* バリデーション中ではないかつ、最後のページでない場合表示する */}
      {!isValidating && !isLast.current && (
        // InViewが表示された瞬間にfetchが走る
        <InView
          onChange={(inView) => {
            if (inView) {
              console.log('現在のページ', size)
              // setSizeが更新されるとfetcherが実行される
              setSize(size + 1)
            }
          }}
        />
      )}
      {isValidating && <Loader2 size={40} className="mx-auto my-10 animate-spin text-blue-500" />}
      {isLast.current && (
        <p className="my-10 text-center text-sm text-muted-foreground">
          これ以上の投稿データはありません
        </p>
      )}
    </div>
  )
}
