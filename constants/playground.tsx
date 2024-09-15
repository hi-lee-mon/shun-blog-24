import { MdxLogo } from '@/components/logo/mdx-logo'
import { NextjsLogo } from '@/components/logo/nextjs-logo'
import { ReactHookFormLogo } from '@/components/logo/react-hook-form-logo'
import { ReactLogo } from '@/components/logo/react-logo'
import { SupabaseLogo } from '@/components/logo/supabase-logo'
import { SwrLogo } from '@/components/logo/swr-logo'
import { Wrench } from 'lucide-react'

export const contentsType = {
  none: null,
  next: <NextjsLogo />,
  wip: <Wrench />,
  react: <ReactLogo />,
  reactHookFrom: <ReactHookFormLogo />,
  mdx: <MdxLogo />,
  supabase: <SupabaseLogo />,
  swr: <SwrLogo />,
}

type Content = {
  title: string
  path: string
  type: keyof typeof contentsType
}

export const playgroundContents: Content[] = [
  {
    title: '実験用',
    path: 'wip',
    type: 'none',
  },
  {
    title: 'リンクカード',
    path: 'link-card',
    type: 'none',
  },
  {
    title: 'ヘッダーメニュー',
    path: 'header-menu',
    type: 'none',
  },
  {
    title: 'カード',
    path: 'card',
    type: 'none',
  },
  {
    title: 'パラレルルート・インターセプトルート',
    path: 'para-inter-root',
    type: 'next',
  },
  {
    title: 'forwardRef',
    path: 'forward-ref',
    type: 'react',
  },
  {
    title: '送信確認画面',
    path: 'react-hook-form-confirm',
    type: 'reactHookFrom',
  },
  {
    title: 'MDX',
    path: 'mdx',
    type: 'mdx',
  },
  {
    title: 'メール認証、楽観的更新、ServerActionでTODOアプリ',
    path: 'supabase',
    type: 'supabase',
  },
  {
    title: 'SWR',
    path: 'swr',
    type: 'swr',
  },
]
