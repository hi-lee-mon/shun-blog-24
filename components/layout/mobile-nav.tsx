'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

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
                    <Link href={link.href} className="capitalize">
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
