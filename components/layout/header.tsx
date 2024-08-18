import { Button } from '@/components/ui/button'
import { appConstants } from '@/constants/app'
import Link from 'next/link'
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
        <div className="flex gap-4">
          <ModeToggle />
          <nav>
            <ul className="flex gap-4">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/playground">playground</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
