import { updateSession } from '@/lib/supabase/middleware'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 画像ファイル系は処理をしない
  if (
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.gif')
  ) {
    return NextResponse.next()
  }

  // リクエストがあったタイミングでユーザのセッションを更新する
  return await updateSession(request)
}

export const config = {
  // middlewareを呼び出して良いパスを指定
  matcher: [
    /*
     * 以下のパスを除く全てのリクエストにマッチする
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - その他、拡張子が *.(svg|png|jpg|jpeg|gif|webp) のファイル
     */ {
      source: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
      // プリフェッチでmiddlewareが呼び出されないようにする
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
