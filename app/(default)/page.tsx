import { GithubLogo } from '@/components/logo/github-logo'
import { ZennLogo } from '@/components/logo/zenn-logo'
import { Button } from '@/components/ui/button'
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
    <section className={className}>
      <h2 className="inline-block	 border-b-2 text-xl font-bold">{title}</h2>
      <div className="p-4">{children}</div>
    </section>
  )
}

const IconLinkItem = ({ logo, linkText }: { logo: JSX.Element; linkText: string }) => {
  return (
    <li className="transition-all hover:underline">
      <a href="https://zenn.dev/hokoripon" target="_blank" rel="noreferrer" className="flex gap-2">
        {logo}
        {linkText}
      </a>
    </li>
  )
}

export default function Home() {
  return (
    <div>
      <section className="mb-16 flex flex-col gap-4">
        <h1 className="text-balance text-4xl font-bold">Kameda Shunsukeについて🐢</h1>
        <p className="text-lg">
          Shunsukeは東京で働くフロントエンドエンジニアです。
          <br />
          主にReactを使用したWebアプリケーション開発をしています。
        </p>
        <Button asChild className="w-fit">
          <Link href="/blog">技術ブログページへ</Link>
        </Button>
      </section>
      <div className="flex flex-col gap-8">
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
            <IconLinkItem logo={<ZennLogo />} linkText="Zenn" />
            <IconLinkItem logo={<GithubLogo />} linkText="GitHub" />
            <IconLinkItem logo={<ZennLogo />} linkText="現在は更新していないZenn" />
          </ul>
        </Section>
      </div>
    </div>
  )
}
