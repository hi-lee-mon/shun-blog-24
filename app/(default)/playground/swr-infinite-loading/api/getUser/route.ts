import type { User } from '@supabase/supabase-js'
import { NextResponse, type NextRequest } from 'next/server'

// /auth/confirm をルーティングするための GET リクエストに対するハンドラーを作成
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit')
  const offset = searchParams.get('offset')

  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = (await result.json()) as User[]

  const redirectTo = request.nextUrl.clone()

  if (offset === null || limit === null) {
    redirectTo.pathname = '/error'
    return NextResponse.redirect(redirectTo)
  }

  const response = data.splice(Number(offset), Number(limit))

  const next = '/playground/swr-infinite-loading'

  // リダイレクト用のリンクを作成
  redirectTo.pathname = next
  return Response.json(response)
}
