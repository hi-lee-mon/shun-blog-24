import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // request.cookies.setでSCにリフレッシュされた認証トークンを渡す=>SC自身で同じトークンを更新することを防げる
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            // リフレッシュされた認証トークンをブラウザに渡す=>古いトークンを置き換える。
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // 認証トークンの更新
  await supabase.auth.getUser()

  return supabaseResponse
}
