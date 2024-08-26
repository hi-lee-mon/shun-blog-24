import { Button } from '@/components/ui/button'
import Link from 'next/link'

const links = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/playground',
    label: 'playground',
  },
]

export default function Nav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Button variant="ghost" asChild>
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
