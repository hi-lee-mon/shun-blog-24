import { Button } from '@/components/ui/button'
import { appConstants } from '@/constants/app'
import Link from 'next/link'
import { ModeToggle } from '../theme/mode-toggle'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">{appConstants.title}</Link>
          </Button>
        </div>
        <div className="flex gap-4">
          <ModeToggle />
          <Button variant="ghost" asChild>
            <Link href="/playground">playground</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}