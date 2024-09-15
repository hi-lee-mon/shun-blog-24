import { GithubLogo } from '@/components/logo/github-logo'
import { myWebs } from '@/constants/myWeb'

export const Footer = () => {
  const github = myWebs.find((myWeb) => myWeb.linkText === 'GitHub')
  return (
    //  footerを画面下部に配置する場合、親要素のクラスに依存する。左記のクラスを親に設定すること。className="min-h-dvh flex flex-col"
    <footer className="sticky top-full border-t">
      <div className="container flex h-16 items-center">
        <p className="flex-1 text-muted-foreground">&copy; shun 2024</p>
        <a href={github?.href} target="_blank" rel="noreferrer" aria-label={github?.linkText}>
          <GithubLogo ariaHidden />
        </a>
      </div>
    </footer>
  )
}
