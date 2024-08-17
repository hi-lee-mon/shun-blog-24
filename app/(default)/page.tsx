import GithubLogo from '@/components/logo/github-logo'
import ZennLogo from '@/components/logo/zenn-logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: "Shun's Blog", // TODO:ページの説明を詳細にする
}

const Section = ({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) => {
  return (
    <section className={cn('py-8', className)}>
      <h2 className="inline-block	 border-b-2 text-xl font-bold">{title}</h2>
      <div className="p-4">{children}</div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto py-4 tracking-wide">
      <section className="mb-10">
        <h1 className="mb-4 text-balance text-4xl font-bold	tracking-wide">
          Kameda Shunsukeについて<span className="">🐢</span>
        </h1>
        <p className="mb-4 text-lg">
          Shunsukeは東京で働くフロントエンドエンジニアです。
          <br />
          主にReactを使用したWebアプリケーション開発をしています。
        </p>
        <Button asChild>
          <Link href="/blog">技術ブログページへ</Link>
        </Button>
      </section>
      <Section title="経歴" className="animate-[slide-in-bck-top_0.7s]">
        <div className="flex flex-col gap-4 border-l-2 px-2">
          <div>
            <span className="mr-2 font-bold">1997</span>神奈川県で生まれる
          </div>
          <div>
            <span className="mr-2 font-bold">2020</span>
            亜細亜大学 経済学部 経済学科 卒業
          </div>
          <div>
            <span className="mr-2 font-bold">2020</span>
            株式会社 キーマネジメントソリューションズ 入社
          </div>
          <div>現在に至る</div>
        </div>
      </Section>
      <Section title="スキル" className="animate-[slide-in-bck-top_0.9s]">
        <ul className="flex flex-col gap-4">
          <li>React</li>
          <li>TypeScript</li>
        </ul>
      </Section>
      <Section title="好きなこと" className="animate-[slide-in-bck-top_1.1s]">
        <ul className="flex flex-col gap-4">
          <li>映画</li>
          <li>音楽(邦楽)</li>
          <li>ゲーム</li>
        </ul>
      </Section>
      <Section title="My Web" className="animate-[slide-in-bck-top_1.3s]">
        <ul className="flex flex-col gap-4">
          <li className="transition-all hover:underline">
            <a
              href="https://zenn.dev/hokoripon"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2"
            >
              <ZennLogo />
              Zenn
            </a>
          </li>
          <li className="transition-all hover:underline">
            <a
              href="https://github.com/hi-lee-mon"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2"
            >
              <GithubLogo />
              GitHub
            </a>
          </li>
          <li className="transition-all hover:underline">
            <a
              href="https://zenn.dev/nash"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2"
            >
              <ZennLogo />
              現在は更新していないZenn
            </a>
          </li>
        </ul>
      </Section>
    </div>
  )
}
