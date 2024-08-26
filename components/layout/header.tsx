import { MobileNav } from '@/components/layout/mobile-nav'
import Nav from '@/components/layout/nav'
import { Button } from '@/components/ui/button'
import { appConstants } from '@/constants/app'
import { Link } from 'next-view-transitions'
import { ModeToggle } from '../theme/mode-toggle'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center gap-4">
          <Button variant="ghost" className="text-2xl font-bold" asChild>
            <Link href="/">{appConstants.title}</Link>
          </Button>
        </div>
        <ModeToggle />
        <span className="mr-4"></span>
        <MobileNav />
        <Nav />
      </div>
    </header>
  )
}
