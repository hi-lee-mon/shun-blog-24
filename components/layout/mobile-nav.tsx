'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/playground',
    label: 'playground',
  },
]

export const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu size={20} />
          <span className="sr-only">リンク一覧を開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pt-10">
        <nav>
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <SheetClose asChild>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link
                      href={link.href}
                      className={cn('capitalize', pathname === link.href ? 'bg-primary/10' : '')}
                    >
                      {link.label}
                    </Link>
                  </Button>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
