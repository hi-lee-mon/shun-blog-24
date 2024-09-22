import { GithubLogo } from '@/components/logo/github-logo'
import { ZennLogo } from '@/components/logo/zenn-logo'

export const links = [
  {
    logo: <ZennLogo ariaHidden />,
    href: 'https://zenn.dev/hokoripon',
    linkText: 'Zenn',
  },
  {
    logo: <GithubLogo ariaHidden />,
    href: 'https://github.com/hi-lee-mon/shun-blog-24',
    linkText: 'GitHub',
  },
  {
    logo: <ZennLogo ariaHidden />,
    href: 'https://zenn.dev/nash',
    linkText: '現在は更新していないZenn',
  },
] as const
