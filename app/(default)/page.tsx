import { IconLinkGroup, IconLinkGroupItem } from '@/app/(default)/_components/icon-link-group'
import { Section } from '@/app/(default)/_components/section'
import { Button } from '@/components/ui/button'
import { links } from '@/constants/links'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: "Shun's Blog", // TODO:ページの説明を詳細にする
}

export default function Home() {
  return (
    <div>
      <section className="mb-10 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Kameda Shunsukeについて🐢</h1>
        <p className="text-lg">
          Shunsukeは東京で働くフロントエンドエンジニアです。
          <br />
          主にReactを使用したWebアプリケーション開発をしています。
        </p>
        <Button asChild className="w-fit">
          <Link href="/blog">技術ブログを読む</Link>
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
        <Section title="Links" className="animate-[slide-in-bck-top_1.3s]">
          <IconLinkGroup>
            {links.map((link) => (
              <IconLinkGroupItem
                key={link.href}
                logo={link.logo}
                href={link.href}
                linkText={link.linkText}
              />
            ))}
          </IconLinkGroup>
        </Section>
      </div>
    </div>
  )
}
