'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href} className={cn(pathname === link.href ? 'border-b' : '')}>
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
