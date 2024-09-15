'use client'

import Header from '@/app/(default)/playground/swr/header'
import Main from '@/app/(default)/playground/swr/main'
import { toast } from '@/hooks/use-toast'
import type { SWRConfiguration } from 'swr'
import { SWRConfig } from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)

  // もしステータスコードが 200-299 の範囲内では無い場合、
  // レスポンスをパースして投げようとします。
  if (!res.ok) {
    const error = new Error('データの取得中にエラーが発生しました。')
    throw error
  }

  return res.json()
}

/**
 * グローバルなSWR設定（個別設定のほうが優先される）
 */
const swfConfig = {
  fetcher,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
  revalidateOnFocus: false,
  onError: (error) => {
    if (error.status !== 403 && error.status !== 404) {
      // エラーをSentryに送信するか、
      // 通知UIを表示することができます。
      toast({
        title: error.message,
        description: error.status,
        variant: 'destructive',
      })
    }
  },
} satisfies SWRConfiguration

export default function Content() {
  return (
    <SWRConfig value={swfConfig}>
      <Header />
      <Main />
    </SWRConfig>
  )
}
